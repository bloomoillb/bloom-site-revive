import { Link } from "react-router-dom";
import { Leaf, MessageCircle, Mail, MapPin } from "lucide-react";
import Newsletter from "@/components/Newsletter";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <Newsletter />
      </div>
      
      <div className="container mx-auto px-4 pb-12">
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
                <a href="mailto:info@bloomoil.beauty" className="hover:text-primary transition-colors">
                  info@bloomoil.beauty
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Available for delivery nationwide</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="mt-4 pt-4 border-t border-background/10">
              <p className="text-sm font-medium mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/bloomoillb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@bloomoil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center space-y-2">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Bloom Oil. All rights reserved. Made with love for natural beauty.
          </p>
          <p className="text-primary font-semibold text-sm">
            Made in Lebanon 🇱🇧
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
