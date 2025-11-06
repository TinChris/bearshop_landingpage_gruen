import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';

/**
 * Testimonials - Carousel mit Kundenbewertungen
 * Features:
 * - Auto-Scroll alle 5 Sekunden
 * - Manuelle Navigation (Dots + Pfeile)
 * - Glassmorphism Karten
 * - 5-Sterne Rating
 */
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-Scroll Effekt
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-candyWhite">
      <div className="container-custom">
        {/* Überschrift */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <h2 className="font-heading font-semibold text-nightBlue mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans max-w-2xl mx-auto">
            Echte Bewertungen von zufriedenen Kunden
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <div className="card-glass h-full flex flex-col justify-between">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={24} className="fill-gummyYellow text-gummyYellow" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-serif italic text-nightBlue leading-relaxed mb-8 flex-1">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gummyRed to-gummyOrange flex items-center justify-center shadow-lg">
                      <span className="text-white font-heading font-bold text-2xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-lg text-nightBlue">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="font-sans text-nightBlue/60">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <motion.button
              onClick={prevSlide}
              className="pointer-events-auto -ml-4 md:-ml-16 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gummyRed hover:bg-gummyRed hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="pointer-events-auto -mr-4 md:-mr-16 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gummyRed hover:bg-gummyRed hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gummyRed w-8'
                    : 'bg-gummyRed/30 hover:bg-gummyRed/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
