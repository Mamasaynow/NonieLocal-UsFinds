import { useState } from "react";
import { MapPin, Store, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const regions = [
  { id: "washtenaw", name: "Washtenaw County, MI" },
  { id: "canton", name: "Canton, MI" },
  { id: "novi", name: "Novi, MI" },
];

const shops = [
  {
    id: 1,
    name: "Habitat for Humanity ReStore",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Furniture", "Home Goods", "Reuse/Secondhand"],
    tips: "Ask about solid wood furniture. Check for VOC-free paint options.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 2,
    name: "Found Gallery",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Furniture", "Home Goods"],
    tips: "Curated selection of vintage and antique pieces. Older furniture often has lower off-gassing.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 3,
    name: "All About Furniture",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Furniture"],
    tips: "Ask about solid wood options and water-based finishes. Inquire about made-to-order pieces.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 4,
    name: "Earthscape",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Furniture", "Home Goods"],
    tips: "Focus on sustainable and natural materials. Ask about sourcing and certifications.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 5,
    name: "HomeGoods",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Home Goods", "Furniture"],
    tips: "Look for solid wood pieces and natural fiber textiles. Check labels for materials.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 6,
    name: "Three Chairs Co.",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Furniture"],
    tips: "Quality furniture retailer. Ask about FSC-certified wood and low-VOC finishes.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 7,
    name: "Sofa Savers",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Furniture", "Reuse/Secondhand"],
    tips: "Refurbished and secondhand sofas. Older pieces often have lower off-gassing than new.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 8,
    name: "Esquire Interiors",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Furniture", "Home Goods"],
    tips: "Ask about custom furniture options with natural materials. Inquire about finish types.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 9,
    name: "Moon Valley Rustics",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Furniture"],
    tips: "Rustic and reclaimed wood furniture. Natural materials with minimal processing.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 10,
    name: "Sherwin-Williams",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Paints"],
    tips: "Ask for zero-VOC paint lines like Harmony or SuperPaint with no-VOC colorants.",
    certificationStatus: "GREENGUARD available",
  },
  {
    id: 14,
    name: "World Market",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Furniture", "Home Goods"],
    tips: "Look for solid wood furniture and natural fiber textiles. Check labels for materials and country of origin.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 15,
    name: "Bejoyful Shop",
    city: "Ann Arbor",
    region: "washtenaw",
    categories: ["Home Goods"],
    tips: "Curated selection of sustainable home goods. Ask about materials and sourcing.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 11,
    name: "Crate & Barrel",
    city: "Canton",
    region: "canton",
    categories: ["Furniture", "Home Goods"],
    tips: "Ask about GREENGUARD certified items. Check materials labels for solid wood options.",
    certificationStatus: "Some certified items",
  },
  {
    id: 12,
    name: "Budget Blinds",
    city: "Canton",
    region: "canton",
    categories: ["Blinds"],
    tips: "Ask about GREENGUARD certified window treatments. Natural materials like bamboo are often better.",
    certificationStatus: "Ask in-store",
  },
  {
    id: 13,
    name: "West Elm",
    city: "Novi",
    region: "novi",
    categories: ["Furniture", "Home Goods"],
    tips: "Look for FSC-certified wood furniture. Ask about water-based finishes.",
    certificationStatus: "Some certified items",
  },
];

const LocalShops = () => {
  const [selectedRegion, setSelectedRegion] = useState("washtenaw");

  const filteredShops = shops.filter((shop) => shop.region === selectedRegion);

  return (
    <div className="min-h-screen bg-background pb-24 pt-6">
      <div className="container max-w-lg mx-auto px-4">
        <header className="mb-6">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
            Local Eco Shops
          </h1>
          <p className="text-muted-foreground">
            Find healthier home products near you.
          </p>
        </header>

        {/* Region selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">
            Select your area
          </label>
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region.id} value={region.id}>
                  {region.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Info banner */}
        <div className="bg-sky rounded-xl p-4 mb-6 flex gap-3">
          <Info className="w-5 h-5 text-sky-foreground shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-sky-foreground">
            Certification status may change. Always ask in-store about current certifications and materials.
          </p>
        </div>

        {/* Shops list */}
        <div className="space-y-4">
          {filteredShops.map((shop) => (
            <Card key={shop.id} variant="default">
              <CardContent className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-leaf-light rounded-xl flex items-center justify-center shrink-0">
                    <Store className="w-5 h-5 text-leaf" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-foreground">
                      {shop.name}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      {shop.city}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {shop.categories.map((category) => (
                    <Badge key={category} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>

                <div className="bg-muted rounded-xl p-3 space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    What to look for in-store:
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {shop.tips}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Certifications:</span>
                  <Badge 
                    variant={shop.certificationStatus === "Ask in-store" ? "outline" : "secondary"}
                    className="text-xs"
                  >
                    {shop.certificationStatus}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredShops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No shops listed for this area yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalShops;
