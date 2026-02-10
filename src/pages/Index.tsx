import { Link } from "react-router-dom";
import { ChefHat, Bath, Bed, DoorOpen, Maximize2, Star, Leaf, ArrowRight, Monitor, TreePalm } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const rooms = [
  { id: "kitchen", name: "Kitchen", icon: ChefHat, path: "/shop-by-room?room=kitchen" },
  { id: "bathroom", name: "Bathroom", icon: Bath, path: "/shop-by-room?room=bathroom" },
  { id: "bedroom", name: "Bedroom", icon: Bed, path: "/shop-by-room?room=bedroom" },
  { id: "entryway", name: "Entryway", icon: DoorOpen, path: "/shop-by-room?room=entryway" },
  { id: "small-spaces", name: "Small Spaces", icon: Maximize2, path: "/shop-by-room?room=small-spaces" },
  { id: "office", name: "Office Space", icon: Monitor, path: "/shop-by-room?room=office" },
  { id: "patio", name: "Patio", icon: TreePalm, path: "/shop-by-room?room=patio" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-40">
        <div className="container flex items-center justify-center h-16 px-4">
          <a href="/" className="flex items-center gap-2" aria-label="Airaleaf Home">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary-light">
              <Leaf className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">
              Airaleaf
            </span>
          </a>
        </div>
      </header>

      <main className="container max-w-lg mx-auto px-4 pt-6">
        {/* Welcome section */}
        <section className="mb-8">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
            Welcome to Airaleaf
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Your calm guide to healthier home interiors. Fewer choices, better air.
          </p>
        </section>

        {/* Pick of the Week preview */}
        <section className="mb-8">
          <Link to="/pick-of-the-week" className="block">
            <Card variant="elevated" className="overflow-hidden hover:shadow-hover transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-warm/20 rounded-xl flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-warm" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-lg font-bold text-foreground mb-1">
                      Pick of the Week
                    </h2>
                    <p className="text-sm text-muted-foreground mb-2">
                      Solid Oak Dining Table by Medley Home
                    </p>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                      View details <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </section>

        {/* Calm Tip */}
        <section className="mb-8">
          <Card variant="flat" className="bg-sky/50">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-sky-foreground shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="font-heading text-base font-bold text-sky-foreground mb-1">
                    Calm Tip
                  </h2>
                  <p className="text-sm text-sky-foreground leading-relaxed">
                    New furniture can off-gas for weeks. Let items air out in a well-ventilated 
                    space before bringing them into your bedroom.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Shop by Room */}
        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-4">
            Browse by Room
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {rooms.map(({ id, name, icon: Icon, path }) => (
              <Link key={id} to={path}>
                <Card 
                  variant="category" 
                  className="h-full bg-card hover:bg-secondary/50"
                >
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center min-h-[100px]">
                    <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <span className="font-heading font-semibold text-foreground text-sm">
                      {name}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
