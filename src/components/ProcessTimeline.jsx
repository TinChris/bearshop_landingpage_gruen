import { motion } from 'framer-motion';
import { MessageSquare, Palette, Truck } from 'lucide-react';

/**
 * ProcessTimeline - 3 Schritte zum Produkt
 * Features:
 * - Timeline Design
 * - Horizontal auf Desktop, vertikal auf Mobile
 * - Animierter Fortschrittsbalken
 */
const ProcessTimeline = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Anfrage',
      description: 'Kontaktiere uns mit deiner Idee. Wir beraten dich kostenlos und unverbindlich.',
      color: 'gummyRed',
    },
    {
      icon: Palette,
      title: 'Design-Abstimmung',
      description: 'Gemeinsam entwickeln wir das perfekte Design für dein Produkt.',
      color: 'gummyYellow',
    },
    {
      icon: Truck,
      title: 'Produktion & Lieferung',
      description: 'Wir produzieren deine Bestellung und liefern sie direkt zu dir.',
      color: 'gummyGreen',
    },
  ];

  return (
    <section className="section bg-jelly-gradient-soft">
      <div className="container-custom">
        {/* Überschrift */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-heading font-semibold text-nightBlue mb-4">
            In 3 Schritten zu deinem Produkt
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans max-w-2xl mx-auto">
            Einfach, schnell und unkompliziert
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gummyBlue/20">
            <motion.div
              className="h-full bg-gradient-to-r from-gummyRed via-gummyYellow to-gummyGreen"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
              >
                {/* Card */}
                <div className="card-glass text-center relative z-10">
                  {/* Icon mit Number Badge */}
                  <div className="relative inline-block mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-${step.color} flex items-center justify-center shadow-xl`}>
                      <step.icon size={40} className="text-white" />
                    </div>
                    {/* Nummer Badge */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-${step.color} to-gummyOrange flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-heading font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Titel */}
                  <h3 className="font-heading font-semibold text-2xl text-nightBlue mb-4">
                    {step.title}
                  </h3>

                  {/* Beschreibung */}
                  <p className="font-sans text-nightBlue/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <motion.div
                      className="w-1 h-12 bg-gradient-to-b from-gummyRed via-gummyYellow to-gummyGreen rounded-full"
                      initial={{ height: 0 }}
                      whileInView={{ height: 48 }}
                      viewport={{ once: false, amount: 0.4 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
        >
          <a
            href="#contact"
            className="btn-jelly btn-cta inline-flex"
          >
            Jetzt Projekt starten
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
