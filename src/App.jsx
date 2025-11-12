/**
 * Bearshop - Hauptanwendung
 * Marketing-Website mit Jelly Design System
 */
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import PhilosophyBanner from './components/PhilosophyBanner';
import ProductGrid from './components/ProductGrid';
import WhyBearshop from './components/WhyBearshop';
import UnserAngebot from './components/UnserAngebot';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="overflow-x-hidden">
        {/* Hero Section - Vollbild mit Gradient */}
        <Hero />

        {/* Logo Ticker - Kunden-Referenzen */}
        <LogoTicker />

        {/* Philosophie Banner */}
        <PhilosophyBanner />

        {/* Produkte Section */}
        <ProductGrid />

        {/* Warum Bearshop Section */}
        <WhyBearshop />

        {/* Unser Angebot - 5 Kategorien */}
        <UnserAngebot />

        {/* Prozess Timeline */}
        <ProcessTimeline />

        {/* Testimonials Carousel - Deactivated for later use */}
        {/* <Testimonials /> */}

        {/* CTA Banner */}
        <CTABanner />

        {/* Kontaktformular */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
