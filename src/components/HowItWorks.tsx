import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose a Category",
    description: "Select from cleaning, laundry, personal care, and more. We've done the research so you don't have to.",
    color: "bg-leaf-light",
    iconColor: "text-leaf",
  },
  {
    icon: Filter,
    title: "See Curated Options",
    description: "View a short list of vetted products. Each one is scent-free, low-VOC, and selected with your health in mind.",
    color: "bg-sky",
    iconColor: "text-sky-foreground",
  },
  {
    icon: ThumbsUp,
    title: "Make a Confident Choice",
    description: "Read simple explanations of why each product made the list. No ads, no sponsored picks—just honest guidance.",
    color: "bg-warm/20",
    iconColor: "text-warm",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Simple & Stress-Free
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            How Airaleaf Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No account needed. No complicated filters. Just straightforward guidance 
            to help you find products that are safer for you and your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} variant="feature" className="relative overflow-hidden group">
              <CardContent className="p-8 text-center">
                {/* Step number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-heading font-bold text-sm text-muted-foreground">
                    {index + 1}
                  </span>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} aria-hidden="true" />
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
