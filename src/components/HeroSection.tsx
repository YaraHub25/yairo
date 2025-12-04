import { Button } from "@/components/ui/button";
import { Phone, Clock, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 cyber-grid">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Know the{" "}
              <span className="gradient-text">Wait</span>{" "}
              Before You Call
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Check real-time support wait times and plan your calls smarter. 
              Stop wasting time on hold and see when companies are actually available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Try Live Demo
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Join the Waitlist
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Real-time data</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm text-muted-foreground">Smart timing</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Analytics</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="yairo real-time wait times visualization" 
                className="w-full max-w-lg mx-auto rounded-lg shadow-cyber hover-scale"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;