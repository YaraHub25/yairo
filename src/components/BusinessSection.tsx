import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const BusinessSection = () => {
  return (
    <section id="for-businesses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center bg-card rounded-lg p-10 border border-border shadow-cyber">
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-bold">
              Reduce wait times by up to{" "}
              <span className="gradient-text">40%</span>
            </h2>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          </p>

          <Button variant="hero" size="lg" className="animate-glow-pulse">
            For business 
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;