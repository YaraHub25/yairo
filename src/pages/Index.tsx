import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import LogoMarquee from "@/components/LogoMarquee";
import InsightsSection from "@/components/InsightsSection";
import BusinessSection from "@/components/BusinessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <InsightsSection />

        <LogoMarquee />
        
        <LiveDemoSection />
        <BusinessSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
