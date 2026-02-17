/*
 * DESIGN: Industrial Brutalism — Raw Concrete
 * Contact + Footer: Bold manifesto-style footer.
 * Social links, store info, newsletter signup.
 * Red accent elements throughout.
 */

import { motion } from "framer-motion";
import { MapPin, Mail, Clock } from "lucide-react";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/tondosupply/" },
  { label: "Instagram", href: "https://www.instagram.com/tondosupply/" },
  { label: "TikTok", href: "https://www.tiktok.com/@tondosupply" },
  { label: "Shopee", href: "https://shopee.ph/tondosupply" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative">
      {/* CTA Banner */}
      <div className="relative py-20 md:py-28 overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-tondo-red" />
        {/* Diagonal top */}
        <div
          className="absolute top-0 left-0 right-0 h-16 bg-charcoal"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />

        <div className="container relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl text-offwhite mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            JOIN THE MOVEMENT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-offwhite/80 text-base md:text-lg max-w-lg mx-auto mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Follow us on social media for exclusive drops, behind-the-scenes content,
            and community events.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-offwhite/40 text-offwhite uppercase tracking-widest text-sm hover:bg-offwhite hover:text-tondo-red transition-all duration-200"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal border-t border-border py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
            {/* Brand Column */}
            <div>
              <h3 className="text-3xl md:text-4xl text-offwhite mb-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                TONDO SUPPLY
              </h3>
              <p className="text-concrete/70 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Hood to Hood Across the Globe. High-quality, sustainable streetwear
                from the heart of Tondo, Manila.
              </p>
              <div className="w-12 h-[2px] bg-tondo-red" />
            </div>

            {/* Store Info */}
            <div>
              <h4 className="text-xl text-offwhite mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
              >
                VISIT US
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-tondo-red mt-1 shrink-0" />
                  <p className="text-concrete/70 text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    2029 Cortez Tower Dagupan Ext.
                    <br />
                    Tondo, Manila, Philippines 1012
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-tondo-red mt-1 shrink-0" />
                  <a href="mailto:tondosupply1213@gmail.com"
                    className="text-concrete/70 text-sm hover:text-tondo-red transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    tondosupply1213@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-tondo-red mt-1 shrink-0" />
                  <p className="text-concrete/70 text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Tuesday — Sunday
                    <br />
                    1:00 PM — 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl text-offwhite mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
              >
                FOLLOW US
              </h4>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-concrete/70 text-sm hover:text-tondo-red hover:translate-x-2 transition-all duration-200"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    → {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-concrete/40 text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              &copy; {new Date().getFullYear()} Tondo Supply. All rights reserved.
            </p>
            <p className="text-concrete/40 text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              #TondoIsABrand
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
