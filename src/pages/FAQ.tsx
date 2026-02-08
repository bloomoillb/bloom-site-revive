import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SafetyNotice from "@/components/SafetyNotice";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Bloom Oil products different from other beauty oils?",
    answer: "Bloom Oil products are crafted using 100% natural oils with no artificial additives or preservatives. Our oils are cold-pressed to preserve maximum nutrients and are never tested on animals. Each formula is carefully balanced to provide visible results while being gentle on all skin types.",
  },
  {
    question: "Are your oils 100% natural?",
    answer: "Yes! All Bloom Oil products are made with 100% natural oils sourced from the finest organic ingredients. We use no synthetic fragrances, parabens, or artificial preservatives. What you get is pure, nature-inspired beauty care.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery typically takes 3 to 6 business days depending on your location. Once your order is confirmed via WhatsApp, we'll keep you updated with shipping information. We offer cash on delivery for your convenience.",
  },
  {
    question: "How long before I see results?",
    answer: "Results vary depending on the product and individual use. For hair oil, many customers notice improved shine and softness within 2-3 weeks of consistent use. For eyebrow enhancement oil, visible results typically appear after 4-6 weeks of daily application. Body and nail oils often show immediate moisturizing benefits.",
  },
  {
    question: "Are Bloom Oil products suitable for sensitive skin?",
    answer: "Yes, our products are formulated to be gentle and suitable for most skin types, including sensitive skin. However, we always recommend performing a patch test 24 hours before first use. Apply a small amount to your inner wrist and wait to check for any reaction.",
  },
  {
    question: "How should I store my Bloom Oil products?",
    answer: "Store your oils in a cool, dry place away from direct sunlight. Avoid keeping them in bathrooms where humidity levels are high. Properly stored, our products maintain their quality for 12 months after opening. Always ensure the cap is tightly closed after use.",
  },
  {
    question: "Can I use multiple Bloom Oil products together?",
    answer: "Absolutely! Our products are designed to complement each other. Many customers use our hair oil and body oil together as part of their self-care routine. Just be sure to allow each product to absorb properly before applying another.",
  },
  {
    question: "How do I place an order?",
    answer: "Ordering is easy! Simply contact us via WhatsApp by clicking the 'Order Now' button on any product page. Send us a message with your desired products, and our team will guide you through the ordering process. We offer cash on delivery for your convenience.",
  },
  {
    question: "Do you offer refunds or exchanges?",
    answer: "Customer satisfaction is our priority. If you're not completely satisfied with your purchase, please contact us within 7 days of receiving your order. We'll work with you to find a solution, which may include exchange or refund for unused, unopened products.",
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Yes, Bloom Oil is proudly cruelty-free. We never test our products or ingredients on animals, and we don't work with suppliers who do. Our commitment to ethical beauty is at the heart of everything we do.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bloom-gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products, ordering, and delivery
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 bloom-shadow-card"
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Safety Notice */}
        <section className="py-12 md:py-16 bg-bloom-pink-soft">
          <div className="container mx-auto px-4 max-w-3xl">
            <SafetyNotice />
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              We're here to help! Reach out to us anytime.
            </p>
            <a
              href="https://wa.me/79403188"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors bloom-shadow-soft"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQ;
