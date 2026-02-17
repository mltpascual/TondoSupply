/*
 * DESIGN: Industrial Brutalism — Raw Concrete
 * Collection: Uniform grid product cards — all same size.
 * Sharp hover states, red accent borders.
 * Products snap into view on scroll.
 * Uses real Tondo Supply product photos from Facebook/Instagram.
 */

import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "I ♥ Tundo Tee",
    category: "T-Shirts",
    price: "₱599",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/rbWfzwoKGkImOTJx.jpeg",
    tag: "NEW DROP",
  },
  {
    id: 2,
    name: "MSTR Script Tee",
    category: "T-Shirts",
    price: "₱549",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/mSIvnCYvNIIuXoLo.jpg",
    tag: "BESTSELLER",
  },
  {
    id: 3,
    name: "Tundo Script Jersey",
    category: "Jerseys",
    price: "₱699",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/PQRNGLGdfSMVcGSP.jpeg",
    tag: null,
  },
  {
    id: 4,
    name: "Tundo Red Script Tee",
    category: "T-Shirts",
    price: "₱549",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/DIcoADVVjUIbuaMn.jpg",
    tag: "LIMITED",
  },
];

export default function CollectionSection() {
  return (
    <section id="collection" className="relative py-24 md:py-32 noise-overlay">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-tondo-red uppercase tracking-[0.3em] text-sm mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
            >
              Latest Drops
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl text-offwhite"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              THE COLLECTION
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://shopee.ph/tondosupply"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-sm uppercase tracking-widest text-concrete hover:text-tondo-red transition-colors border-b border-concrete/30 hover:border-tondo-red pb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            View All
          </motion.a>
        </div>

        {/* Product Grid — Uniform Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.a
              key={product.id}
              href="https://shopee.ph/tondosupply"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group relative bg-charcoal-light overflow-hidden border border-border hover:border-tondo-red transition-all duration-200"
            >
              {/* Tag */}
              {product.tag && (
                <div className="absolute top-3 left-3 z-20 px-3 py-1 bg-tondo-red text-offwhite text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  {product.tag}
                </div>
              )}

              {/* Image — uniform aspect ratio for all tiles */}
              <div className="aspect-square overflow-hidden bg-[#111]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-4 border-t border-border">
                <p className="text-concrete/60 text-xs uppercase tracking-widest mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {product.category}
                </p>
                <h3 className="text-offwhite text-lg mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  {product.name}
                </h3>
                <p className="text-tondo-red font-semibold text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {product.price}
                </p>
              </div>

              {/* Hover red line accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-tondo-red group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="https://shopee.ph/tondosupply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-tondo-red text-offwhite uppercase tracking-widest text-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
