# 🐻 Bearshop - Marketing Website

**Deine Geschichte mit Still** - Eine moderne, lebendige Marketing-Website für Textildruck & Merchandise mit dem Jelly Design System.

## 🎨 Design System

Diese Website verwendet das **Jelly Design System** - ein verspieltes, farbenfrohes Design-System basierend auf einer Gummibärchen-Farbpalette:

- **gummyRed** `#FF4B5C` - Primäre CTAs
- **gummyOrange** `#FF914D` - Hover & Akzente
- **gummyYellow** `#FFD93D` - Highlights
- **gummyGreen** `#6BCB77` - Erfolg
- **gummyBlue** `#4D96FF` - Links & Icons
- **gummyPurple** `#9B59B6` - Sekundär
- **candyWhite** `#FFF8F0` - Heller Hintergrund
- **nightBlue** `#1E2A38` - Dunkles Theme

## ✨ Features

- ⚡ **React 18** mit Vite 5 für blitzschnelle Performance
- 🎨 **Jelly Design System** mit Tailwind CSS
- 🎭 **Framer Motion** für butterweiche Animationen
- 🎯 **Lucide React** für moderne Icons
- 📱 **Mobile-First** und voll responsive
- ♿ **Accessible** mit ARIA-Labels
- 🔄 **Hybrid Architecture** - PHP oder Serverless

## 🏗️ Komponenten

### 1. Navigation
Sticky Navigation mit Glassmorphism, Hamburger-Menu für Mobile

### 2. Hero Section
Vollbild-Hero mit buntem Gradient und floating Gummibärchen-Shapes

### 3. Logo Ticker
Infinite scrollende Kundenlogos (2 Reihen in entgegengesetzter Richtung)

### 4. Product Grid
6 Produktkarten mit Glassmorphism und Hover-Effekten

### 5. Why Bearshop
2-Spalten Layout mit 5 Vorteilen und animierter Visualisierung

### 6. Process Timeline
3 Schritte zum Produkt mit animiertem Fortschrittsbalken

### 7. Testimonials
Auto-Scroll Carousel mit 5 Kundenbewertungen

### 8. CTA Banner
Volle Breite mit pulsierendem Button und Glow-Effekt

### 9. Contact Form
2-Spalten Layout:
- Links: Formular (Name, E-Mail, Telefon, Projektart, Nachricht)
- Rechts: Kontaktinformationen

### 10. Footer
4-Spalten Footer mit Social Media Links

## 🚀 Quick Start

### Installation

```bash
# Dependencies installieren
npm install

# Dev Server starten
npm run dev

# Build für Production
npm run build
```

### Konfiguration

Kopiere `.env.example` nach `.env` und passe die Werte an:

```bash
# PHP Backend (Shared Hosting)
VITE_USE_PHP=true
VITE_API_EMAIL=kontakt@bearshop.at

# Oder Serverless (Vercel/Netlify)
VITE_USE_PHP=false
```

## 📁 Projektstruktur

```
bearshop/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx        # Sticky Navigation
│   │   ├── Hero.jsx              # Hero mit Gradient
│   │   ├── LogoTicker.jsx        # Scrollende Logos
│   │   ├── ProductGrid.jsx       # Produktkarten
│   │   ├── WhyBearshop.jsx       # Vorteile
│   │   ├── ProcessTimeline.jsx   # 3-Schritte Timeline
│   │   ├── Testimonials.jsx      # Kunden-Carousel
│   │   ├── CTABanner.jsx         # Call-to-Action
│   │   ├── ContactForm.jsx       # Kontaktformular
│   │   └── Footer.jsx            # Footer mit 4 Spalten
│   ├── data/
│   │   ├── products.js           # Produktdaten
│   │   ├── testimonials.js       # Kundenbewertungen
│   │   └── customers.js          # Kundenlogos
│   ├── config/
│   │   └── api.js                # API-Konfiguration
│   ├── App.jsx                   # Hauptkomponente
│   ├── main.jsx                  # Entry Point
│   └── index.css                 # Jelly Design System CSS
├── public/
│   └── api/
│       └── contact.php           # PHP Backend
├── .env                          # Environment Variables
├── tailwind.config.js            # Tailwind + Jelly Tokens
├── vite.config.js                # Vite Config
└── package.json
```

## 🎯 Deployment

### Option 1: Shared Hosting (PHP)

1. Build erstellen:
```bash
npm run build
```

2. Upload `dist/` Inhalt nach `public_html/`

3. PHP Backend kopieren:
```bash
cp public/api/contact.php public_html/api/
```

4. `.env` konfigurieren:
```bash
VITE_USE_PHP=true
VITE_API_EMAIL=kontakt@bearshop.at
```

### Option 2: Vercel (Serverless)

1. Vercel CLI installieren:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Environment Variables in Vercel Dashboard setzen:
- `VITE_USE_PHP=false`
- `VITE_API_EMAIL=kontakt@bearshop.at`

### Option 3: Netlify (Serverless)

1. Netlify CLI installieren:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

3. Environment Variables in Netlify Dashboard setzen

## 🎨 Customization

### Farben anpassen

Bearbeite `tailwind.config.js`:

```javascript
colors: {
  gummyRed: '#FF4B5C',      // Deine Farbe
  gummyOrange: '#FF914D',   // Deine Farbe
  // ...
}
```

### Fonts anpassen

1. Google Fonts Link in `index.html` ändern
2. `tailwind.config.js` aktualisieren:

```javascript
fontFamily: {
  heading: ['Deine-Font', 'system-ui', 'sans-serif'],
  sans: ['Deine-Font', 'system-ui', 'sans-serif'],
}
```

### Inhalte anpassen

Bearbeite die Data-Dateien in `src/data/`:
- `products.js` - Produktdaten
- `testimonials.js` - Kundenbewertungen
- `customers.js` - Kundenlogos

## 🧪 Tech Stack

- **Frontend**: React 18, Vite 5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Fonts**: Poppins, Inter, Merriweather (Google Fonts)
- **Backend**: PHP (Shared Hosting) oder Node.js Serverless

## 📝 Scripts

```bash
# Development Server
npm run dev

# Production Build
npm run build

# Preview Build
npm run preview

# Linting (optional)
npm run lint
```

## 🔧 Troubleshooting

### Formular funktioniert nicht

- PHP: Prüfe ob `mail()` Funktion aktiviert ist
- Serverless: Prüfe Logs in Vercel/Netlify Dashboard
- CORS: Prüfe CORS Headers in Backend

### Build Errors

```bash
# Cache löschen
rm -rf node_modules dist
npm install
```

### Styling Issues

- Prüfe ob Tailwind CSS die richtigen Dateien scannt
- Rebuild: `npm run dev`

## 📄 License

MIT License - frei verwendbar für kommerzielle und private Projekte

## 🤝 Contributing

Contributions sind willkommen! Bitte erstelle einen Pull Request.

## 📧 Support

Bei Fragen oder Problemen:
- E-Mail: kontakt@bearshop.at
- GitHub Issues

---

**Made with ❤ in Austria**

Bearshop - Deine Geschichte mit Still
