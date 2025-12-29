import { useState } from "react";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { Menu, X } from "lucide-react";
import yairoMark from "@/assets/yairo-mark.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16">
          <nav className="flex items-center justify-between h-full">

            {/* LOGO */}
            <a href="/" className="flex items-center">
              <img
                src={yairoMark}
                alt="Yairo"
                className="h-6 w-auto opacity-85 hover:opacity-100 hover:scale-[1.03] transition-all"
              />
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a
                href="#how-it-works"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                
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

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">
              <Button
                variant="hero"
                onClick={() => {
                  setEarlyAccessOpen(true);
                  setMenuOpen(false);
                }}
              >
                Get early access
              </Button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-6 py-4 space-y-3 text-sm">
              <a
                href="#how-it-works"
                onClick={() => setMenuOpen(false)}
                className="block text-foreground/80 hover:text-primary"
              >
                How it Works
              </a>
              <a
                href="#for-businesses"
                onClick={() => setMenuOpen(false)}
                className="block text-foreground/80 hover:text-primary"
              >
                For Businesses
              </a>
              <a
                href="#live-demo"
                onClick={() => setMenuOpen(false)}
                className="block text-foreground/80 hover:text-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        )}
      </header>

      {/* EARLY ACCESS MODAL */}
      <EarlyAccessModal
        open={earlyAccessOpen}
        onClose={() => setEarlyAccessOpen(false)}
      />
    </>
  );
};

export default Header;