import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-bloom-pink-soft">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Beauty care, without the complexity.
          </h2>
          <p className="text-lg text-muted-foreground">
            Balanced natural oil blends for everyday care
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/79403188" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Contact Us on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
