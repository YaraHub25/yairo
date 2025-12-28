import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          
          <h2 className="text-4xl font-bold tracking-tight">
            Know the wait before you call
          </h2>

          <p className="text-lg text-muted-foreground">
            Stop guessing. Call when support is less busy.
          </p>

          <div className="pt-4">
            <Button
              variant="hero"
              size="lg"
              className="animate-glow-pulse"
            >
              Get early access
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
