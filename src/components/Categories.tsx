import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Shirt, Bath, Utensils, Home, Baby, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    title: "Cleaning Products",
    description: "All-purpose cleaners, surface sprays, and more—all fragrance-free and safe for sensitive households.",
    count: "12 products",
    color: "bg-leaf-light",
    iconColor: "text-leaf",
  },
  {
    icon: Shirt,
    title: "Laundry Care",
    description: "Detergents, fabric softeners, and stain removers without harsh fragrances or irritating chemicals.",
    count: "8 products",
    color: "bg-sky",
    iconColor: "text-sky-foreground",
  },
  {
    icon: Bath,
    title: "Personal Care",
    description: "Soaps, lotions, and hygiene products that are gentle on skin and free from synthetic scents.",
    count: "15 products",
    color: "bg-warm/20",
    iconColor: "text-warm",
  },
  {
    icon: Utensils,
    title: "Dish Care",
    description: "Dish soaps and dishwasher detergents that clean effectively without leaving behind fragrance residue.",
    count: "6 products",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Home,
    title: "Air Quality",
    description: "Air purifiers, filters, and natural solutions to help maintain clean, breathable indoor air.",
    count: "10 products",
    color: "bg-muted",
    iconColor: "text-muted-foreground",
  },
  {
    icon: Baby,
    title: "Baby & Kids",
    description: "Extra-gentle products for little ones, carefully selected for safety and minimal chemical exposure.",
    count: "9 products",
    color: "bg-leaf-light",
    iconColor: "text-leaf",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-leaf-light text-leaf font-semibold text-sm mb-4">
            Curated for You
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Product Categories
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We focus on fewer, better options. Each category contains only products 
            that meet our strict scent-free, low-tox criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              variant="category" 
              className="group"
              role="article"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl ${category.color} group-hover:scale-110 transition-transform`}>
                    <category.icon className={`w-7 h-7 ${category.iconColor}`} aria-hidden="true" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {category.count}
                  </span>
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription className="text-base">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button 
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                  aria-label={`Browse ${category.title}`}
                >
                  Browse products
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
