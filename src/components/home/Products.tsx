import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "hair",
    name: "Premium Hair Oil",
    description: "Nourish and strengthen your hair with our blend of natural oils",
    image: "/hair-oil-product.png",
    price: 25,
    volume: "100 ml / 3.4 oz",
  },
  {
    id: "body",
    name: "Luxurious Body Oil",
    description: "Hydrate and rejuvenate your skin with our premium body oil blend",
    image: "https://bloomoil.beauty/81c22afd-86bf-446e-a6cc-9ea82532674e.png",
    price: 30,
    volume: "100 ml / 3.4 oz",
  },
  {
    id: "nails",
    name: "Nail Care Oil",
    description: "Strengthen and nourish your nails with our specialized formula",
    image: "https://i.postimg.cc/ZKk5ZJf7/1770276529331-019c2cb3-712c-772e-b454-7564990e900a.png",
    price: 7,
    volume: "15 ml / 0.5 oz",
  },
  {
    id: "eyebrows",
    name: "Eyebrows Enhancement Oil",
    description: "Achieve fuller, more defined eyebrows with our nourishing oil",
    image: "https://bloomoil.beauty/d8c09846-fa25-40cf-988a-c3078d77f9bd.png",
    price: 12,
    volume: "15 ml / 0.5 oz",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bloom-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Premium Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our carefully curated range of natural beauty oils
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-card rounded-2xl overflow-hidden bloom-shadow-card hover:bloom-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[3/4] overflow-hidden bg-bloom-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-serif font-semibold text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                    <span className="text-xs text-muted-foreground">{product.volume}</span>
                  </div>
                  <span className="text-primary flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
