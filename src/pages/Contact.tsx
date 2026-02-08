import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SafetyNotice from "@/components/SafetyNotice";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const whatsappMessage = encodeURIComponent(
      `Hello! My name is ${formData.name}.\n\nSubject: ${formData.subject}\n\nMessage: ${formData.message}\n\nEmail: ${formData.email}`
    );
    
    window.open(`https://wa.me/79403188?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message will be sent via WhatsApp.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bloom-gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with any questions, feedback, or just to say hello!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground">
                    Have a question or want to place an order? We're here to help you on your natural beauty journey.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-bloom-pink-soft flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp (Preferred)</h3>
                      <a
                        href="https://wa.me/79403188"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +79403188
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Fastest way to reach us for orders and inquiries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-bloom-pink-soft flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:info@bloomoil.beauty"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@bloomoil.beauty
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        For business inquiries and partnerships
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-bloom-pink-soft flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Delivery</h3>
                      <p className="text-muted-foreground">
                        Available nationwide with cash on delivery
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-bloom-pink-soft flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-muted-foreground">
                        We typically respond within 1-2 hours during business hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp Button */}
                <div className="bg-bloom-pink-soft rounded-2xl p-6">
                  <h3 className="font-serif font-semibold text-lg mb-3">
                    Need Quick Assistance?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For the fastest response, message us directly on WhatsApp. We're here to help with orders, product questions, and more.
                  </p>
                  <Button variant="hero" asChild>
                    <a href="https://wa.me/79403188" className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-6 md:p-8 bloom-shadow-card">
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5" />
                    Send Message via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your message will open in WhatsApp for direct communication
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Notice */}
        <section className="py-12 md:py-16 bg-bloom-pink-soft">
          <div className="container mx-auto px-4 max-w-3xl">
            <SafetyNotice />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
