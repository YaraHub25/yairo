import { BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 cyber-grid">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-10 animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Call at the{" "}
              <span className="gradient-text">Right</span>{" "}
              Time. Every Time.
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Know exactly when companies are available and call at the perfect time.
            </p>

            {/* SINGLE FEATURE HIGHLIGHT */}
            <div className="pt-6 max-w-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Call Patterns
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Understand peak hours and avoid long waits.
                  </p>
                </div>
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