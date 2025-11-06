import { motion } from 'framer-motion';
import { Layers, Sparkles, Settings, Heart } from 'lucide-react';

/**
 * WhyBearshop - 4 Karten in 2x2 Grid
 * Features:
 * - 4 Hauptvorteile
 * - Glassmorphism Karten
 * - 2x2 Grid auf Desktop, 1 Spalte auf Mobile
 * - Scroll-triggered Animations
 */
const WhyBearshop = () => {
  const reasons = [
    {
      icon: Layers,
      title: 'Individualisierung',
      description:
        'Gestalte deine Kleidung so einzigartig wie dein Unternehmen. Wir passen Farben, Schnitte, Stickereien und Druckmotive exakt an dein Corporate Design und deine individuellen Bedürfnisse an – für einen professionellen, einheitlichen Auftritt mit Persönlichkeit.',
      color: 'gummyPurple',
    },
    {
      icon: Sparkles,
      title: 'Eleganz',
      description:
        'Setze auf Stil, der Eindruck hinterlässt. Unsere Kollektionen vereinen moderne Schnitte, edle Materialien und dezente Details – ideal für alle, die im Berufsalltag Wert auf ein gepflegtes und repräsentatives Erscheinungsbild legen.',
      color: 'gummyYellow',
    },
    {
      icon: Settings,
      title: 'Funktionalität',
      description:
        'So praktisch wie schön: Unsere Kleidung wird nach den Anforderungen der jeweiligen Branche gefertigt – von robuster Arbeitskleidung über atmungsaktive Sporttextilien bis zu pflegeleichten medizinischen Outfits.',
      color: 'gummyBlue',
    },
    {
      icon: Heart,
      title: 'Qualität',
      description:
        'Wir setzen auf hochwertige Materialien, präzise Verarbeitung und lang anhaltenden Tragekomfort. Jedes Stück wird mit Sorgfalt gefertigt, damit du und dein Team Tag für Tag beste Qualität tragen.',
      color: 'gummyGreen',
    },
  ];

  return (
    <section id="why" className="section bg-jelly-gradient-soft">
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
            Warum Bearshop?
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans max-w-2xl mx-auto">
            Vier gute Gründe, die für uns sprechen
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="card-glass p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-brandGreen"
                >
                  <reason.icon size={32} className="text-white" />
                </div>
              </div>

              {/* Titel */}
              <h3 className="font-jost font-semibold text-2xl text-nightBlue mb-4">
                {reason.title}
              </h3>

              {/* Beschreibung */}
              <p className="font-sans text-nightBlue/70 leading-relaxed text-justify">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBearshop;
