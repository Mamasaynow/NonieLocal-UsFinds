import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sofa, Palette, Frame, Blinds, Layers, Archive, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Sofa,
    title: "Furniture",
    description: "Sofas, chairs, tables, and beds made with low-emission materials and certified safe finishes.",
    count: "14 products",
    color: "bg-leaf-light",
    iconColor: "text-leaf",
  },
  {
    icon: Frame,
    title: "Home Goods & Decor",
    description: "Decorative accents, frames, and accessories crafted from non-toxic materials for healthier spaces.",
    count: "11 products",
    color: "bg-sky",
    iconColor: "text-sky-foreground",
  },
  {
    icon: Palette,
    title: "Paints & Finishes",
    description: "Zero-VOC and low-tox paints, stains, and sealants that protect your walls and your air quality.",
    count: "9 products",
    color: "bg-warm/20",
    iconColor: "text-warm",
  },
  {
    icon: Blinds,
    title: "Blinds & Window Treatments",
    description: "Window shades, blinds, and curtains free from formaldehyde and harmful off-gassing chemicals.",
    count: "8 products",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Layers,
    title: "Rugs & Soft Furnishings",
    description: "Carpets, rugs, throws, and cushions made with natural fibers and certified low-emission materials.",
    count: "12 products",
    color: "bg-muted",
    iconColor: "text-muted-foreground",
  },
  {
    icon: Archive,
    title: "Storage & Organization",
    description: "Shelving, baskets, and storage solutions built from safe, non-toxic materials for any room.",
    count: "7 products",
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
            Curated for Your Home
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Home Interior Categories
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We focus on fewer, better options. Each category contains only home furnishings 
            and materials that meet our strict low-tox, scent-free criteria.
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
