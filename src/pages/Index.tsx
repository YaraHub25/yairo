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

        {/* Report Wait Time Section */}
        <section className="py-16 bg-gradient-cyber">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-3">
                Help the <span className="gradient-text">Community</span>
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto">
                Just called support? Share your wait time to help others
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <ReportWaitTime 
                companyId="51b71c31-4c7c-4316-aec9-a752fccb70e2"
                companyName="Netflix Support"
              />
              
              <ReportWaitTime 
                companyId="aa59ffdb-a685-495a-8d2f-6e47550179ed"
                companyName="Hulu Support"
              />
              
              <ReportWaitTime 
                companyId="721bf906-8a41-4197-81d5-a47d7311ea87"
                companyName="Apple Support"
              />
              
              <ReportWaitTime 
                companyId="42b4eb54-59ee-4d93-a411-159fe243b9e4"
                companyName="Bank of America"
              />
              
              <ReportWaitTime 
                companyId="8d521070-a790-4c17-bff3-a629df807f5d"
                companyName="Wells Fargo"
              />
            </div>
          </div>
        </section>
        
        <BusinessSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;