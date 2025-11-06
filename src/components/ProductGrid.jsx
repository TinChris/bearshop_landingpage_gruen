import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { products } from '../data/products';
import TshirtImage from '../assets/tshirt_skyblue.jpg';
import HoodieRotImage from '../assets/hoodie_ziegelrot.jpg';
import HoodieBlauImage from '../assets/hoodie_zip_blau.jpg';
import HoverImage from '../assets/DeinLogo_DeinStil.jpg';

/**
 * ProductGrid - Produktübersicht mit Glassmorphism-Karten
 * Features:
 * - Responsive Grid (3/2/1 Spalten)
 * - Glassmorphism Effekt
 * - Hover Animations
 * - Dynamische Icons von Lucide React
 * - Produkt-Bild Placeholders
 */
const ProductGrid = () => {
  // Mapping von Produkt-IDs zu Bildern
  const productImages = {
    1: TshirtImage,           // T-Shirts
    2: HoodieRotImage,        // Hoodies & Pullover
    // 3-6 verwenden Gradient-Placeholder
  };

  return (
    <section id="products" className="section bg-jelly-gradient-soft">
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
            Unsere Produkte
          </h2>
          <p className="text-lg text-nightBlue/70 font-sans max-w-2xl mx-auto">
            Von T-Shirts bis Taschen – wir bedrucken alles mit deinem individuellen Design
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = Icons[product.icon];
            const productImage = productImages[product.id];

            return (
              <motion.div
                key={product.id}
                className="card-glass flex flex-col min-h-[680px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
              >
                {/* Produkt-Bild / Placeholder */}
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-6 group">
                  {productImage ? (
                    // Echtes Produktbild mit Hover-Effekt
                    <>
                      <img
                        src={productImage}
                        alt={product.name}
                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img
                        src={HoverImage}
                        alt="Dein Logo, Dein Stil"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </>
                  ) : (
                    // Gradient Placeholder mit Hover-Effekt
                    <>
                      <div
                        className="w-full h-full bg-gradient-to-br flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0"
                        style={{
                          background: `linear-gradient(135deg, #2f4b96 0%, #1a2f60 100%)`,
                          opacity: 0.8,
                        }}
                      >
                        {IconComponent && (
                          <IconComponent size={80} className="text-brandGreen/80" />
                        )}
                      </div>
                      <img
                        src={HoverImage}
                        alt="Dein Logo, Dein Stil"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </>
                  )}
                </div>

                {/* Icon + Produktname */}
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 bg-brandGreen"
                  >
                    {IconComponent && (
                      <IconComponent size={24} className="text-white" />
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-nightBlue">
                    {product.name}
                  </h3>
                </div>

                {/* Beschreibung */}
                <p className="font-sans text-nightBlue/70 mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* Link */}
                <motion.a
                  href={product.link}
                  className="inline-flex items-center gap-2 text-gummyRed font-medium hover:gap-4 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Mehr erfahren</span>
                  <Icons.ArrowRight size={20} />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
