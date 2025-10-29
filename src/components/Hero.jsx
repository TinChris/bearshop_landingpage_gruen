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
      {/* Floating Bearshop Bären Background - Nur auf Desktop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {/* Bär 1 - Rot (Original) */}
        <motion.div
          className="absolute top-40 left-40 opacity-15"
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
          <img src={BearLogoRot} alt="" className="w-40 h-40 drop-shadow-2xl" />
        </motion.div>

        {/* Bär 2 - Gelb (mit Filter) */}
        <motion.div
          className="absolute top-40 right-20 opacity-15"
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
            className="w-32 h-32 drop-shadow-2xl"
            style={{ filter: 'hue-rotate(30deg) saturate(1.5)' }}
          />
        </motion.div>

        {/* Bär 3 - Grün */}
        <motion.div
          className="absolute bottom-32 left-1/4 opacity-15"
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
            className="w-36 h-36 drop-shadow-2xl"
            style={{ filter: 'hue-rotate(90deg) saturate(1.2)' }}
          />
        </motion.div>

        {/* Bär 4 - Blau (Original) */}
        <motion.div
          className="absolute bottom-20 right-1/3 opacity-15"
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
          <img src={BearLogoBlau} alt="" className="w-28 h-28 drop-shadow-2xl" />
        </motion.div>

        {/* Bär 5 - Lila */}
        <motion.div
          className="absolute top-1/3 right-10 opacity-15"
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
            className="w-34 h-34 drop-shadow-2xl"
            style={{ filter: 'hue-rotate(270deg) saturate(1.3)' }}
          />
        </motion.div>

        {/* Bär 6 - Orange */}
        <motion.div
          className="absolute top-1/2 left-10 opacity-12"
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
            className="w-30 h-30 drop-shadow-2xl"
            style={{ filter: 'hue-rotate(15deg) saturate(0.3)' }}
          />
        </motion.div>

        {/* Bär 7 - Zusätzlicher kleiner Bär */}
        <motion.div
          className="absolute top-2/3 right-1/4 opacity-18"
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
            className="w-24 h-24 drop-shadow-2xl"
            style={{ filter: 'hue-rotate(180deg) saturate(1.4)' }}
          />
        </motion.div>
      </div>

      {/* Hero Content - Responsive Layout */}
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center py-20">

          {/* Titel - Order 1 auf Mobile */}
          <motion.div
            className="text-center lg:text-left w-full lg:col-span-1 order-1"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-bold text-white drop-shadow-2xl">
              Dein Partner für <br />
              <span className="text-gummyYellow">Bekleidung & Textildruck</span>
            </h1>
          </motion.div>

          {/* Video - Order 2 auf Mobile, bleibt rechts auf Desktop */}
          <motion.div
            className="flex justify-center lg:justify-end w-full lg:col-span-1 order-2 lg:row-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
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

          {/* Rest vom Text Content - Order 3 auf Mobile */}
          <motion.div
            className="text-center lg:text-left space-y-8 w-full lg:col-span-1 order-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Subline */}
            <p className="text-xl md:text-2xl text-white/95 font-sans leading-relaxed drop-shadow-lg">
              Maßgeschneiderte Lösungen für jeden Anspruch – vom Schulalltag bis zum Businessauftritt.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 pt-8">
              <motion.a
                href="#contact"
                className="btn-jelly bg-white text-gummyRed hover:bg-candyWhite hover:scale-110 shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Jetzt anfragen
              </motion.a>
              <motion.a
                href="#testimonials"
                className="btn-jelly btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Referenzen ansehen
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
