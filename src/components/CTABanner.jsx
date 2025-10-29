import { motion } from 'framer-motion';

/**
 * CTABanner - Call-to-Action Banner
 * Features:
 * - Volle Breite
 * - Gradient Background
 * - Pulsierender Button mit Glow-Effekt
 */
const CTABanner = () => {
  return (
    <section className="section py-20 bg-jelly-gradient relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute w-64 h-64 bg-white rounded-full top-10 left-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-white rounded-full bottom-10 right-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h2 className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl">
            Bereit für dein Projekt?
          </h2>

          {/* Subline */}
          <p className="text-xl md:text-2xl text-white/90 font-sans max-w-2xl mx-auto">
            Lass uns gemeinsam deine Ideen zum Leben erwecken
          </p>

          {/* CTA Button mit Pulse Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex btn-jelly bg-white text-gummyRed hover:bg-candyWhite text-lg px-12 py-5 shadow-2xl animate-pulse-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Kostenlos anfragen
            </motion.a>
          </motion.div>

          {/* Trust Info */}
          <motion.p
            className="text-white/80 text-sm font-sans pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            ✓ Kostenlose Beratung · ✓ Individuelle Angebote · ✓ Schnelle Rückmeldung
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
