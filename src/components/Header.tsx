import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text">Waitly</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#for-businesses" className="text-foreground/80 hover:text-primary transition-colors">
              For Businesses
            </a>
            <a href="#live-demo" className="text-foreground/80 hover:text-primary transition-colors">
              Live Demo
            </a>
          </div>
          
          <Button variant="hero" className="animate-glow-pulse">
            Join Waitlist
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;