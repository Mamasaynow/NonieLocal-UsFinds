import { Heart, ExternalLink, Leaf, Award, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const PickOfTheWeek = () => {
  const featuredItem = {
    name: "Solid Oak Dining Table",
    brand: "Medley Home",
    image: "/placeholder.svg",
    whyBetter: "Made from FSC-certified solid oak with zero-VOC finishes. No particle board, no formaldehyde-based glues. A breathable choice for your dining space.",
    materials: ["FSC-Certified Solid Oak", "Zero-VOC Natural Oil Finish", "No Particle Board or MDF"],
    certifications: ["FSC Certified", "GREENGUARD Gold"],
    hasCommissionLink: true, // Set to true when the Learn More link earns a commission
  };

  return (
    <div className="min-h-screen bg-background pb-24 pt-6">
      <div className="container max-w-lg mx-auto px-4">
        <header className="mb-8">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
            Pick of the Week
          </h1>
          <p className="text-muted-foreground">
            One thoughtfully chosen item, reviewed for cleaner indoor air.
          </p>
        </header>

        <Card variant="elevated" className="overflow-hidden">
          <div className="aspect-[4/3] bg-muted flex items-center justify-center">
            <img 
              src={featuredItem.image} 
              alt={featuredItem.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <CardContent className="p-6 space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{featuredItem.brand}</p>
              <h2 className="font-heading text-xl font-bold text-foreground">
                {featuredItem.name}
              </h2>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                <Leaf className="w-5 h-5 text-leaf" aria-hidden="true" />
                Why It's Better
              </h3>
              <p className="text-foreground leading-relaxed">
                {featuredItem.whyBetter}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Materials
              </h3>
              <ul className="space-y-2">
                {featuredItem.materials.map((material, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-leaf mt-2.5 shrink-0" />
                    {material}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" aria-hidden="true" />
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {featuredItem.certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {featuredItem.hasCommissionLink && (
              <Alert className="bg-muted/50 border-border">
                <Info className="h-4 w-4 text-muted-foreground" />
                <AlertDescription className="text-sm text-muted-foreground">
                  Airaleaf may receive a commission at no extra cost to you.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1 gap-2">
                <Heart className="w-4 h-4" aria-hidden="true" />
                Save
              </Button>
              <Button className="flex-1 gap-2">
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PickOfTheWeek;
