import { Link } from "react-router-dom";
import { Leaf, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold">Bloom Oil</span>
                <span className="text-xs text-primary">Natural Beauty Solutions</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Premium cosmetic oils crafted from nature's finest ingredients for radiant skin and lustrous hair.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/product/hair" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Hair Oil
                </Link>
              </li>
              <li>
                <Link to="/product/body" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Body Oil
                </Link>
              </li>
              <li>
                <Link to="/product/nails" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Nails Oil
                </Link>
              </li>
              <li>
                <Link to="/product/eyebrows" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Eyebrows Oil
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/70 hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="https://wa.me/79403188" className="hover:text-primary transition-colors">
                  WhatsApp: +79403188
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@bloomoil.beauty" className="hover:text-primary transition-colors">
                  hello@bloomoil.beauty
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Available for delivery nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Bloom Oil. All rights reserved. Made with love for natural beauty.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
