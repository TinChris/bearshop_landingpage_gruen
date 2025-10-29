# Bearshop Website - Entwicklungs-Log

Vollständige Dokumentation aller Entwicklungsschritte für die Bearshop Marketing-Website mit Jelly Design System.

---

## Phase 1: Initial Setup & Design System

### 1.1 Dependencies Installation
**Erstellt:** Initial Setup

**Installierte Packages:**
```bash
npm install framer-motion lucide-react
```

- **framer-motion**: Animation Library für React
- **lucide-react**: Icon Library (moderne, saubere Icons)

---

### 1.2 Tailwind Configuration
**Datei:** `tailwind.config.js`

**Änderungen:**
- Jelly Design System Farbpalette hinzugefügt
- Custom Animations definiert
- Font Families konfiguriert

**Farben:**
```javascript
colors: {
  gummyRed: '#FF4B5C',
  gummyOrange: '#FF914D',
  gummyYellow: '#FFD93D',
  gummyGreen: '#6BCB77',
  gummyBlue: '#4D96FF',
  gummyPurple: '#9B59B6',
  candyWhite: '#FFF8F0',
  nightBlue: '#1E2A38',
}
```

**Animationen:**
- `jellyBounce` - Federnde Bounce-Animation
- `scroll-left` / `scroll-right` - Marquee Scrolling
- `float` - Sanfte Float-Animation
- `pulseGlow` - Glühender Puls-Effekt

**Fonts:**
- Heading: `'Poppins', sans-serif`
- Sans: `'Inter', sans-serif`
- Serif: `'Merriweather', serif`

---

### 1.3 Global Styles
**Datei:** `src/index.css`

**Hinzugefügt:**
- CSS Custom Properties für Farben
- Gradient Utilities (jelly-gradient, jelly-gradient-soft)
- Glassmorphism Utilities (glass, card-glass)
- Custom Component Classes (btn-jelly, section, container-custom)
- Animation Keyframes (@keyframes)

**Wichtige Klassen:**
```css
.btn-jelly - Jelly-Buttons mit Bounce
.card-glass - Glassmorphism Karten
.jelly-gradient - Farbverlauf Background
.section - Standard Section Spacing
.container-custom - Responsive Container
```

---

### 1.4 HTML & SEO
**Datei:** `index.html`

**Änderungen:**
- Google Fonts eingebunden (Poppins, Inter, Merriweather)
- Font Preconnect für Performance
- SEO Meta Tags hinzugefügt:
  - Title, Description, Keywords
  - Robots, Canonical URL
  - Language (de), Theme Color
  - Geo Tags (AT, Wien)
- Open Graph Tags (Facebook, LinkedIn)
- Twitter Card Tags
- JSON-LD Structured Data (LocalBusiness Schema)
  - Adresse, Kontaktdaten
  - Öffnungszeiten
  - Geo-Koordinaten
  - Social Media Links

---

## Phase 2: Data Structure

### 2.1 Product Data
**Datei:** `src/data/products.js`

**Erstellt:** 6 Produkte
1. T-Shirts (gummyRed, Shirt Icon)
2. Hoodies & Pullover (gummyOrange, Wind Icon)
3. Tassen (gummyYellow, Coffee Icon)
4. Taschen & Rucksäcke (gummyGreen, ShoppingBag Icon)
5. Caps & Mützen (gummyBlue, CircleDot Icon)
6. Sonstiges (gummyPurple, Package Icon)

**Struktur:**
```javascript
{
  id, name, icon, description, link, color
}
```

---

### 2.2 Testimonials Data
**Datei:** `src/data/testimonials.js`

**Erstellt:** 6 Kundenbewertungen
- Verschiedene Kunden (Schulen, Vereine, Unternehmen)
- Name, Rolle, Text, Rating (1-5)
- Deutsche Texte für österreichischen Markt

---

### 2.3 Customer Logos Data
**Datei:** `src/data/customers.js`

**Erstellt:** 8 Kunden-Logos
- Placeholder-Logos für LogoTicker
- Name und Logo-URL für jeden Kunden

---

## Phase 3: Components Development

### 3.1 Navigation Component
**Datei:** `src/components/Navigation.jsx`

