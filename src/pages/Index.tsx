import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Products from "@/components/home/Products";
import CTA from "@/components/home/CTA";
import SafetyNotice from "@/components/SafetyNotice";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Products />
        
        {/* Safety Notice Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <SafetyNotice />
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
