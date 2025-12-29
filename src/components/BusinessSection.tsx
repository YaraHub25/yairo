import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import EarlyAccessModal from "@/components/EarlyAccessModal";

const BusinessSection = () => {
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);

  return (
    <>
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
              Help your customers call when your team is least busy and spend
              less time handling frustrated callers.
            </p>

            <Button
              variant="hero"
              size="lg"
              className="animate-glow-pulse"
              onClick={() => setEarlyAccessOpen(true)}
            >
              For business
            </Button>
          </div>
        </div>
      </section>

      {/* BUSINESS EARLY ACCESS MODAL */}
      <EarlyAccessModal
        open={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
      />
    </>
  );
};

export default BusinessSection;