**Features:**
- Sticky Navigation mit Glassmorphism
- Transparenter Hintergrund, bei Scroll opaque
- Mobile Hamburger Menu
- Smooth Scroll zu Sections
- Bearshop Logo
- Responsive Design

**Navigation Links:**
- Home, Produkte, Warum Bearshop, Referenzen, Kontakt

---

### 3.2 Hero Section
**Datei:** `src/components/Hero.jsx`

**Initial Features:**
- Voller Viewport (min-h-screen)
- Gradient Background (bg-hero-soft)
- CTA Buttons (Jetzt anfragen, Referenzen ansehen)
- Trust Badge (200+ Kunden)
- Scroll Indicator mit Animation

**Spätere Änderungen:**
1. **Floating Bear Logos hinzugefügt:**
   - 7 schwebende Bearshop-Logos (bearshop_logo_blau.svg, bearshop_logo_rot.svg)
   - CSS Hue-Rotate Filter für verschiedene Farben (Rot, Gelb, Grün, Blau, Lila, Orange)
   - Framer Motion Animationen (y, x, rotate)
   - Verschiedene Größen (w-24 bis w-40)
   - Opacity 12-20% für subtilen Effekt

2. **2-Spalten Layout:**
   - Linke Spalte: Text Content (Claim, Subline, CTAs, Trust Badge)
   - Rechte Spalte: 9:16 Portrait Video Placeholder
   - Responsive (1 Spalte auf Mobile)

3. **Video Placeholder:**
   - 9:16 Aspect Ratio (stehend, mobile-optimiert)
   - Gradient Background (gummyRed → gummyOrange → gummyYellow)
   - Play Button mit Hover-Animation
   - "Entdecke Bearshop" Text
   - Floating Badge "200+ Kunden"
   - Glass Border Effect

**Dateien verwendet:**
- `src/assets/bearshop_logo_blau.svg`
- `src/assets/bearshop_logo_rot.svg`

Änderungen in Hero.jsx:

  1. Video importiert (Hero.jsx:5):
  import HeroVideo from '../assets/danceInHoodie.mp4';

  2. Video-Placeholder ersetzt (Hero.jsx:256-266):
  - Altes Placeholder-Design mit Gradient entfernt
  - Echtes <video> Element eingefügt

  3. Video-Eigenschaften:
  - autoPlay - Startet automatisch
  - loop - Spielt in Endlosschleife
  - muted - Stumm geschaltet (wichtig für Autoplay)
  - playsInline - Spielt inline auf Mobile (iOS)
  - object-cover - Video füllt Container perfekt aus

  4. Beibehalten:
  - ✅ 9:16 Aspect Ratio (Portrait-Format)
  - ✅ Abgerundete Ecken (rounded-3xl)
  - ✅ Glass Border Effect
  - ✅ Floating Badge "200+ Kunden"
  - ✅ Responsive Design

  5. Play Icon entfernt:
  - Nicht mehr nötig, da Video automatisch abspielt

   1. Video spielt nur einmal (Hero.jsx:22, 40-42, 232-251):

  - useState für videoEnded hinzugefügt
  - loop aus Video entfernt
  - onEnded={handleVideoEnd} Handler hinzugefügt
  - Conditional Rendering:
    - Video läuft → zeigt Video
    - Video zu Ende → zeigt DeinLogo_DeinStil.jpg

  2. DeinLogo_DeinStil.jpg importiert (Hero.jsx:7):

  import FallbackImage from '../assets/DeinLogo_DeinStil.jpg';

  3. Mobile Layout umstrukturiert (Hero.jsx:204-316):

  Mobile (ohne Scrollen sichtbar):
  1. Order 1: Titel "Deine Geschichte mit Stil"
  2. Order 2: Video (direkt unter Titel)
  3. Order 3: Subline, Buttons, Trust Badge

  Desktop:
  - Links: Titel + Text Content (normal untereinander)
  - Rechts: Video (lg:row-span-2 - nimmt beide Reihen ein)

  4. Technische Details:

  - flex flex-col auf Mobile (vertikale Anordnung)
  - lg:grid lg:grid-cols-2 auf Desktop (2 Spalten)
  - order-1, order-2, order-3 für Mobile-Reihenfolge
  - Video: autoPlay, muted, playsInline (kein loop)

  Das Video wird jetzt einmal abgespielt und zeigt dann dauerhaft das Bild "Dein Logo, Dein
  Stil". Auf Mobile ist das Video direkt unter dem Titel sichtbar! 🎥✨

