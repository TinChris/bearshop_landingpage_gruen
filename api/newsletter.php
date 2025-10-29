<?php
/**
 * Newsletter API Endpoint (PHP Backend)
 * Handles newsletter subscription for shared hosting
 *
 * Features:
 * - Email validation and sanitization
 * - CSV storage or email notification
 * - JSON response format
 * - CORS support
 * - Duplicate prevention
 */

// Fehlerberichterstattung für Produktion deaktivieren
error_reporting(0);
ini_set('display_errors', 0);

// Header für JSON Response und CORS
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle OPTIONS request (CORS preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Nur POST Requests erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Please use POST.'
    ]);
    exit();
}

/**
 * E-Mail-Adresse bereinigen
 */
function sanitize_email($email) {
    return filter_var(trim($email), FILTER_SANITIZE_EMAIL);
}

/**
 * E-Mail-Adresse validieren
 */
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

/**
 * Überprüfen, ob E-Mail bereits abonniert ist
 */
function is_already_subscribed($email, $csv_file) {
    if (!file_exists($csv_file)) {
        return false;
    }

    $handle = fopen($csv_file, 'r');
    if ($handle === false) {
        return false;
    }

    while (($data = fgetcsv($handle)) !== false) {
        if (isset($data[0]) && strtolower($data[0]) === strtolower($email)) {
            fclose($handle);
            return true;
        }
    }

    fclose($handle);
    return false;
}

/**
 * E-Mail in CSV-Datei speichern
 */
function save_to_csv($email, $csv_file) {
    // Verzeichnis erstellen, falls es nicht existiert
    $dir = dirname($csv_file);
    if (!file_exists($dir)) {
        mkdir($dir, 0755, true);
    }

    // CSV-Header hinzufügen, wenn Datei neu ist
    $is_new_file = !file_exists($csv_file);

    $handle = fopen($csv_file, 'a');
    if ($handle === false) {
        throw new Exception('Could not open CSV file');
    }

    // Header schreiben, wenn Datei neu ist
    if ($is_new_file) {
        fputcsv($handle, ['Email', 'Date', 'IP', 'User Agent']);
    }

    // Daten schreiben
    fputcsv($handle, [
        $email,
        date('Y-m-d H:i:s'),
        $_SERVER['REMOTE_ADDR'],
        $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown'
    ]);

    fclose($handle);
    return true;
}

/**
 * Benachrichtigungs-E-Mail senden
 */
function send_notification($email) {
    $to = getenv('VITE_API_EMAIL') ?: 'info@example.com';
    $subject = 'New Newsletter Subscription';

    $message = "New newsletter subscription:\n\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Date: " . date('Y-m-d H:i:s') . "\n";
    $message .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $message .= "---\n";
    $message .= "Sent from: " . $_SERVER['HTTP_HOST'] . "\n";

    $headers = [];
    $headers[] = 'From: noreply@' . $_SERVER['HTTP_HOST'];
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';

    return mail($to, $subject, $message, implode("\r\n", $headers));
}

try {
    // JSON Input lesen
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // JSON-Fehler prüfen
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON format');
    }

    // E-Mail extrahieren und bereinigen
    $email = isset($data['email']) ? sanitize_email($data['email']) : '';

    // Validierung
    if (empty($email)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Email is required'
        ]);
        exit();
    }

    if (!validate_email($email)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid email address'
        ]);
        exit();
    }

    // CSV-Datei-Pfad (außerhalb des Web-Root für Sicherheit)
    $csv_file = dirname(__DIR__, 2) . '/data/newsletter_subscribers.csv';

    // Prüfen, ob bereits abonniert
    if (is_already_subscribed($email, $csv_file)) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'You are already subscribed!'
        ]);
        exit();
    }

    // In CSV speichern
    save_to_csv($email, $csv_file);

    // Optional: Benachrichtigungs-E-Mail senden
    // Kommentieren Sie die nächste Zeile aus, wenn Sie Benachrichtigungen wünschen
    // send_notification($email);

    // Erfolg
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for subscribing! Check your email for confirmation.'
    ]);

} catch (Exception $e) {
    // Fehlerbehandlung
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred. Please try again later.'
    ]);

    // Fehler in Log-Datei schreiben (optional)
    error_log('Newsletter Error: ' . $e->getMessage());
}
?>
