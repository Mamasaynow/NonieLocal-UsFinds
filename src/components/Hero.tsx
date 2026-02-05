import { Button } from "@/components/ui/button";
import { Leaf, Wind, Home } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-leaf/5 rounded-full blur-3xl animate-pulse-gentle" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-sky/30 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf-light text-leaf font-medium text-sm mb-8 animate-fade-in">
            <Leaf className="w-4 h-4" aria-hidden="true" />
            <span>Your calm guide to healthier home interiors</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Furnish your home with{" "}
            <span className="text-primary">cleaner choices</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Find low-tox furniture, decor, and finishes that support healthier indoor air. 
            No overwhelm, no sales pressure—just clear, helpful guidance for people 
            with allergies, asthma, or chemical sensitivities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#categories">
                Explore Categories
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#how-it-works">
                Learn How It Works
              </a>
            </Button>
          </div>

          {/* Key benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-leaf-light">
                <Leaf className="w-5 h-5 text-leaf" aria-hidden="true" />
              </div>
              <span className="text-foreground font-medium">Low-Emission</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky">
                <Wind className="w-5 h-5 text-sky-foreground" aria-hidden="true" />
              </div>
              <span className="text-foreground font-medium">Zero-VOC Options</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-warm/20">
                <Home className="w-5 h-5 text-warm" aria-hidden="true" />
              </div>
              <span className="text-foreground font-medium">Home-Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