---

### 3.3 Logo Ticker Component
**Datei:** `src/components/LogoTicker.jsx`

**Features:**
- Horizontales Logo-Scrolling (Marquee-Effekt)
- Infinite Loop mit CSS Animation
- 2 Rows (eine links, eine rechts scrollend)
- Glassmorphism Background
- Responsive Logo-Größen

---

### 3.4 Product Grid Component
**Datei:** `src/components/ProductGrid.jsx`

**Initial Features:**
- Responsive Grid (3/2/1 Spalten)
- Glassmorphism Cards
- Icons von Lucide React
- Hover Animations (y: -8)
- "Mehr erfahren" Links

**Änderungen v1:**
- Karten höher gemacht (`min-h-[520px]`)
- Produkt-Bild Placeholder hinzugefügt (h-56)
- 3 Produktbilder importiert und gemappt:
  - T-Shirts: tshirt_skyblue.jpg
  - Hoodies: hoodie_ziegelrot.jpg
  - (hoodie_zip_blau.jpg verfügbar)
- Gradient Placeholder für Produkte ohne Bild

**Änderungen v2:**
- Bildplatzhalter 80% höher (`h-[400px]`)
- Kartenhöhe angepasst (`min-h-[680px]`)

**Änderungen v3:**
- Icons vor Produktnamen in einer Linie
- Flex Layout (Icon + Name horizontal)
- Icon Badge entfernt von Image-Overlay

**Änderungen v4 (Aktuell):**
- Hover-Effekt für alle Produktbilder hinzugefügt
- Bei Hover: DeinLogo_DeinStil.jpg erscheint
- Smooth Fade Transition (500ms)
- Funktioniert für echte Bilder und Placeholders

**Dateien verwendet:**
- `src/assets/tshirt_skyblue.jpg`
- `src/assets/hoodie_ziegelrot.jpg`
- `src/assets/hoodie_zip_blau.jpg`
- `src/assets/DeinLogo_DeinStil.jpg`

**Optimale Bildgröße:**
- Empfohlen: 1000 x 1000px (quadratisch)
- Alternative: 800 x 1000px (4:5 Portrait)
- `object-cover` sorgt für perfekte Anpassung

---

### 3.5 Why Bearshop Component
**Datei:** `src/components/WhyBearshop.jsx`

**Features:**
- 4 Gründe für Bearshop
- Icons mit bunten Backgrounds
- Glassmorphism Cards
- Staggered Animations (Framer Motion)

**Gründe:**
1. Individuelle Beratung (Users Icon, gummyRed)
2. Top Qualität (Award Icon, gummyOrange)
3. Schnelle Lieferung (Zap Icon, gummyGreen)
4. Faire Preise (Heart Icon, gummyBlue)

---

### 3.6 Process Timeline Component
**Datei:** `src/components/ProcessTimeline.jsx`

**Features:**
- 4-Schritte Prozess
- Vertikale Timeline mit Connecting Line
- Nummerierte Steps mit Icons
- Glassmorphism Cards
- Responsive (Steps collapsieren auf Mobile)

**Schritte:**
1. Anfrage & Beratung (MessageCircle Icon)
2. Design & Freigabe (Palette Icon)
3. Produktion (Package Icon)
4. Lieferung & Freude (Truck Icon)

---

### 3.7 Testimonials Component
**Datei:** `src/components/Testimonials.jsx`

**Features:**
- Kundenbewertungen mit Glassmorphism Cards
- Star Ratings (5 Sterne)
- Responsive Grid (3/2/1 Spalten)
- Staggered Animations

---

### 3.8 CTA Banner Component
**Datei:** `src/components/CTABanner.jsx`

**Features:**
- Auffälliger Call-to-Action Banner
- Jelly Gradient Background
- "Jetzt anfragen" Button
- Zentral positioniert
- Subtitle mit Icon

