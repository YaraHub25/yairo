import { Phone, Clock, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 cyber-grid">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-10 animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Know the{" "}
              <span className="gradient-text">Wait</span>{" "}
              Before You Call
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Know exactly when companies are available and call at the perfect time.

            </p>

            {/* FEATURE HIGHLIGHTS (EXPANDED) */}
            <div className="grid sm:grid-cols-3 gap-8 pt-6 max-w-xl">
              
              <div className="space-y-2">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="font-semibold">Real-time Wait Times</h3>
                <p className="text-sm text-muted-foreground">
                  Instant updates from real customer data.
                </p>
              </div>

              <div className="space-y-2">
                <Clock className="w-6 h-6 text-secondary" />
                <h3 className="font-semibold">Smart Call Timing</h3>
                <p className="text-sm text-muted-foreground">
                  See the best time today to reach support fastest.
                </p>
              </div>

              <div className="space-y-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <h3 className="font-semibold">Trends & Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Understand peak hours and avoid long waits.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
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