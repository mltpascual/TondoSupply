/*
 * DESIGN: Industrial Brutalism — Raw Concrete
 * Sustainability: Full-width texture background with overlaid content.
 * Bold manifesto-style messaging. Icon-free — text-driven.
 */

import { motion } from "framer-motion";

const TEXTURE_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/8TBuKGeukmtREMYSNEfQmq/sandbox/gqOKwpJpklEzM3siDG4QAC-img-5_1771306215000_na1fn_dG9uZG8tc3VzdGFpbmFibGUtdGV4dHVyZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOFRCdUtHZXVrbXRSRU1ZU05FZlFtcS9zYW5kYm94L2dxT0t3cEpwa2xFek0zc2lERzRRQUMtaW1nLTVfMTc3MTMwNjIxNTAwMF9uYTFmbl9kRzl1Wkc4dGMzVnpkR0ZwYm1GaWJHVXRkR1Y0ZEhWeVpRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=A3FE5MSdMF0421KzTfKqoU6wyyxQPhKJ2BWj3-2AvCxJg-jrDQW9JMlFlJ56MXl~2LOmUi9C6~ZrL1-Ah~T3lkHS8jHvpZilX8~bR3xRAi5-6dgoIcEcX7lpch8TWuasM4yt9WslNBi28QqCr5HFhTCAJsFUgONMGaFAIW~QPuzGeDce~F-aXf728R1i9sMTMh04ZfAGJhcnbmc9HQkcAAKK9Th2ZxbaXSY4KuI9rzz1kAmzQARXt1wMnm3NUDphru-OEyxorXY1A2bETyDnmCJ8ft~-eICCTVIUlJ4OKMNggI3z-RH6TfRzLIjHGkKcWqCP6T0GrpOojPMWP5Ir-Q__";

const pillars = [
  {
    number: "01",
    title: "RECYCLED MATERIALS",
    description: "Every garment starts with recycled cotton and sustainable fibers. We source responsibly, ensuring minimal environmental impact from raw material to finished product.",
  },
  {
    number: "02",
    title: "ETHICAL PRODUCTION",
    description: "Our pieces are crafted in Manila with fair wages and safe working conditions. Supporting local artisans and workers is at the core of everything we do.",
  },
  {
    number: "03",
    title: "ZERO WASTE DESIGN",
    description: "Our pattern-making process minimizes fabric waste. Leftover materials are repurposed into accessories and limited-edition pieces — nothing goes to the landfill.",
  },
];

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img
          src={TEXTURE_IMAGE}
          alt="Sustainable recycled fabric texture"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>

      {/* Diagonal top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-charcoal"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-tondo-red mb-6"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-tondo-red uppercase tracking-[0.3em] text-sm mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          >
            Sustainability
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl text-offwhite mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            FASHION WITH
            <br />
            <span className="text-tondo-red">RESPONSIBILITY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-concrete text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            We believe streetwear should look good and do good. Every Tondo Supply
            piece is a commitment to our community and our planet.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="relative p-8 md:p-10 border border-border hover:border-tondo-red/50 transition-colors group"
            >
              {/* Number */}
              <span className="text-6xl md:text-7xl text-charcoal-light/50 absolute top-4 right-4 select-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {pillar.number}
              </span>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl text-offwhite mb-4 group-hover:text-tondo-red transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-concrete/80 text-sm leading-relaxed"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {pillar.description}
                </p>
              </div>

              {/* Bottom red line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-tondo-red group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
