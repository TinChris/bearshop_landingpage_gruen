# 🔍 SEO Checklist für Bearshop

## ✅ Bereits implementiert

### Meta Tags & Grundlagen
- ✅ **Title Tag** optimiert (< 60 Zeichen)
- ✅ **Meta Description** (< 160 Zeichen)
- ✅ **Keywords** relevante Keywords für Österreich
- ✅ **Robots Meta Tag** (index, follow)
- ✅ **Canonical URL** gesetzt
- ✅ **Language Tag** (de)
- ✅ **Theme Color** (#FF4B5C)
- ✅ **Geo Tags** (AT, Wien)

### Open Graph & Social Media
- ✅ **Open Graph Tags** vollständig
- ✅ **Twitter Card Tags**
- ✅ **OG Image** definiert (1200x630px)
- ✅ **Locale** (de_AT)

### Structured Data (JSON-LD)
- ✅ **LocalBusiness Schema**
- ✅ Adresse & Kontaktdaten
- ✅ Öffnungszeiten
- ✅ Geo-Koordinaten
- ✅ Social Media Links

### Technical SEO
- ✅ **robots.txt** erstellt
- ✅ **sitemap.xml** erstellt
- ✅ **Semantic HTML** (section, nav, footer, header)
- ✅ **ARIA Labels** für Accessibility
- ✅ **Responsive Design** (Mobile-First)

### Performance
- ✅ **Vite** für optimierte Builds
- ✅ **Code Splitting** automatisch durch Vite
- ✅ **Font Preconnect** (Google Fonts)
- ✅ **Lazy Loading** durch React

### Content
- ✅ **H1-H6 Struktur** korrekt
- ✅ **Alt-Texte** für wichtige Bilder
- ✅ **Interne Verlinkung** (Navigation)
- ✅ **Deutscher Content** für AT-Markt

---

## 📝 Noch zu erledigen

### 1. Bilder erstellen
- [ ] **OG Image** erstellen (1200x630px)
  - Bearshop Logo + Claim
  - Bunte Farben (Jelly Design)
  - Speichern als: `public/og-image.jpg`

- [ ] **Logo** erstellen
  - PNG Format, transparent
  - 512x512px
  - Speichern als: `public/logo.png`

- [ ] **Favicon** ersetzen
  - Ersetze `public/vite.svg` mit Bearshop Icon
  - Formate: .ico, .png, .svg
  - Verschiedene Größen: 16x16, 32x32, 192x192, 512x512

### 2. Alt-Texte überprüfen
Prüfe alle Bilder und stelle sicher, dass sie aussagekräftige Alt-Texte haben:
```jsx
<img src="..." alt="Beschreibender Text für Bild" />
```

### 3. Weitere Structured Data
Je nach Bedarf hinzufügen:

**Product Schema** (für einzelne Produkte):
```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Bedruckte T-Shirts",
  "description": "Hochwertige T-Shirts mit individuellem Druck",
  "image": "https://bearshop.at/products/tshirts.jpg",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "15.99"
  }
}
```

**Review Schema** (für Testimonials):
```json
{
  "@context": "https://schema.org/",
  "@type": "Review",
  "author": "Maria Schmidt",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  }
}
```

### 4. Google Tools einrichten
- [ ] **Google Search Console** anmelden
  - Website verifizieren
  - Sitemap einreichen
  - Indexierung überwachen

- [ ] **Google Analytics** einbinden (GA4)
  ```html
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  ```

- [ ] **Google My Business** Profil erstellen
  - Firmenprofil mit Adresse, Öffnungszeiten
  - Fotos hochladen
  - Bewertungen sammeln

### 5. Performance Optimierungen
- [ ] **Bild-Optimierung**
  - WebP Format verwenden
  - Lazy Loading für alle Bilder
  - Responsive Images (`srcset`)

- [ ] **Lighthouse Audit** durchführen
  ```bash
  npm run build
  npx lighthouse https://bearshop.at --view
  ```

- [ ] **Core Web Vitals** optimieren
  - LCP < 2.5s (Largest Contentful Paint)
  - FID < 100ms (First Input Delay)
  - CLS < 0.1 (Cumulative Layout Shift)

### 6. Content erweitern
- [ ] **Blog erstellen** (optional)
  - SEO-optimierte Artikel
  - Keywords: "Textildruck Tipps", "T-Shirts bedrucken"
  - Regelmäßige Updates

- [ ] **FAQ Section** hinzufügen
  ```json
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Wie lange dauert die Lieferung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "7-10 Werktage nach Designfreigabe"
      }
    }]
  }
  ```

### 7. Local SEO
- [ ] **NAP konsistent** (Name, Address, Phone)
  - Gleiche Daten überall verwenden
  - Auf allen Plattformen identisch

- [ ] **Lokale Backlinks** aufbauen
  - Branchenverzeichnisse (Herold, WKO)
  - Lokale Partner-Websites

- [ ] **Lokale Keywords**
  - "Textildruck Wien"
  - "Merchandise Salzburg"
  - "T-Shirts bedrucken Graz"

### 8. Social Media & Backlinks
- [ ] Social Media Profile vervollständigen
- [ ] Regelmäßige Posts
- [ ] Backlinks von relevanten Seiten
- [ ] Gastbeiträge auf Blogs

### 9. Monitoring einrichten
- [ ] **Uptime Monitoring** (z.B. UptimeRobot)
- [ ] **Error Tracking** (z.B. Sentry)
- [ ] **Analytics Dashboard**
- [ ] **Wöchentliche SEO-Reports**

---

## 🎯 SEO Prioritäten

### Sofort (Woche 1)
1. OG Image + Favicon erstellen
2. Google Search Console einrichten
3. Sitemap einreichen
4. Alt-Texte überprüfen

### Kurzfristig (Monat 1)
1. Google Analytics einbinden
2. Google My Business erstellen
3. Lighthouse Audit durchführen
4. Performance optimieren

### Mittelfristig (Monat 2-3)
1. Content erweitern (Blog, FAQ)
2. Lokale Backlinks aufbauen
3. Social Media Strategie
4. Weitere Structured Data

### Langfristig (ab Monat 4)
1. Regelmäßiger Content
2. Link Building
3. Rankings überwachen
4. Kontinuierliche Optimierung

---

## 📊 SEO Metriken zu überwachen

### Google Search Console
- Impressions (Ansichten in Suche)
- Clicks (Klicks auf Website)
- CTR (Click-Through-Rate)
- Average Position (Durchschnittliche Position)
- Top Keywords

### Google Analytics
- Organic Traffic (Besucher von Suchmaschinen)
- Bounce Rate (Absprungrate)
- Session Duration (Sitzungsdauer)
- Pages per Session
- Conversions (Kontaktformular)

### Core Web Vitals
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

---

## 🔧 Tools & Resources

### SEO Tools (kostenlos)
- **Google Search Console** - https://search.google.com/search-console
- **Google Analytics** - https://analytics.google.com
- **Google PageSpeed Insights** - https://pagespeed.web.dev
- **Mobile-Friendly Test** - https://search.google.com/test/mobile-friendly
- **Rich Results Test** - https://search.google.com/test/rich-results

### SEO Tools (kostenpflichtig, optional)
- Ahrefs (Backlink-Analyse)
- SEMrush (Keyword-Recherche)
- Moz (Domain Authority)
- Sistrix (DACH-Region spezialisiert)

### Monitoring Tools
- UptimeRobot (Uptime Monitoring)
- Hotjar (Heatmaps & User Behavior)
- Sentry (Error Tracking)

---

## 📚 Weitere Tipps

### Content Marketing
- Regelmäßiger Blog (1-2x Monat)
- Social Media Posts (3-5x Woche)
- Newsletter (1x Monat)
- Case Studies von Kunden

### Link Building
- Gastbeiträge auf relevanten Blogs
- Partnerships mit lokalen Unternehmen
- Branchenverzeichnisse
- Pressemitteilungen

### Technical SEO
- HTTPS aktiviert? ✅ (wichtig!)
- Mobile-friendly? ✅
- Schnelle Ladezeit? (< 3s)
- Saubere URL-Struktur
- No duplicate content

---

**Viel Erfolg mit dem SEO für Bearshop! 🚀**
