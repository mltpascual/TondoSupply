/*
 * DESIGN: Industrial Brutalism — Raw Concrete
 * Collection: Staggered masonry-style product cards.
 * Sharp hover states, red accent borders.
 * Products snap into view on scroll.
 */

import { motion } from "framer-motion";

const HOODIE_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/8TBuKGeukmtREMYSNEfQmq/sandbox/gqOKwpJpklEzM3siDG4QAC-img-2_1771306212000_na1fn_dG9uZG8tcHJvZHVjdC1ob29kaWU.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOFRCdUtHZXVrbXRSRU1ZU05FZlFtcS9zYW5kYm94L2dxT0t3cEpwa2xFek0zc2lERzRRQUMtaW1nLTJfMTc3MTMwNjIxMjAwMF9uYTFmbl9kRzl1Wkc4dGNISnZaSFZqZEMxb2IyOWthV1UuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qBCkrw3ZT7FtODI8iNJo1nGLD-SHxz6ajQM11r6if09F1MIroB6u7UGEjEAFKnfQSxlZybIJrGWRiOTyIrujY4mq7vWngNc0nN9kBtAiw2WB3VMTHhJcH-7CIbziE2ZZtEjcYbJ37dpqTjjDrBuEw~fRepJuJxgyrxf5Qawjf1xEK8FGnzJIzHUXIpIKISXyf5fTDKddEVFMrAJ97KuyNdKAOxcWQi9cwVk~NJFf1L3TfsdVn9qjnAzUbWfjdxe8GFxm0ltA24FVS0CnVtLbAuvDtQql9EKxw9ZRE-p4x8k6gK3ihn1dEfz0T5J2L4g55bDK2ViPpEvc8N08n5MZpA__";
const TSHIRT_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/8TBuKGeukmtREMYSNEfQmq/sandbox/gqOKwpJpklEzM3siDG4QAC-img-3_1771306208000_na1fn_dG9uZG8tcHJvZHVjdC10c2hpcnQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOFRCdUtHZXVrbXRSRU1ZU05FZlFtcS9zYW5kYm94L2dxT0t3cEpwa2xFek0zc2lERzRRQUMtaW1nLTNfMTc3MTMwNjIwODAwMF9uYTFmbl9kRzl1Wkc4dGNISnZaSFZqZEMxMGMyaHBjblEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NgOjq9ELlBGcUcxki2a5h-misUAeM~sDegYAn2QYZ2qD3XmHh4h5-MBA4ar7OguousWEtIia0w8IME12DHV12TyCSuYteOYflpx9wq9qhT34KTATwfw60~cqSLBrsggfe-isketzvPB6RPOt00wgv-~Wf388A0BkTex2vfsMXoXDQOqrK-OoZqwpjT5Y5tbyhunZBryzeGMyG2ZamNLZnBpYsndl5LuHDK7BKGWo1zTL4M7j-B7t2xiVhjTd-~7Hq7DbKglLGZm7B8NfnhwdwIdRTg9PygHAjhrJFJwUhzQvff9ASJIZQxBb3zpLQWU0OETGhPKOmgSa~ebp7TGp0Q__";

const products = [
  {
    id: 1,
    name: "Classic 100 Rhinestone Hoodie",
    category: "Hoodies",
    price: "₱1,299",
    image: HOODIE_IMAGE,
    tag: "NEW DROP",
  },
  {
    id: 2,
    name: "Tundo Graphic Tee",
    category: "T-Shirts",
    price: "₱599",
    image: TSHIRT_IMAGE,
    tag: "BESTSELLER",
  },
  {
    id: 3,
    name: "Classic Side Logo Tee",
    category: "T-Shirts",
    price: "₱549",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    tag: null,
  },
  {
    id: 4,
    name: "Tondo Supply Cap",
    category: "Accessories",
    price: "₱399",
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=600&fit=crop",
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

        {/* Product Grid — Staggered Masonry */}
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
              className={`group relative bg-charcoal-light overflow-hidden border border-border hover:border-tondo-red transition-all duration-200 ${
                i === 0 ? "sm:row-span-2" : ""
              }`}
            >
              {/* Tag */}
              {product.tag && (
                <div className="absolute top-3 left-3 z-20 px-3 py-1 bg-tondo-red text-offwhite text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  {product.tag}
                </div>
              )}

              {/* Image */}
              <div className={`overflow-hidden ${i === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
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
