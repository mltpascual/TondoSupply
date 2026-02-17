/*
 * DESIGN: Industrial Brutalism — Raw Concrete
 * Hero: Full-viewport dark image with bold Bebas Neue headline.
 * Diagonal crop on the bottom edge. Red accent elements.
 * Text slides in from left with slight rotation.
 */

import { motion } from "framer-motion";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/8TBuKGeukmtREMYSNEfQmq/sandbox/gqOKwpJpklEzM3siDG4QAC-img-1_1771306200000_na1fn_dG9uZG8taGVyby1iYW5uZXI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOFRCdUtHZXVrbXRSRU1ZU05FZlFtcS9zYW5kYm94L2dxT0t3cEpwa2xFek0zc2lERzRRQUMtaW1nLTFfMTc3MTMwNjIwMDAwMF9uYTFmbl9kRzl1Wkc4dGFHVnlieTFpWVc1dVpYSS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TlbdcvGqGQOGAeRmkqgGIVpHuTOzFqnHiy~fM-BQTGD3ajpNB5NiJlhnwJ5panWLsBeQiA4isatEEIhYWO-dfd6fF78YsGMWHiU2tTL9hTp6BFoZt1cs6FQKt6o3rrCrqWSa5TDNviMjFSqr9rya0iuZGJFCeZQ3SDDtsxanWlicXe44aWph3nzuUOArEdDK7EaaBNgfbuFOLK3uueJ2G-6Em5ml3EmvUN4BovrnjLAUCxAbkJmufdmQ9YG~lyKcvzccRENTwnbNuQmd7SSeEGA-POJH33Q2k2u7HIqyga9KgBdrqp0f84HnB0VXvsUaqOyEEQGmOUeR8C4NJ6nXrw__";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden noise-overlay">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Urban streetwear fashion in the streets of Tondo, Manila"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 container">
        {/* Red accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-tondo-red mb-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-tondo-red uppercase tracking-[0.3em] text-sm md:text-base mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
        >
          Hood to Hood Across the Globe
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, x: -50, rotate: -1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] text-offwhite mb-6"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          TONDO
          <br />
          <span className="text-tondo-red">SUPPLY</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-concrete text-base md:text-lg max-w-md mb-8 leading-relaxed"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          High-quality, sustainable streetwear from the heart of Tondo, Manila.
          Eco-friendly fashion that combines style and responsibility.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://shopee.ph/tondosupply"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 bg-tondo-red text-offwhite uppercase tracking-widest text-sm hover:bg-tondo-red-light transition-all duration-200 overflow-hidden"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            <span className="relative z-10">Shop Collection</span>
          </a>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border-2 border-offwhite/30 text-offwhite uppercase tracking-widest text-sm hover:border-tondo-red hover:text-tondo-red transition-all duration-200"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          >
            Our Story
          </button>
        </motion.div>
      </div>

      {/* Diagonal bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-charcoal"
        style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%)" }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span
          className="text-concrete/60 text-xs uppercase tracking-widest"
          style={{ fontFamily: "'Space Grotesk', sans-serif", writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8 bg-tondo-red/60"
        />
      </motion.div>
    </section>
  );
}
