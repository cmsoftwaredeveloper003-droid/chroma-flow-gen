import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import VillasSection from "@/components/VillasSection";
import ServicesSection from "@/components/ServicesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import MomentsSection from "@/components/MomentsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GlimpseSection from "@/components/GlimpseSection";
import JournalSection from "@/components/JournalSection";
import ReserveSection from "@/components/ReserveSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <VillasSection />
      <ServicesSection />
      <AmenitiesSection />
      <MomentsSection />
      <GlimpseSection />
      <JournalSection />
      <TestimonialsSection />
      <ReserveSection />
      <Footer />
    </div>
  );
};

export default Index;
