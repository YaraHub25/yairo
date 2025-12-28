import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveDemoSection from "@/components/LiveDemoSection";
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
        <LiveDemoSection />
        <BusinessSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
