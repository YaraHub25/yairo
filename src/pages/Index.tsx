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
          companyId="51b71c31-4c7c-4316-aec9-a752fccb70e2"
          companyName="Netflix Support"
        />
        
        <BusinessSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
