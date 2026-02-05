import { useState } from "react";
import { ChefHat, Bath, Bed, DoorOpen, Maximize2, Filter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const rooms = [
  { id: "kitchen", name: "Kitchen", icon: ChefHat },
  { id: "bathroom", name: "Bathroom", icon: Bath },
  { id: "bedroom", name: "Bedroom", icon: Bed },
  { id: "entryway", name: "Entryway", icon: DoorOpen },
  { id: "small-spaces", name: "Small Spaces", icon: Maximize2 },
];

const filters = {
  features: [
    { id: "scent-free", label: "Scent-Free / Fragrance-Free" },
    { id: "low-voc", label: "Low-VOC / Zero-VOC" },
  ],
  certifications: [
    { id: "fsc", label: "FSC" },
    { id: "gots", label: "GOTS" },
    { id: "greenguard", label: "GREENGUARD / Gold" },
    { id: "oeko-tex", label: "OEKO-TEX Standard 100" },
    { id: "gols", label: "GOLS" },
  ],
};

// Sample items - in a real app, these would come from a database
const sampleItems = [
  { id: 1, name: "Organic Cotton Dish Towels", brand: "Coyuchi", certifications: ["GOTS"], room: "kitchen" },
  { id: 2, name: "Bamboo Drawer Organizers", brand: "Brightroom", certifications: ["FSC"], room: "kitchen" },
  { id: 3, name: "Zero-VOC Wall Paint", brand: "Clare", certifications: ["GREENGUARD"], room: "kitchen" },
  { id: 4, name: "GOTS Cotton Bath Towels", brand: "Under the Canopy", certifications: ["GOTS"], room: "bathroom" },
  { id: 5, name: "Bamboo Bath Mat", brand: "Threshold", certifications: ["FSC"], room: "bathroom" },
  { id: 6, name: "Organic Linen Bedding", brand: "Coyuchi", certifications: ["GOTS", "OEKO-TEX"], room: "bedroom" },
  { id: 7, name: "Natural Latex Pillow", brand: "Avocado", certifications: ["GOLS", "GREENGUARD"], room: "bedroom" },
  { id: 8, name: "Solid Wood Coat Rack", brand: "West Elm", certifications: ["FSC"], room: "entryway" },
  { id: 9, name: "Natural Fiber Entry Mat", brand: "Ruggable", certifications: ["OEKO-TEX"], room: "entryway" },
  { id: 10, name: "Stackable Storage Bins", brand: "Open Spaces", certifications: [], room: "small-spaces" },
];

const ShopByRoom = () => {
  const [selectedRoom, setSelectedRoom] = useState("kitchen");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredItems = sampleItems.filter((item) => item.room === selectedRoom);

  return (
    <div className="min-h-screen bg-background pb-24 pt-6">
      <div className="container max-w-lg mx-auto px-4">
        <header className="mb-6">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
            Shop by Room
          </h1>
          <p className="text-muted-foreground">
            Browse healthier home products, organized by space.
          </p>
        </header>

        {/* Room selector */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 -mx-4 px-4 scrollbar-hide">
          {rooms.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedRoom(id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all ${
                selectedRoom === id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              <span className="font-medium text-sm">{name}</span>
            </button>
          ))}
        </div>

        {/* Filter button */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredItems.length} items
          </p>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" aria-hidden="true" />
                Filters
                {activeFilters.length > 0 && (
                  <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                    {activeFilters.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[70vh] rounded-t-2xl">
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div className="space-y-3">
                  <h3 className="font-heading font-semibold text-foreground">Features</h3>
                  {filters.features.map(({ id, label }) => (
                    <label key={id} className="flex items-center gap-3 cursor-pointer">
                      <Checkbox
                        checked={activeFilters.includes(id)}
                        onCheckedChange={() => toggleFilter(id)}
                      />
                      <span className="text-foreground">{label}</span>
                    </label>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading font-semibold text-foreground">Certifications</h3>
                  {filters.certifications.map(({ id, label }) => (
                    <label key={id} className="flex items-center gap-3 cursor-pointer">
                      <Checkbox
                        checked={activeFilters.includes(id)}
                        onCheckedChange={() => toggleFilter(id)}
                      />
                      <span className="text-foreground">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Product grid */}
        <div className="grid gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} variant="default" className="overflow-hidden">
              <CardContent className="p-4 flex gap-4">
                <div className="w-20 h-20 bg-muted rounded-xl shrink-0 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">{item.brand}</p>
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {item.certifications.map((cert) => (
                      <Badge key={cert} variant="secondary" className="text-xs px-2 py-0.5">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
                <button 
                  className="self-start p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label={`Save ${item.name} to favorites`}
                >
                  <Heart className="w-5 h-5 text-muted-foreground" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByRoom;
