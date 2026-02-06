import { Leaf, Heart, Award, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure organic ingredients",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    description: "Never tested on animals",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully crafted formulas",
  },
  {
    icon: Sparkles,
    title: "Visible Results",
    description: "See the difference in weeks",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center space-y-3 p-6"
            >
              <div className="w-16 h-16 rounded-full bg-bloom-pink-soft flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
