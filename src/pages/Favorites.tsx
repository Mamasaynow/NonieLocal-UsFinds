import { Heart, Store, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample saved items - in a real app, these would come from user storage/database
const savedItems = [
  {
    id: 1,
    name: "Solid Oak Dining Table",
    brand: "Medley Home",
    certifications: ["FSC", "GREENGUARD Gold"],
  },
  {
    id: 2,
    name: "Organic Linen Bedding",
    brand: "Coyuchi",
    certifications: ["GOTS", "OEKO-TEX"],
  },
];

const savedShops = [
  {
    id: 1,
    name: "Found Gallery",
    city: "Ann Arbor, MI",
    categories: ["Furniture", "Home Goods"],
  },
  {
    id: 2,
    name: "Sherwin-Williams",
    city: "Ann Arbor, MI",
    categories: ["Paints"],
  },
];

const Favorites = () => {
  return (
    <div className="min-h-screen bg-background pb-24 pt-6">
      <div className="container max-w-lg mx-auto px-4">
        <header className="mb-6">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
            Favorites
          </h1>
          <p className="text-muted-foreground">
            Your saved items and shops.
          </p>
        </header>

        <Tabs defaultValue="items" className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="items" className="flex-1 gap-2">
              <Package className="w-4 h-4" aria-hidden="true" />
              Items
            </TabsTrigger>
            <TabsTrigger value="shops" className="flex-1 gap-2">
              <Store className="w-4 h-4" aria-hidden="true" />
              Shops
            </TabsTrigger>
          </TabsList>

          <TabsContent value="items">
            {savedItems.length > 0 ? (
              <div className="space-y-4">
                {savedItems.map((item) => (
                  <Card key={item.id} variant="default">
                    <CardContent className="p-4 flex gap-4">
                      <div className="w-16 h-16 bg-muted rounded-xl shrink-0 flex items-center justify-center">
                        <img 
                          src="/placeholder.svg" 
                          alt={item.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground mb-0.5">{item.brand}</p>
                        <h3 className="font-heading font-semibold text-foreground text-sm mb-2">
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
                        className="self-start p-2 text-warm"
                        aria-label={`Remove ${item.name} from favorites`}
                      >
                        <Heart className="w-5 h-5 fill-current" />
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  No saved items yet. Browse products and tap the heart to save.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="shops">
            {savedShops.length > 0 ? (
              <div className="space-y-4">
                {savedShops.map((shop) => (
                  <Card key={shop.id} variant="default">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-leaf-light rounded-xl flex items-center justify-center shrink-0">
                        <Store className="w-6 h-6 text-leaf" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-semibold text-foreground">
                          {shop.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{shop.city}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {shop.categories.map((cat) => (
                            <Badge key={cat} variant="secondary" className="text-xs px-2 py-0.5">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <button 
                        className="self-start p-2 text-warm"
                        aria-label={`Remove ${shop.name} from favorites`}
                      >
                        <Heart className="w-5 h-5 fill-current" />
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Store className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  No saved shops yet. Visit Local Eco Shops to find stores near you.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Favorites;
