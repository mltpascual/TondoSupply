/*
 * DESIGN: Industrial Brutalism — Raw Concrete
 * Navbar: Minimal top bar with brand name in Bebas Neue.
 * Transparent on top, solid on scroll. Red accent underline.
 * Mobile: Hamburger that opens full-screen overlay.
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <a
            href="#"
            className="font-display text-2xl md:text-3xl tracking-wider text-offwhite hover:text-tondo-red transition-colors"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            TONDO SUPPLY
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="relative text-sm uppercase tracking-widest text-concrete hover:text-offwhite transition-colors group"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-tondo-red group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href="https://shopee.ph/tondosupply"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-tondo-red text-offwhite text-sm uppercase tracking-widest hover:bg-tondo-red-light transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-offwhite hover:text-tondo-red transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-md flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                onClick={() => scrollTo(link.href)}
                className="text-4xl uppercase tracking-wider text-offwhite hover:text-tondo-red transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="https://shopee.ph/tondosupply"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 bg-tondo-red text-offwhite text-lg uppercase tracking-widest hover:bg-tondo-red-light transition-colors"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Shop Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
