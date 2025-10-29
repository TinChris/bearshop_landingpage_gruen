<?php
/**
 * Contact Form API Endpoint (PHP Backend)
 * Handles contact form submissions for shared hosting
 *
 * Features:
 * - Input validation and sanitization
 * - Email sending via PHP mail()
 * - JSON response format
 * - CORS support
 * - Rate limiting (basic)
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
 * Eingabe bereinigen und validieren
 */
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

/**
 * E-Mail-Adresse validieren
 */
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

/**
 * Einfacher Rate-Limiter (IP-basiert)
 * Verhindert Spam durch zu viele Requests
 */
function check_rate_limit() {
    $ip = $_SERVER['REMOTE_ADDR'];
    $rate_limit_file = sys_get_temp_dir() . '/contact_rate_limit_' . md5($ip);

    // Prüfen, ob eine Rate-Limit-Datei existiert
    if (file_exists($rate_limit_file)) {
        $last_request_time = (int)file_get_contents($rate_limit_file);
        $current_time = time();

        // Mindestens 60 Sekunden zwischen Requests
        if (($current_time - $last_request_time) < 60) {
            return false;
        }
    }

    // Aktuelle Zeit speichern
    file_put_contents($rate_limit_file, time());
    return true;
}

try {
    // Rate Limiting prüfen
    if (!check_rate_limit()) {
        http_response_code(429);
        echo json_encode([
            'success' => false,
            'message' => 'Too many requests. Please wait a moment before trying again.'
        ]);
        exit();
    }

    // JSON Input lesen
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // JSON-Fehler prüfen
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON format');
    }

    // Erforderliche Felder extrahieren und bereinigen
    $name = isset($data['name']) ? sanitize_input($data['name']) : '';
    $email = isset($data['email']) ? sanitize_input($data['email']) : '';
    $phone = isset($data['phone']) ? sanitize_input($data['phone']) : '';
    $projectType = isset($data['projectType']) ? sanitize_input($data['projectType']) : '';
    $message = isset($data['message']) ? sanitize_input($data['message']) : '';

    // Validierung
    $errors = [];

    if (empty($name)) {
        $errors[] = 'Name ist erforderlich';
    } elseif (strlen($name) < 2) {
        $errors[] = 'Name muss mindestens 2 Zeichen lang sein';
    }

    if (empty($email)) {
        $errors[] = 'E-Mail ist erforderlich';
    } elseif (!validate_email($email)) {
        $errors[] = 'Ungültige E-Mail-Adresse';
    }

    // Telefon ist optional, aber wenn vorhanden, validieren
    if (!empty($phone) && !preg_match('/^[0-9+\-\s()]+$/', $phone)) {
        $errors[] = 'Ungültige Telefonnummer';
    }

    if (empty($projectType)) {
        $errors[] = 'Projektart ist erforderlich';
    }

    if (empty($message)) {
        $errors[] = 'Nachricht ist erforderlich';
    } elseif (strlen($message) < 10) {
        $errors[] = 'Nachricht muss mindestens 10 Zeichen lang sein';
    }

    // Fehler zurückgeben, falls vorhanden
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => implode(', ', $errors)
        ]);
        exit();
    }

    // E-Mail-Empfänger (aus Umgebungsvariable oder Standard)
    $to = getenv('VITE_API_EMAIL') ?: 'kontakt@bearshop.at';

    // E-Mail-Betreff
    $subject = 'Neue Anfrage von ' . $name . ' - Bearshop';

    // E-Mail-Nachricht (Plain Text)
    $email_message = "Neue Kontaktanfrage über Bearshop Website:\n\n";
    $email_message .= "Name: " . $name . "\n";
    $email_message .= "E-Mail: " . $email . "\n";
    if (!empty($phone)) {
        $email_message .= "Telefon: " . $phone . "\n";
    }
    $email_message .= "Projektart: " . $projectType . "\n\n";
    $email_message .= "Nachricht:\n" . $message . "\n\n";
    $email_message .= "---\n";
    $email_message .= "Gesendet von: " . $_SERVER['HTTP_HOST'] . "\n";
    $email_message .= "IP-Adresse: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $email_message .= "Zeit: " . date('d.m.Y H:i:s') . "\n";

    // E-Mail-Header
    $headers = [];
    $headers[] = 'From: ' . $email;
    $headers[] = 'Reply-To: ' . $email;
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';

    // E-Mail senden
    $mail_sent = mail($to, $subject, $email_message, implode("\r\n", $headers));

    if ($mail_sent) {
        // Erfolg
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.'
        ]);
    } else {
        // Fehler beim Senden
        throw new Exception('Failed to send email');
    }

} catch (Exception $e) {
    // Fehlerbehandlung
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred. Please try again later.'
    ]);

    // Fehler in Log-Datei schreiben (optional)
    error_log('Contact Form Error: ' . $e->getMessage());
}
?>
