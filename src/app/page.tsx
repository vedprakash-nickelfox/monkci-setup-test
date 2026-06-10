import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import TechSection from "@/components/TechSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#04071A]">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <TechSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
