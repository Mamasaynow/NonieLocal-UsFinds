import { Award, Check, X, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certifications = [
  {
    id: "fsc",
    name: "FSC (Forest Stewardship Council)",
    description: "Certifies that wood and paper products come from responsibly managed forests that provide environmental, social, and economic benefits.",
    lookFor: "FSC-certified furniture and wood products",
  },
  {
    id: "gots",
    name: "GOTS (Global Organic Textile Standard)",
    description: "The worldwide leading textile processing standard for organic fibers. Ensures organic status of textiles from harvesting through manufacturing.",
    lookFor: "GOTS-certified bedding, curtains, and upholstery fabrics",
  },
  {
    id: "greenguard",
    name: "GREENGUARD / GREENGUARD Gold",
    description: "Certifies that products meet strict chemical emissions limits, helping reduce indoor air pollution. Gold is even stricter, safe for schools and healthcare.",
    lookFor: "Furniture, mattresses, paints, and finishes with this certification",
  },
  {
    id: "oeko-tex",
    name: "OEKO-TEX Standard 100",
    description: "Tests textiles for harmful substances. Every component of the product must meet strict criteria, from threads to buttons.",
    lookFor: "Rugs, bedding, curtains, and textile products",
  },
  {
    id: "gols",
    name: "GOLS (Global Organic Latex Standard)",
    description: "Certifies organic latex used in mattresses and pillows. Ensures the latex is organically produced and processed.",
    lookFor: "Organic latex mattresses, mattress toppers, and pillows",
  },
];

const whatToLookFor = [
  "Zero-VOC or low-VOC paints and finishes",
  "Solid wood instead of particle board or MDF",
  "Natural fibers like organic cotton, linen, hemp, or wool",
  "Water-based adhesives and finishes",
  "Formaldehyde-free products",
  "Natural latex instead of synthetic foam",
];

const whatToAvoid = [
  "Flame retardants (especially in furniture and textiles)",
  "Synthetic fragrances in any home product",
  "PVC and vinyl materials",
  "Formaldehyde-based glues and resins",
  "Particle board and MDF without proper sealing",
  "Petroleum-based synthetic foams",
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-background pb-24 pt-6">
      <div className="container max-w-lg mx-auto px-4">
        <header className="mb-8">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
            Green Certified Guide
          </h1>
          <p className="text-muted-foreground">
            Understanding certifications that matter for healthier home interiors.
          </p>
        </header>

        {/* Certifications */}
        <section className="mb-10">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" aria-hidden="true" />
            Key Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <Card key={cert.id} variant="default">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="bg-leaf-light rounded-xl p-3">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Look for: </span>
                      {cert.lookFor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What to Look For */}
        <section className="mb-10">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Check className="w-5 h-5 text-leaf" aria-hidden="true" />
            What to Look For
          </h2>
          <Card variant="default" className="bg-leaf-light/50">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {whatToLookFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <Leaf className="w-4 h-4 text-leaf mt-1 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* What to Avoid */}
        <section>
          <h2 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <X className="w-5 h-5 text-destructive" aria-hidden="true" />
            What to Avoid
          </h2>
          <Card variant="default" className="bg-warm/10">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {whatToAvoid.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <X className="w-4 h-4 text-destructive mt-1 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Certifications;
