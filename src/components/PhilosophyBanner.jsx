import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * Philosophy Banner - Philosophie-Statement
 * Features:
 * - Zentrierter Text-Block
 * - Sanfter Gradient Background
 * - Sparkles Icon
 * - Responsive Design
 */
const PhilosophyBanner = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-candyWhite via-gummyYellow/20 to-candyWhite"></div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gummyYellow to-gummyOrange flex items-center justify-center shadow-lg">
              <Sparkles size={32} className="text-white" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.p
            className="text-xl md:text-2xl font-sans text-nightBlue leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            Wir kombinieren Design, Funktion und Qualität, um Textilien zu schaffen,
            die nicht nur gut aussehen, sondern perfekt zu deiner Marke und deinem
            Einsatzbereich passen.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophyBanner;
