/*
 * DESIGN: Industrial Brutalism — Raw Concrete
 * About: Asymmetric layout with lifestyle image on one side.
 * Bold stats, red accent elements. Community-focused messaging.
 */

import { motion } from "framer-motion";

const LIFESTYLE_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/8TBuKGeukmtREMYSNEfQmq/sandbox/gqOKwpJpklEzM3siDG4QAC-img-4_1771306214000_na1fn_dG9uZG8tbGlmZXN0eWxlLWdyb3Vw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOFRCdUtHZXVrbXRSRU1ZU05FZlFtcS9zYW5kYm94L2dxT0t3cEpwa2xFek0zc2lERzRRQUMtaW1nLTRfMTc3MTMwNjIxNDAwMF9uYTFmbl9kRzl1Wkc4dGJHbG1aWE4wZVd4bExXZHliM1Z3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ITPgxIiyFhkuh0G1U~B6LNV0bOGrt8DkTMr5Bh5gIDNCXPQSZFoyQtb-d46MvxbaRLjHlqYtsuMNyDJYOhc8kMlpJ2uJMKyx4HviwAJ6nVwY9oVkYn14cNxaVq4BkpkxivVIWRaQKV4udeBL342gUHRYL~4sdAhTxmKnS4lioUiSOfU~Zp9ZyocqEmYVHl6MRzZ8VMS~6NI5uNTgnj35sgHUmsVMOdP2I8AMoNuf-L0pw-DH4pldvPFB2wjizhiy6DxfYuXKusZbFbNqc4F6E~cCmoPABGEHKU~Y3mWsAdZtA9iCqRxL76EXziLNZ1rQ-bajcIZdpL~J931i9T6fdg__";

const stats = [
  { value: "50K+", label: "Community" },
  { value: "100%", label: "Recycled Cotton" },
  { value: "2029", label: "Est. Tondo" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Red diagonal accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-tondo-red/20" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={LIFESTYLE_IMAGE}
                alt="Tondo Supply community wearing streetwear on a Manila rooftop"
                className="w-full h-[400px] md:h-[550px] object-cover"
                loading="lazy"
              />
              {/* Red frame accent */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-tondo-red" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-tondo-red" />
            </div>

            {/* Floating stamp */}
            <motion.div
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, rotate: -12 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:right-8 w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-tondo-red flex items-center justify-center bg-charcoal/90"
            >
              <span className="text-tondo-red text-center leading-tight text-xs md:text-sm uppercase tracking-wider"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em" }}
              >
                Tondo<br />Is A<br />Brand
              </span>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-tondo-red uppercase tracking-[0.3em] text-sm mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
            >
              Our Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl text-offwhite mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              BORN IN THE
              <br />
              <span className="text-tondo-red">STREETS OF TONDO</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 mb-10"
            >
              <p className="text-concrete leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Tondo Supply was born from the raw energy of Manila's most iconic neighborhood.
                We create streetwear that carries the spirit of the community — bold, authentic,
                and unapologetic.
              </p>
              <p className="text-concrete leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Every piece is crafted with sustainable materials and ethical practices,
                because representing the hood means taking care of it. From recycled cotton
                tees to our signature Classic 100 collection, we prove that street culture
                and environmental responsibility go hand in hand.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl text-tondo-red mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-concrete/60 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
