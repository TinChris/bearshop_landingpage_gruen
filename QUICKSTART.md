# 🚀 Quick Start Guide - Offline Testen

## Voraussetzungen

- Node.js installiert (Version 18 oder höher)
- Für PHP-Backend: PHP installiert (Version 7.4 oder höher)

### Node.js Installation prüfen

```bash
node -v
# Sollte v18 oder höher anzeigen
```

Falls nicht installiert: [Node.js herunterladen](https://nodejs.org/)

### PHP Installation prüfen (optional)

```bash
php -v
# Sollte PHP 7.4 oder höher anzeigen
```

---

## Option 1: Ohne PHP-Backend testen (Empfohlen für ersten Test)

### Schritt 1: Dependencies installieren

```bash
npm install
```

### Schritt 2: Environment-Konfiguration

Öffnen Sie `.env` und setzen Sie:

```env
VITE_USE_PHP=false
VITE_API_EMAIL=ihre-email@example.com
```

### Schritt 3: Development-Server starten

```bash
npm run dev
```

### Schritt 4: Im Browser öffnen

Öffnen Sie: **http://localhost:3000**

**Hinweis**: Die Formulare werden NICHT funktionieren (keine echten Emails), aber Sie können das gesamte Design und die UI testen.

---

## Option 2: Mit PHP-Backend testen (Empfohlen für vollständigen Test)

### Schritt 1: Dependencies installieren

```bash
npm install
```

### Schritt 2: Environment-Konfiguration

Öffnen Sie `.env` und setzen Sie:

```env
VITE_USE_PHP=true
VITE_API_EMAIL=ihre-email@example.com
```

### Schritt 3: Zwei Terminals öffnen

#### Terminal 1 - React Development Server

```bash
npm run dev
```

Sollte zeigen: `Local: http://localhost:3000`

#### Terminal 2 - PHP Development Server

```bash
php -S localhost:8000 -t public
```

Sollte zeigen: `PHP 8.x Development Server (http://localhost:8000) started`

### Schritt 4: Im Browser öffnen

Öffnen Sie: **http://localhost:3000**

**Jetzt funktioniert alles**: Formulare, Email-Versand (via PHP mail()), Newsletter-Speicherung

---

## 🎯 Was Sie testen können

### Design & UI
- ✅ Hero-Sektion mit Animationen
- ✅ Responsive Design (Browser-Fenster verkleinern)
- ✅ Dark Mode Toggle (oben rechts)
- ✅ Smooth Scrolling zu Sektionen
- ✅ Feature-Cards mit Hover-Effekten

### Formulare (nur mit PHP-Backend)
- ✅ Kontaktformular ausfüllen und absenden
- ✅ Newsletter-Anmeldung
- ✅ Validation-Fehler testen (leere Felder)
- ✅ Success/Error Messages

### Entwickler-Features
- ✅ "PHP Mode" / "Serverless Mode" Badge (oben rechts)
- ✅ Hot Module Replacement (Änderungen live sehen)
- ✅ Console-Logs für API-Aufrufe

---

## 🐛 Troubleshooting

### Problem: `npm install` schlägt fehl

**Lösung**:
```bash
# Cache löschen
npm cache clean --force

# Nochmal versuchen
npm install
```

### Problem: Port 3000 bereits belegt

**Lösung**: Vite wählt automatisch einen anderen Port (z.B. 3001)

Oder manuell Port ändern in `vite.config.js`:
```javascript
server: {
  port: 3001,
  // ...
}
```

### Problem: PHP-Server startet nicht

**Lösung 1**: PHP nicht installiert
```bash
# Windows: PHP von https://windows.php.net/download/ herunterladen
# Mac: brew install php
# Linux: sudo apt-get install php
```

**Lösung 2**: Port 8000 belegt
```bash
# Anderen Port verwenden
php -S localhost:8001 -t public

# Dann in vite.config.js anpassen:
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8001',  // Geänderter Port
      // ...
    }
  }
}
```

### Problem: Formulare funktionieren nicht (PHP-Modus)

**Checkliste**:
1. ✅ Beide Server laufen? (Terminal 1 + 2)
2. ✅ `.env` hat `VITE_USE_PHP=true`?
3. ✅ Browser-Console auf Fehler prüfen (F12)
4. ✅ PHP-Server-Terminal auf Fehler prüfen

### Problem: Email wird nicht gesendet

Das ist normal in der lokalen Entwicklung! PHP's `mail()` Funktion benötigt einen konfigurierten Mail-Server.

**Lösung für echten Test**:
- Auf echtem Shared Hosting deployen
- Oder SMTP-Server lokal konfigurieren (kompliziert)
- Oder Serverless-Variante mit Email-Service testen

**Zum Testen**: Die PHP-Dateien geben trotzdem Success-Messages zurück, auch wenn die Email nicht verschickt wird.

---

## 🔍 Erweiterte Tests

### Build testen (Production-Version)

```bash
# Build erstellen
npm run build

# Preview-Server starten
npm run preview
```

Öffnen Sie: **http://localhost:4173**

### PHP-Backend separat testen

```bash
# PHP-Server starten
php -S localhost:8000 -t public

# In einem neuen Terminal mit curl testen:
curl -X POST http://localhost:8000/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

Sollte JSON-Response zurückgeben.

---

## ⚡ Performance-Tipps

### Hot Module Replacement zu langsam?

```bash
# In vite.config.js:
server: {
  hmr: {
    overlay: false  // Overlay deaktivieren
  }
}
```

### Zu viele Console-Logs?

In `src/config/api.js` die Debug-Logs auskommentieren.

---

## 📝 Nächste Schritte

Nach erfolgreichem lokalen Test:

1. **Design anpassen**:
   - Farben in `tailwind.config.js`
   - Texte in `src/components/*.jsx`

2. **Deployment vorbereiten**:
   - Siehe `README.md` für Deployment-Anleitungen
   - Shared Hosting oder Vercel/Netlify

3. **Email-Service integrieren** (für Serverless):
   - SendGrid, Resend, oder AWS SES
   - Siehe Kommentare in `api/contact.js`

---

## 🆘 Hilfe benötigt?

- README.md lesen (ausführliche Dokumentation)
- Browser Console prüfen (F12)
- Terminal-Ausgaben prüfen
- Code-Kommentare lesen

Viel Erfolg! 🎉
