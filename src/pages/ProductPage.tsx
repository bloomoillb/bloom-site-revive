import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SafetyNotice from "@/components/SafetyNotice";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowLeft, Check, Droplets, Leaf, Clock, Sparkles } from "lucide-react";

const productsData = {
  hair: {
    name: "Premium Hair Oil",
    tagline: "Nourish and strengthen your hair naturally",
    description: "Our Premium Hair Oil is a luxurious blend of nature's finest oils, carefully formulated to transform your hair from the roots to the tips. Enriched with vitamins and essential fatty acids, this oil deeply nourishes each strand while promoting healthy hair growth.",
    image: "/hair-oil-product.png",
    price: 25,
    volume: "100 ml / 3.4 oz",
    benefits: [
      "Deep hydration and strengthens hair",
      "Promotes healthy hair growth and density",
      "Nourishes scalp and reduces flakiness",
      "Adds brilliant shine and softness",
      "Helps prevent breakage and split ends",
    ],
    ingredients: [
      { name: "Coconut Oil", benefit: "Deep hydration" },
      { name: "Castor Oil", benefit: "Hair growth & density" },
      { name: "Sweet Almond Oil", benefit: "Nourishment & softness" },
      { name: "Rosemary Extract", benefit: "Scalp health" },
      { name: "Vitamin E", benefit: "Antioxidant protection" },
    ],
    usage: "Apply a few drops to damp or dry hair. Massage gently from roots to tips. For deep conditioning, apply generously and leave overnight. Use 2-3 times per week for best results.",
  },
  body: {
    name: "Luxurious Body Oil",
    tagline: "Hydrate and rejuvenate your skin",
    description: "Indulge in our Luxurious Body Oil, a rich blend that melts into your skin, leaving it silky smooth and deeply moisturized. Perfect for daily use, this lightweight yet nourishing formula absorbs quickly without leaving a greasy residue.",
    image: "https://bloomoil.beauty/81c22afd-86bf-446e-a6cc-9ea82532674e.png",
    price: 30,
    volume: "100 ml / 3.4 oz",
    benefits: [
      "Deep hydration for all skin types",
      "Improves skin elasticity",
      "Reduces appearance of stretch marks",
      "Provides a healthy, natural glow",
      "Soothes and calms irritated skin",
    ],
    ingredients: ["Sweet Almond Oil", "Coconut Oil", "Avocado Oil", "Vitamin E", "Lavender Essential Oil"],
    usage: "Apply after showering while skin is still slightly damp. Massage in circular motions until fully absorbed. Use daily for best results.",
  },
  nails: {
    name: "Nail Care Oil",
    tagline: "Strengthen and nourish your nails",
    description: "Give your nails the care they deserve with our specialized Nail Care Oil. This concentrated formula penetrates deep into the nail bed and cuticles, providing essential nutrients for stronger, healthier nails.",
    image: "https://i.postimg.cc/TKjQ9xwq/nails-oil.jpg",
    price: 7,
    volume: "15 ml / 0.5 oz",
    benefits: [
      "Strengthens weak, brittle nails",
      "Softens and conditions cuticles",
      "Promotes faster nail growth",
      "Prevents splitting and peeling",
      "Adds natural shine to nails",
    ],
    ingredients: ["Jojoba Oil", "Vitamin E", "Tea Tree Oil", "Lemon Essential Oil", "Sweet Almond Oil"],
    usage: "Apply a small drop to each nail and cuticle. Massage gently for 1-2 minutes. Use twice daily for best results, especially before bedtime.",
  },
  eyebrows: {
    name: "Eyebrows Enhancement Oil",
    tagline: "Achieve fuller, more defined eyebrows",
    description: "Transform your eyebrows with our specially formulated Enhancement Oil. Designed to stimulate hair growth and nourish existing brows, this oil helps you achieve naturally fuller, thicker eyebrows over time.",
    image: "https://bloomoil.beauty/d8c09846-fa25-40cf-988a-c3078d77f9bd.png",
    price: 12,
    volume: "15 ml / 0.5 oz",
    benefits: [
      "Promotes eyebrow hair growth",
      "Thickens and darkens brows naturally",
      "Conditions and softens brow hairs",
      "Fills in sparse areas over time",
      "Gentle formula for sensitive skin",
    ],
    ingredients: ["Castor Oil", "Vitamin E", "Rosemary Oil", "Coconut Oil", "Biotin"],
    usage: "Using the applicator or a clean spoolie, apply a thin layer to eyebrows before bedtime. Leave overnight and wash off in the morning. Use consistently for 4-6 weeks to see results.",
  },
};

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productsData[productId as keyof typeof productsData] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold mb-4">Product Not Found</h1>
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-bloom-pink-light py-4">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </div>

        {/* Product Hero */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden bg-bloom-cream bloom-shadow-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-primary font-medium mb-2">Bloom Oil Collection</p>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">{product.name}</h1>
                  <p className="text-xl text-muted-foreground">{product.tagline}</p>
                </div>

                <p className="text-foreground leading-relaxed">{product.description}</p>

                <div className="flex items-center gap-6 py-4">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">100% Natural</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Cruelty Free</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-serif font-bold text-primary">${product.price}</p>
                    <span className="text-sm text-muted-foreground">{product.volume}</span>
                  </div>
                  <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                    <a href={`https://wa.me/79403188?text=Hello! I'm interested in the ${product.name}.`} className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Order via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Details */}
        <section className="py-12 md:py-16 bg-bloom-pink-soft">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefits */}
              <div className="bg-card rounded-2xl p-6 bloom-shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-bloom-pink-soft flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg">Key Benefits</h3>
                </div>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredients */}
              <div className="bg-card rounded-2xl p-6 bloom-shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-bloom-pink-soft flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg">Premium Natural Ingredients</h3>
                </div>
                <ul className="space-y-2">
                  {Array.isArray(product.ingredients) && product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {typeof ingredient === 'object' && 'name' in ingredient ? (
                        <span className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{ingredient.name}</span> - {ingredient.benefit}
                        </span>
                      ) : (
                        <span className="text-sm text-muted-foreground">{ingredient}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to Use */}
              <div className="bg-card rounded-2xl p-6 bloom-shadow-card md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-bloom-pink-soft flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg">How to Use</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.usage}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Notice */}
        <section className="py-12 md:py-16 bg-background">
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

export default ProductPage;
