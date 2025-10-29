import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

/**
 * Footer - 4-Spalten Footer
 * Features:
 * - 4 Spalten auf Desktop, 1 Spalte auf Mobile
 * - Spalte 1: Logo + Claim
 * - Spalte 2: Navigation Links
 * - Spalte 3: Rechtliches
 * - Spalte 4: Social Media
 * - Copyright-Zeile unten
 * - nightBlue Background
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Über uns', href: '#' },
    { label: 'Produkte', href: '#products' },
    { label: 'Referenzen', href: '#testimonials' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutz', href: '#' },
    { label: 'AGB', href: '#' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  ];

  return (
    <footer className="bg-nightBlue text-candyWhite">
      <div className="container-custom py-16">
        {/* 4-Spalten Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Spalte 1 - Logo + Claim */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gummyRed to-gummyOrange rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-xl">B</span>
              </div>
              <div>
                <div className="font-heading font-bold text-xl text-candyWhite">
                  Bearshop
                </div>
              </div>
            </div>
            <p className="font-serif italic text-sm text-gummyYellow mb-4">
              Deine Geschichte mit Still
            </p>
            <p className="font-sans text-sm text-candyWhite/70 leading-relaxed">
              Hochwertiger Textildruck & Merchandise für Schulen, Vereine und Unternehmen.
            </p>
          </motion.div>

          {/* Spalte 2 - Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-candyWhite/70 hover:text-gummyYellow transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spalte 3 - Rechtliches */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-candyWhite/70 hover:text-gummyYellow transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Spalte 4 - Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-lg mb-4">Folge uns</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-candyWhite/10 hover:bg-gummyRed flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <link.icon size={20} className="text-candyWhite" />
                </motion.a>
              ))}
            </div>
            <p className="font-sans text-sm text-candyWhite/70 mt-6 leading-relaxed">
              Bleib auf dem Laufenden über neue Produkte und Aktionen!
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-candyWhite/10 mb-8" />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-sans text-sm text-candyWhite/50">
            © {currentYear} Bearshop. Alle Rechte vorbehalten. Made with{' '}
            <span className="text-gummyRed">❤</span> in Austria
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
