/*
 * DESIGN: Industrial Brutalism — Raw Concrete
 * Tondo Supply Landing Page
 *
 * Aesthetic: Industrial brutalism meets Manila street culture.
 * Colors: Deep charcoal, raw concrete, Tondo Red accents.
 * Typography: Bebas Neue (display) + Space Grotesk (body).
 * Layout: Full-bleed asymmetric sections, diagonal crops, staggered masonry.
 * Signature: Concrete texture overlay, diagonal red slashes, circular stamp motifs.
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionSection from "@/components/CollectionSection";
import AboutSection from "@/components/AboutSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal text-offwhite overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <AboutSection />
      <SustainabilitySection />
      <ContactSection />
    </div>
  );
}
