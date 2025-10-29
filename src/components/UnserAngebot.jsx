import { motion } from 'framer-motion';
import { GraduationCap, Wrench, Stethoscope, Dumbbell, Briefcase } from 'lucide-react';

/**
 * Unser Angebot - 5 Produktkategorien
 * Features:
 * - 5-Spalten Grid auf Desktop
 * - Horizontal Scroll auf Mobile/Tablet
 * - Hover-Effekte
 * - Fußzeile mit Zusatztext
 */
const UnserAngebot = () => {
  const categories = [
    {
      icon: GraduationCap,
      title: 'Schulkleidung',
      color: 'gummyRed',
    },
    {
      icon: Wrench,
      title: 'Arbeitstextilien',
      color: 'gummyOrange',
    },
    {
      icon: Stethoscope,
      title: 'Medizintextilien',
      color: 'gummyYellow',
    },
    {
      icon: Dumbbell,
      title: 'Sportbekleidung',
      color: 'gummyGreen',
    },
    {
      icon: Briefcase,
      title: 'Corporate Fashion',
      color: 'gummyBlue',
    },
  ];

  return (
    <section className="section bg-candyWhite">
      <div className="container-custom">
        {/* Überschrift */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-semibold text-nightBlue mb-4">
            Unser Angebot
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans max-w-2xl mx-auto">
            Maßgeschneiderte Textillösungen für jeden Bereich
          </p>
        </motion.div>

        {/* 5-Spalten Grid (Desktop) / Scroll (Mobile) */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 min-w-max md:min-w-0">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="card-glass p-6 flex flex-col items-center text-center min-w-[200px] md:min-w-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-4"
                  style={{ backgroundColor: `var(--${category.color}, #FF4B5C)` }}
                >
                  <category.icon size={40} className="text-white" />
                </div>

                {/* Titel */}
                <h3 className="font-heading font-semibold text-lg text-nightBlue">
                  {category.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fußzeile */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg font-sans text-nightBlue/80 max-w-3xl mx-auto leading-relaxed">
            Veredelt mit modernstem Textildruck und Stickverfahren wird jedes
            Kleidungsstück zu einem echten Markenbotschafter.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UnserAngebot;
