import { motion } from 'framer-motion';
import { customers } from '../data/customers';

/**
 * LogoTicker - Infinite scrollende Kunden-Logos
 * Features:
 * - Zwei Reihen mit unterschiedlichen Scroll-Richtungen
 * - Grayscale mit Hover-Effekt
 * - Infinite Animation
 */
const LogoTicker = () => {
  // Logos für beide Reihen duplizieren für seamless Loop
  const row1Logos = [...customers, ...customers];
  const row2Logos = [...customers.slice().reverse(), ...customers.slice().reverse()];

  return (
    <section className="section bg-candyWhite py-16">
      <div className="container-custom">
        {/* Überschrift */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-semibold text-nightBlue mb-3">
            Uns vertrauen bereits
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans">
            über 3500 zufriedene Kunden österreichweit
          </p>
        </motion.div>

        {/* Logo Ticker - Reihe 1 (nach links) */}
        <div className="overflow-hidden mb-8">
          <div className="flex gap-12 logo-scroll">
            {row1Logos.map((customer, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center group"
              >
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-nightBlue/10 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 hover:shadow-xl bg-white"
                  style={{ borderColor: customer.color + '20' }}
                >
                  <div className="text-center">
                    <div
                      className="font-heading font-bold text-3xl"
                      style={{ color: customer.color }}
                    >
                      {customer.initials}
                    </div>
                    <div className="text-[10px] text-nightBlue/50 mt-1 font-sans">
                      {customer.name.split(' ')[0]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Ticker - Reihe 2 (nach rechts) */}
        <div className="overflow-hidden">
          <div className="flex gap-12 logo-scroll-reverse">
            {row2Logos.map((customer, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center group"
              >
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-nightBlue/10 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 hover:shadow-xl bg-white"
                  style={{ borderColor: customer.color + '20' }}
                >
                  <div className="text-center">
                    <div
                      className="font-heading font-bold text-3xl"
                      style={{ color: customer.color }}
                    >
                      {customer.initials}
                    </div>
                    <div className="text-[10px] text-nightBlue/50 mt-1 font-sans">
                      {customer.name.split(' ')[0]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
