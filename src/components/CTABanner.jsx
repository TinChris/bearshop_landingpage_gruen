import { motion } from 'framer-motion';
import BearLogoBlau from '../assets/bearshop_logo_blau.svg';
import BearLogoRot from '../assets/bearshop_logo_rot.svg';

/**
 * CTABanner - Call-to-Action Banner
 * Features:
 * - Volle Breite
 * - Gradient Background
 * - Pulsierender Button mit Glow-Effekt
 */
const CTABanner = () => {
  return (
    <section className="section py-20 bg-hero-soft relative overflow-hidden">
      {/* Floating Bearshop Bären Background - Nur auf Desktop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {/* Bär 1 - Neon Grün */}
        <motion.div
          className="absolute top-40 left-40 opacity-30"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src={BearLogoRot}
            alt=""
            className="w-40 h-40"
            style={{
              filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(450%) hue-rotate(55deg) brightness(95%) contrast(85%)',
              dropShadow: '0 0 20px rgba(107, 181, 54, 0.8)'
            }}
          />
        </motion.div>

        {/* Bär 2 - Neon Grün */}
        <motion.div
          className="absolute top-40 right-20 opacity-30"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <img
            src={BearLogoBlau}
            alt=""
            className="w-32 h-32"
            style={{
              filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(450%) hue-rotate(55deg) brightness(95%) contrast(85%)',
              dropShadow: '0 0 20px rgba(107, 181, 54, 0.8)'
            }}
          />
        </motion.div>

        {/* Bär 3 - Neon Grün */}
        <motion.div
          className="absolute bottom-32 left-1/4 opacity-30"
          animate={{
            y: [0, -35, 0],
            x: [0, 25, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        >
          <img
            src={BearLogoRot}
            alt=""
            className="w-36 h-36"
            style={{
              filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(450%) hue-rotate(55deg) brightness(95%) contrast(85%)',
              dropShadow: '0 0 20px rgba(107, 181, 54, 0.8)'
            }}
          />
        </motion.div>

        {/* Bär 4 - Neon Grün */}
        <motion.div
          className="absolute bottom-20 right-1/3 opacity-30"
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <img
            src={BearLogoBlau}
            alt=""
            className="w-28 h-28"
            style={{
              filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(450%) hue-rotate(55deg) brightness(95%) contrast(85%)',
              dropShadow: '0 0 20px rgba(107, 181, 54, 0.8)'
            }}
          />
        </motion.div>

        {/* Bär 5 - Neon Grün */}
        <motion.div
          className="absolute top-1/3 right-10 opacity-30"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          <img
            src={BearLogoRot}
            alt=""
            className="w-34 h-34"
            style={{
              filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(450%) hue-rotate(55deg) brightness(95%) contrast(85%)',
              dropShadow: '0 0 20px rgba(107, 181, 54, 0.8)'
            }}
          />
        </motion.div>

        {/* Bär 6 - Neon Grün */}
        <motion.div
          className="absolute top-1/2 left-10 opacity-30"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        >
          <img
            src={BearLogoBlau}
            alt=""
            className="w-30 h-30"
            style={{
              filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(450%) hue-rotate(55deg) brightness(95%) contrast(85%)',
              dropShadow: '0 0 20px rgba(107, 181, 54, 0.8)'
            }}
          />
        </motion.div>

        {/* Bär 7 - Neon Grün */}
        <motion.div
          className="absolute top-2/3 right-1/4 opacity-30"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2.5,
          }}
        >
          <img
            src={BearLogoRot}
            alt=""
            className="w-24 h-24"
            style={{
              filter: 'brightness(0) saturate(100%) invert(64%) sepia(85%) saturate(450%) hue-rotate(55deg) brightness(95%) contrast(85%)',
              dropShadow: '0 0 20px rgba(107, 181, 54, 0.8)'
            }}
          />
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
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
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
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
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
          >
            ✓ Kostenlose Beratung · ✓ Individuelle Angebote · ✓ Schnelle Rückmeldung
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
