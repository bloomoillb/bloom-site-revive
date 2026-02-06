import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="bloom-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Discover Your Natural Beauty with{" "}
            <span className="bloom-text-gradient">Bloom Oil</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium cosmetic oils crafted from nature's finest ingredients for radiant skin and lustrous hair
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/79403188" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Order Now via WhatsApp
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/#products" className="flex items-center gap-2">
                View Products
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
