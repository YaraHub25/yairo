import { Button } from "@/components/ui/button";
import yairoMark from "@/assets/yairo-mark.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16">
        <nav className="flex items-center justify-between h-full">

          {/* LOGOMARK ONLY */}
          <a href="/" className="flex items-center">
            <img
              src={yairoMark}
              alt="Yairo"
              className="h-6 w-auto opacity-85 hover:opacity-100 hover:scale-[1.03] transition-all"
            />
          </a>

          {/* NAV */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              How it Works
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

          {/* CTA */}
          <Button variant="hero">
            Join the Waitlist
          </Button>

        </nav>
      </div>
    </header>
  );
};

export default Header;