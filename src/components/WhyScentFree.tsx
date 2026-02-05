import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Brain, Wind, Sofa } from "lucide-react";

const concerns = [
  {
    icon: Wind,
    title: "Respiratory Health",
    description: "Off-gassing from furniture and finishes can trigger asthma attacks and aggravate chronic respiratory conditions.",
  },
  {
    icon: Brain,
    title: "Migraines & Headaches",
    description: "VOCs from new furniture, paints, and textiles are common migraine triggers. Low-emission choices can reduce episodes.",
  },
  {
    icon: AlertCircle,
    title: "Chemical Sensitivities",
    description: "Many people experience reactions to formaldehyde, flame retardants, and other chemicals in home furnishings.",
  },
  {
    icon: Sofa,
    title: "Long-Term Exposure",
    description: "Furniture and finishes release chemicals for years. Choosing certified low-tox materials protects you over time.",
  },
];

const WhyScentFree = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-leaf-light/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Understanding the Impact
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Materials Matter
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most furniture, paints, and home textiles contain chemicals that 
                release volatile organic compounds (VOCs) into your indoor air. 
                This "off-gassing" can continue for months or even years.
              </p>
              <p>
                For people with sensitivities, allergies, or respiratory conditions, 
                these everyday home items can cause real health problems. The good 
                news? Safer alternatives exist—and we're here to help you find them.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-card shadow-soft border border-border">
              <p className="text-foreground font-medium mb-2">
                "Did you know?"
              </p>
              <p className="text-muted-foreground">
                Indoor air can be 2-5 times more polluted than outdoor air, largely due to 
                off-gassing from furniture, paints, and flooring. Choosing certified low-emission 
                products is one of the most effective ways to improve your indoor air quality.
              </p>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {concerns.map((concern, index) => (
              <Card key={index} variant="elevated" className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <concern.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {concern.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {concern.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyScentFree;
