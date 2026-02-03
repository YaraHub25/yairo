import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import LogoMarquee from "@/components/LogoMarquee";
import InsightsSection from "@/components/InsightsSection";
import BusinessSection from "@/components/BusinessSection";
import Footer from "@/components/Footer";
import ReportWaitTime from "@/components/ReportWaitTime";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <InsightsSection />

        <LogoMarquee />
        
        <LiveDemoSection />

        <ReportWaitTime 
          companyId="test-uuid-123"
          companyName="Netflix Support"
        />
        
        <BusinessSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
