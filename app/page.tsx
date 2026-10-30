import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Divisions from "@/components/home/Divisions";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import QualitySection from "@/components/home/QualitySection";
import Collaborations from "@/components/home/Collaborations";
import VisionMission from "@/components/home/VisionMission";
import Values from "@/components/home/Values";
import CareersCTA from "@/components/home/CareersCTA";
import ContactCTA from "@/components/home/ContactCTA";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFAF7] overflow-hidden">
      {/* 1. Cinematic Video Hero with Parallax & Glassmorphism */}
      <Hero />

      {/* 2. Editorial About Medomas */}
      <AboutPreview />

      {/* 3. Specialized Divisions (MEDDENT & AYUMED) */}
      <Divisions />

      {/* 4. Curated & Searchable Featured Products */}
      <FeaturedProducts />

      {/* 5. Quality Philosophy & Compliance */}
      <QualitySection />

      {/* 6. Manufacturing Partnerships & India Network Map */}
      <Collaborations />

      {/* 7. Company Vision & Mission */}
      <VisionMission />

      {/* 8. Seven Core Values */}
      <Values />

      {/* 9. Careers Opportunity CTA */}
      <CareersCTA />

      {/* 10. Contact & Head Office Enquiry CTA */}
      <ContactCTA />

      {/* Floating Scroll To Top Indicator */}
      <ScrollToTop />
    </main>
  );
}
