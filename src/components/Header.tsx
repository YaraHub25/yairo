import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import yairoLogo from "@/assets/yairo-logo.png"; // Updated logo path

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          
          {/* HYBRID LOGO WITH GLOW */}
          <div className="relative">
            {/* Glow layer */}
            <div className="absolute inset-0 bg-gradient-neon rounded-lg blur-lg opacity-30 animate-glow-pulse"></div>

            {/* Logo container */}
            <div className="relative bg-cyber-surface rounded-lg px-4 py-2 border border-primary/30 flex items-center">
              <img
                src={yairoLogo}
                alt="yairo logo"
                className="h-8 w-auto drop-shadow-sm"
              />
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#for-businesses"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              For Businesses
            </a>
            <a
              href="#live-demo"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Live Demo
            </a>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center space-x-4">
            <Link to="/check">
              <Button variant="outline">Check Wait Time</Button>
            </Link>

            <Button variant="hero" className="animate-glow-pulse">
              Join Waitlist
            </Button>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;