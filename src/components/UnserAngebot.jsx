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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-heading font-semibold text-nightBlue mb-4">
            Unser Angebot
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans max-w-2xl mx-auto">
            Maßgeschneiderte Textillösungen für jeden Bereich
          </p>
        </motion.div>

        {/* 5-Spalten Grid (Desktop) */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="card-glass p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
              >
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-4 bg-brandGreen"
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
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
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