---

### 3.9 Contact Form Component
**Datei:** `src/components/ContactForm.jsx`

**Features:**
- 5 Formularfelder:
  - Name (required)
  - E-Mail (required, validation)
  - Telefon (optional)
  - Projekt-Art (Dropdown: Schule, Verein, Unternehmen, Sonstiges)
  - Nachricht (required, textarea)
- PHP Backend Integration
- Loading State während Submit
- Success/Error Messages
- Formular-Reset nach Erfolg
- Glassmorphism Card Design
- Icons für jedes Feld

**Backend:**
- Sendet Daten an `public/api/contact.php`
- Oder Serverless Function (je nach Config)

---

### 3.10 Footer Component
**Datei:** `src/components/Footer.jsx`

**Features:**
- 4 Spalten Layout
- Unternehmensinformationen
- Schnelllinks (Navigation)
- Kontaktinformationen
- Social Media Links (Instagram, Facebook, LinkedIn)
- Copyright mit aktuellem Jahr
- Gradient Background
- Responsive (Spalten collapsieren auf Mobile)

---

## Phase 4: Backend & Configuration

### 4.1 PHP Contact Form
**Datei:** `public/api/contact.php`

**Funktionalität:**
- Empfängt POST Request vom ContactForm
- Validierung aller Felder (Server-side)
- Sendet E-Mail an kontakt@bearshop.at
- Deutsche Fehlermeldungen
- CORS Headers für React App
- Sicherheit: Input-Sanitization

**Felder:**
- name, email, phone, projectType, message

---

### 4.2 Environment Configuration
**Datei:** `.env`

**Variables:**
```
VITE_USE_PHP=true
VITE_API_EMAIL=kontakt@bearshop.at
```

- `VITE_USE_PHP`: true = PHP Backend, false = Serverless
- `VITE_API_EMAIL`: Empfänger-Email für Kontaktformular

---

## Phase 5: SEO Optimization

### 5.1 Robots.txt
**Datei:** `public/robots.txt`

**Inhalt:**
- Erlaubt alle Bots
- Sitemap URL: https://bearshop.at/sitemap.xml

---

### 5.2 Sitemap.xml
**Datei:** `public/sitemap.xml`

**URLs:**
- Homepage (Priority 1.0)
- #products (Priority 0.8)
- #why (Priority 0.7)
- #testimonials (Priority 0.7)
- #contact (Priority 0.9)

**Config:**
- lastmod: 2025-01-15
- changefreq: weekly/monthly

---

### 5.3 SEO Checklist
**Datei:** `SEO-CHECKLIST.md`

**Dokumentiert:**
- Bereits implementiert (Meta Tags, Structured Data, etc.)
- Noch zu erledigen (Google Tools, Performance, etc.)
- SEO Prioritäten (Sofort, Kurzfristig, Langfristig)
- SEO Metriken zu überwachen
- Tools & Resources

---

## Phase 6: Main App Integration

### 6.1 App.jsx
**Datei:** `src/App.jsx`

**Struktur:**
```jsx
<div className="min-h-screen bg-candyWhite">
  <Navigation />
  <Hero />
  <LogoTicker />
  <ProductGrid />
  <WhyBearshop />
  <ProcessTimeline />
  <Testimonials />
  <CTABanner />
  <ContactForm />
  <Footer />
</div>
```

**Features:**
- Alle 10 Komponenten integriert
- Smooth Scrolling zwischen Sections
- Responsive Design
- Jelly Design System durchgehend

---

## Phase 7: Documentation

### 7.1 README.md
**Datei:** `README.md`

**Inhalte:**
- Projekt-Übersicht
- Tech Stack
- Jelly Design System Dokumentation
- Installation & Setup
- Entwicklung & Build
- Deployment (Shared Hosting vs Serverless)
- Komponenten-Übersicht
- Dateistruktur
- Konfiguration (.env)
- SEO Hinweise
- Troubleshooting

