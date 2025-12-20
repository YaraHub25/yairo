import { Button } from "@/components/ui/button";
import yairoLogo from "@/assets/yairo-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">

          {/* LOGO */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-neon rounded-lg blur-lg opacity-30 animate-glow-pulse" />
            <div className="relative bg-cyber-surface rounded-lg px-4 py-2 border border-primary/30 flex items-center">
              <img
                src={yairoLogo}
                alt="yairo logo"
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* NAV */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary">
              How it Works
            </a>
            <a href="#for-businesses" className="text-foreground/80 hover:text-primary">
              For Businesses
            </a>
            <a href="#live-demo" className="text-foreground/80 hover:text-primary">
              Live Demo
            </a>
          </div>

          {/* SINGLE CTA */}
          <Button variant="hero" className="animate-glow-pulse">
            Join the Waitlist
          </Button>

        </nav>
      </div>
    </header>
  );
};

export default Header;