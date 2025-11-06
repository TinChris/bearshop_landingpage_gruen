import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import bearLogo from '../assets/Bearshop-Baer-150x150.png';

/**
 * Navigation Komponente - Sticky Navigation mit Glassmorphism
 * Features:
 * - Sticky Top Navigation
 * - Glassmorphism Effekt beim Scrollen
 * - Responsive Hamburger Menu
 * - Smooth Scroll zu Sektionen
 */
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Produkte', href: '#products' },
    { label: 'Warum wir', href: '#why' },
    { label: 'Referenzen', href: '#testimonials' },
    { label: 'Kontakt', href: '#contact' },
  ];

  // Scroll Detection für Glassmorphism Effekt
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Scroll Handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Navigation height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-strong shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <img
                  src={bearLogo}
                  alt="Bearshop Logo"
                  className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(107,181,54,0.8)] group-hover:drop-shadow-[0_0_25px_rgba(107,181,54,1)] transition-all duration-500"
                />
              </div>
              <div className="hidden sm:block text-center">
  <div
    className={`font-jost font-bold text-3xl transition-all duration-500 ${
      isScrolled
        ? 'text-nightBlue drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]'
        : 'text-white drop-shadow-[0_0_10px_rgba(255,180,80,0.8)]'
    }`}
  >
    Bearshop
  </div>
  <div
    className={`font-serif italic text-sm mt-1 transition-all duration-500 ${
      isScrolled
        ? 'text-brandGreen drop-shadow-[0_0_6px_rgba(107,181,54,0.6)]'
        : 'text-brandGreen drop-shadow-[0_0_10px_rgba(107,181,54,0.8)]'
    }`}
  >
    Deine&nbsp;Geschichte&nbsp;mit&nbsp;Still
  </div>
</div>

            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
           {navItems.map((item, index) => (
  <motion.a
    key={item.href}
    href={item.href}
    onClick={(e) => handleNavClick(e, item.href)}
    className={`font-sans font-medium transition-colors duration-500 relative group ${
      isScrolled
        ? 'text-nightBlue hover:text-gummyRed'
        : 'text-white hover:text-gummyOrange drop-shadow-[0_0_6px_rgba(255,180,80,0.8)]'
    }`}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    {item.label}
    <span
      className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ${
        isScrolled ? 'bg-gummyRed' : 'bg-white/70'
      } group-hover:w-full`}
    ></span>
  </motion.a>
))}


              {/* CTA Button */}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-jelly btn-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Anfragen
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-gummyRed to-gummyOrange text-white shadow-lg hover:shadow-2xl transition-all duration-300"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-nightBlue/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-candyWhite z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gummyBlue/20">
                  <div className="font-heading font-bold text-2xl text-nightBlue">
                    Menu
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl hover:bg-gummyRed/10 transition-colors"
                    aria-label="Close Menu"
                  >
                    <X size={24} className="text-nightBlue" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="block p-4 rounded-2xl font-sans font-medium text-lg text-nightBlue hover:bg-gradient-to-r hover:from-gummyRed hover:to-gummyOrange hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-gummyBlue/20">
                  <motion.a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="block btn-jelly btn-cta text-center"
                    whileTap={{ scale: 0.95 }}
                  >
                    Jetzt anfragen
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