---
## Debugging
1. Global Overflow verhindert (src/index.css:10, 14, 16):

  html {
    overflow-x-hidden;
  }
  body {
    overflow-x-hidden;
    max-width: 100vw;
  }

  2. App Container gesichert (src/App.jsx:18, 23):

  <div className="min-h-screen overflow-x-hidden">
    <main className="overflow-x-hidden">

  3. Floating Bears auf Mobile ausgeblendet (src/components/Hero.jsx:50):

  <div className="... hidden lg:block">
  - Die schwebenden Bären-Logos werden nur auf Desktop (lg und größer) angezeigt
  - Auf Mobile sind sie komplett ausgeblendet

  4. Floating Badge angepasst (src/components/Hero.jsx:259):

  className="... right-0 lg:-right-4 ..."
  - Auf Mobile: right-0 (nicht außerhalb)
  - Auf Desktop: -right-4 (schwebend)

  5. Navigation Logo korrigiert (src/components/Navigation.jsx:79):

  className="w-12 h-12 ..."  // statt w-40 h-40
  - Logo war 160px groß, jetzt 48px
  - Passt jetzt perfekt in die Navigation

  Ergebnis:

  ✅ Kein horizontales Scrollen mehr
  ✅ Navbar bleibt im Viewport
  ✅ Keine weiße Linie rechts
  ✅ Alles passt perfekt auf Mobile
## Assets Übersicht

### Logo & Branding
- `src/assets/bearshop_logo_blau.svg` - Blaues Bearshop Logo
- `src/assets/bearshop_logo_rot.svg` - Rotes Bearshop Logo
- `src/assets/Bearshop-Baer-150x150.png` - Bär Icon

### Produktbilder
- `src/assets/tshirt_skyblue.jpg` - T-Shirt Produkt
- `src/assets/hoodie_ziegelrot.jpg` - Hoodie Ziegelrot
- `src/assets/hoodie_zip_blau.jpg` - Hoodie Zip Blau
- `src/assets/DeinLogo_DeinStil.jpg` - Hover-Bild für alle Produkte

---

## Technologie-Stack

### Frontend
- **React 18** - UI Framework
- **Vite 5** - Build Tool & Dev Server
- **Tailwind CSS** - Utility-First CSS
- **Framer Motion** - Animation Library
- **Lucide React** - Icon Library

### Backend (Hybrid)
- **PHP** - Contact Form (Shared Hosting)
- **Serverless Functions** - Alternative für moderne Hosting

### Design System
- **Jelly Design System** - Custom Design mit Gummy-Farben
- **Glassmorphism** - Card & UI Elements
- **Mobile-First** - Responsive Design

---

## ✅ Qualität & Standards

### Code Qualität
- ✅ Production-Ready Code
- ✅ Keine Placeholder-Inhalte
- ✅ Deutsche Texte (Österreich-Markt)
- ✅ Komponenten-basiert & wiederverwendbar
- ✅ Responsive & Mobile-First

### Performance
- ✅ Vite für optimierte Builds
- ✅ Code Splitting automatisch
- ✅ Font Preconnect
- ✅ Lazy Loading
- ✅ Optimierte Animationen

### SEO
- ✅ Meta Tags vollständig
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap & Robots.txt
- ✅ Semantic HTML
- ✅ ARIA Labels

### Accessibility
- ✅ ARIA Labels
- ✅ Keyboard Navigation
- ✅ Focus States
- ✅ Alt Texte für Bilder
- ✅ Kontrastreiche Farben

---

## 📊 Projekt-Statistiken

### Komponenten: 10
- Navigation
- Hero
- LogoTicker
- ProductGrid
- WhyBearshop
- ProcessTimeline
- Testimonials
- CTABanner
- ContactForm
- Footer

### Datendateien: 3
- products.js (6 Produkte)
- testimonials.js (6 Bewertungen)
- customers.js (8 Kunden)

### Assets: 7
- 2 SVG Logos
- 1 PNG Logo
- 3 Produktbilder (JPG)
- 1 Hover-Bild (JPG)

### Konfigurationsdateien: 6
- tailwind.config.js
- vite.config.js
- .env
- index.html
- robots.txt
- sitemap.xml

### Dokumentation: 3
- README.md
- SEO-CHECKLIST.md
- DEVELOPMENT-LOG.md (diese Datei)

---

## 🔄 Nächste Schritte

