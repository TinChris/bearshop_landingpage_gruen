import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import BearLogoBlau from '../assets/bearshop_logo_blau.svg';
import BearLogoRot from '../assets/bearshop_logo_rot.svg';
import HeroVideo from '../assets/danceInHoodie.mp4';
import FallbackImage from '../assets/DeinLogo_DeinStil.jpg';

/**
 * Hero Section - Hauptsektion mit Gradient und Animation
 * Features:
 * - Voller Viewport
 * - Gradient Background
 * - Floating Bearshop Bären-Logos
 * - Responsive Layout (Text + Video)
 * - Video spielt einmal, dann Bild
 * - Mobile: Video direkt unter Titel
 * - Scroll Indicator
 * - CTA Buttons
 */
const Hero = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  // Scroll Handler für Scroll Indicator
  const handleScrollDown = () => {
    const element = document.querySelector('#products');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Video Ende Handler
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-soft"
    >
      {/* Video Background - Nur auf Mobile */}
      <div className="absolute inset-0 lg:hidden">
        {!videoEnded ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={FallbackImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        )}
        {/* Dark Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

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

      {/* Hero Content - Responsive Layout */}
      <div className="container-custom relative z-10">
        {/* Mobile Layout - Alles zentriert über Video */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 py-20 lg:hidden min-h-[80vh]">
          {/* Titel */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="font-heading font-bold text-white drop-shadow-2xl text-center px-4">
              Dein Partner für <br />
              Bekleidung & Textildruck
            </h1>
          </motion.div>

          {/* Subline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg text-white/95 font-sans leading-relaxed drop-shadow-lg px-6">
              Maßgeschneiderte Lösungen für jeden Anspruch – vom Schulalltag bis zum Businessauftritt.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <motion.a
              href="#contact"
              className="btn-jelly bg-brandGreen text-white hover:bg-brandGreen/90 shadow-[0_0_30px_rgba(107,181,54,0.6)] animate-pulse-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt anfragen
            </motion.a>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            className="text-white/90 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm font-sans mb-1">Vertrauen schenken uns bereits:</p>
            <p className="text-lg font-heading font-semibold">
              Über 200 zufriedene Kunden österreichweit
            </p>
          </motion.div>
        </div>

        {/* Desktop Layout - Grid mit Video rechts */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center py-20">

          {/* Titel */}
          <motion.div
            className="text-center w-full lg:col-span-1"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="font-heading font-bold text-white drop-shadow-2xl text-center">
              Dein Partner für <br />
              Bekleidung & Textildruck
            </h1>
          </motion.div>

          {/* Video - rechts auf Desktop */}
          <motion.div
            className="flex justify-center lg:justify-end w-full lg:col-span-1 lg:row-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-md">
              {/* Video Container - 9:16 Aspect Ratio (Portrait/Stehend) */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: '9/16' }}
              >
                {!videoEnded ? (
                  /* Video Element */
                  <video
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={HeroVideo} type="video/mp4" />
                    Dein Browser unterstützt das Video-Format nicht.
                  </video>
                ) : (
                  /* Fallback Bild nach Video Ende */
                  <img
                    src={FallbackImage}
                    alt="Dein Logo, Dein Stil"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Glass Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-4 border-white/20 pointer-events-none"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 right-0 lg:-right-4 bg-gummyGreen text-white px-6 py-3 rounded-full shadow-xl font-heading font-semibold"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-sm">200+ Kunden</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Rest vom Text Content */}
          <motion.div
            className="text-center space-y-8 w-full lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            {/* Subline */}
            <p className="text-xl md:text-2xl text-white/95 font-sans leading-relaxed drop-shadow-lg text-center">
              Maßgeschneiderte Lösungen für jeden Anspruch – vom Schulalltag bis zum Businessauftritt.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <motion.a
                href="#contact"
                className="btn-jelly bg-brandGreen text-white hover:bg-brandGreen/90 shadow-[0_0_30px_rgba(107,181,54,0.6)] animate-pulse-glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Jetzt anfragen
              </motion.a>
            </div>

            {/* Trust Badge */}
            <div className="pt-8 text-white/90">
              <p className="text-sm font-sans mb-2">Vertrauen schenken uns bereits:</p>
              <p className="text-lg font-heading font-semibold">
                Über 200 zufriedene Kunden österreichweit
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2 group cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        aria-label="Scroll to content"
      >
        <span className="text-sm font-sans font-medium tracking-wide">Mehr erfahren</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown
            size={32}
            className="group-hover:text-gummyYellow transition-colors duration-300"
          />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
