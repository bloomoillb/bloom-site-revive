import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Hair Oil", path: "/product/hair" },
  { name: "Body Oil", path: "/product/body" },
  { name: "Nails Oil", path: "/product/nails" },
  { name: "Eyebrows Oil", path: "/product/eyebrows" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-bloom-pink-soft flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-foreground">Bloom Oil</span>
              <span className="text-xs text-primary font-medium">Natural Beauty Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-bloom-pink-soft"
                    : "text-foreground hover:text-primary hover:bg-bloom-pink-soft/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero-outline" size="sm" asChild>
              <a href="https://wa.me/79403188">Cash on Delivery</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-bloom-pink-soft"
                      : "text-foreground hover:text-primary hover:bg-bloom-pink-soft/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <a href="https://wa.me/79403188">Cash on Delivery</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