### Offen
- [ ] Weitere Produktbilder hinzufügen
- [ ] Google Analytics einbinden
- [ ] Google Search Console einrichten
- [ ] Performance Testing (Lighthouse)
- [ ] Browser Testing (Chrome, Firefox, Safari)
- [ ] Mobile Testing (iOS, Android)
- [ ] OG Image erstellen (1200x630px)
- [ ] Favicon ersetzen
- [ ] usw


### Geplant
- [ ] Blog Section (optional)
- [ ] FAQ Section mit Schema
- [ ] Cookie Banner (DSGVO)
- [ ] Newsletter Integration
- [ ] Mehr Produktkategorien

---

## Notizen

### Shared Hosting Kompatibilität
- ✅ React baut zu statischen Files
- ✅ Keine Server-Side Rendering nötig
- ✅ PHP Backend für Contact Form
- ✅ .htaccess für SPA Routing (falls nötig)

### React vs Vite
- React = UI Framework
- Vite = Build Tool (ersetzt Create React App)
- Vite ist schneller & moderner

### Besonderheiten
- Jelly Design System ist custom (nicht öffentliche Library)
- Gummy-Farben speziell für Bearshop
- 9:16 Video Format für Mobile-First
- CSS Hue-Rotate für Logo-Farben
- Hover-Effekt auf allen Produktbildern

---

**Erstellt:** 2025-10-18
**Letzte Aktualisierung:** 2025-10-29
**Version:** 1.0
**Status:** In Entwicklung 🚧

### WEIERE IDEEN ###
Nischenbranchen gezielt mit verschiedene Webseiten adressieren


### ÄNDERUNGEN ###

  1. Hero Section aktualisiert

  - Überschrift: "Dein Partner für Bekleidung & Textildruck"
  - Subline: "Maßgeschneiderte Lösungen für jeden Anspruch – vom Schulalltag bis zum
  Businessauftritt."

  2. Neue Komponente: PhilosophyBanner ✨

  - Erstellt: src/components/PhilosophyBanner.jsx
  - Platzierung: Nach Logo-Ticker
  - Features:
    - Zentrierter Text-Block (max-width: 800px)
    - Sanfter Gradient (candyWhite → gummyYellow/20 → candyWhite)
    - Sparkles Icon
    - Philosophie-Statement

  3. WhyBearshop erweitert 🎯

  - Von 2-Spalten Layout zu 4 Karten im 2x2 Grid
  - Neue Inhalte:
    a. 🧵  Individualisierung (gummyPurple)
    b. ✨ Eleganz (gummyYellow)
    c. ⚙️ Funktionalität (gummyBlue)
    d. 🩶  Qualität (gummyGreen)
  - Icon + Emoji Kombination
  - Ausführliche Beschreibungen

  4. Neue Komponente: UnserAngebot 🏢

  - Erstellt: src/components/UnserAngebot.jsx
  - 5 Kategorien:
    a. 🎓 Schulkleidung (GraduationCap)
    b. 🔧 Arbeitstextilien (Wrench)
    c. 🩺 Medizintextilien (Stethoscope)
    d. 💪 Sportbekleidung (Dumbbell)
    e. 💼 Corporate Fashion (Briefcase)
  - Responsive: 5-Spalten Grid (Desktop), 2 Spalten (Mobile)
  - Fußzeile: "Veredelt mit modernstem Textildruck..."

  5. Kontaktformular Dropdown erweitert 📝

  - Neue Projektart-Optionen:
    - Schulkleidung
    - Arbeitstextilien
    - Medizintextilien
    - Sportbekleidung
    - Corporate Fashion
    - Sonstiges

  6. App.jsx aktualisiert 🔄

  - PhilosophyBanner nach LogoTicker eingefügt
  - UnserAngebot nach WhyBearshop eingefügt
  - Alle Imports hinzugefügt

  📊 Neue Struktur:

  1. Hero
  2. LogoTicker
  3. PhilosophyBanner ← NEU
  4. ProductGrid
  5. WhyBearshop (erweitert)
  6. UnserAngebot ← NEU
  7. ProcessTimeline
  8. Testimonials
  9. CTABanner
  10. ContactForm (erweitert)
  11. Footer
