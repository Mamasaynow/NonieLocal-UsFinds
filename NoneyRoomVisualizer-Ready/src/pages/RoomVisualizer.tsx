import { useRef, useState } from "react";
import { Camera, ImagePlus, Loader2, Sparkles, Wand2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { aiMatchingAvailable, findProductsWithAI } from "@/lib/roomVisualizerAI";
import { ProductMatch, matchProductsByQuery } from "@/lib/roomVisualizerMatch";

const EXAMPLE_QUERIES = [
  "a non-toxic candle that looks good here",
  "a battery-operated candle, no flame",
  "something scent-free for a small space",
];

/**
 * Resizes an uploaded image client-side (same approach as the receipt
 * scanner in the Clearly IQ skill) so we never ship a multi-megabyte photo
 * over the wire, and returns both a data URL for the <img> preview and the
 * raw base64 payload the AI call needs.
 */
function resizeImageFile(file: File): Promise<{ dataUrl: string; base64: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 1000;
        let { width, height } = img;
        if (width > height && width > maxDim) {
          height = height * (maxDim / width);
          width = maxDim;
        } else if (height > maxDim) {
          width = width * (maxDim / height);
          height = maxDim;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d")?.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
        resolve({ dataUrl, base64: dataUrl.split(",")[1] });
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const RoomVisualizer = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<ProductMatch[] | null>(null);
  const [usedAI, setUsedAI] = useState(false);
  const [searched, setSearched] = useState(false);

  const handlePhotoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const { dataUrl, base64 } = await resizeImageFile(file);
    setPhotoPreview(dataUrl);
    setPhotoBase64(base64);
    setResults(null);
    setSearched(false);
  };

  const clearPhoto = () => {
    setPhotoPreview(null);
    setPhotoBase64(null);
    setResults(null);
    setSearched(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const runSearch = async () => {
    if (!query.trim()) return;
    setIsSearching(true);
    setSearched(true);
    try {
      if (photoBase64 && aiMatchingAvailable()) {
        const { matches, usedAI: ai } = await findProductsWithAI(query, photoBase64);
        setResults(matches);
        setUsedAI(ai);
      } else {
        setResults(matchProductsByQuery(query));
        setUsedAI(false);
      }
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24 pt-6">
      <div className="container max-w-lg mx-auto px-4">
        <header className="mb-6">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Wand2 className="w-6 h-6 text-primary" aria-hidden="true" />
            Room Visualizer
          </h1>
          <p className="text-muted-foreground">
            Upload a photo of your space, describe what you're looking for, and
            we'll match it against healthier home products.
          </p>
        </header>

        {/* Photo upload */}
        <section className="mb-6">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handlePhotoChange}
            className="hidden"
            id="room-photo-input"
          />
          {photoPreview ? (
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={photoPreview}
                alt="Your uploaded room"
                className="w-full h-56 object-cover"
              />
              <button
                onClick={clearPhoto}
                className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full p-2 shadow-soft hover:bg-card transition-colors"
                aria-label="Remove photo"
              >
                <X className="w-4 h-4 text-foreground" aria-hidden="true" />
              </button>
            </div>
          ) : (
            <label
              htmlFor="room-photo-input"
              className="flex flex-col items-center justify-center gap-2 h-40 rounded-2xl border-2 border-dashed border-border bg-muted/50 cursor-pointer hover:bg-muted transition-colors"
            >
              <ImagePlus className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground">Upload a photo of your room</span>
              <span className="text-xs text-muted-foreground">or take one with your camera</span>
            </label>
          )}
        </section>

        {/* Query */}
        <section className="mb-4">
          <label htmlFor="room-query" className="block text-sm font-medium text-foreground mb-2">
            What are you looking for?
          </label>
          <Textarea
            id="room-query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='e.g. "a non-toxic candle that looks good here"'
            className="mb-2"
          />
          <div className="flex flex-wrap gap-2 mb-4">
            {EXAMPLE_QUERIES.map((example) => (
              <button
                key={example}
                onClick={() => setQuery(example)}
                className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground hover:bg-secondary transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
          <Button
            onClick={runSearch}
            disabled={!query.trim() || isSearching}
            className="w-full gap-2"
          >
            {isSearching ? (
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            ) : (
              <Sparkles className="w-4 h-4" aria-hidden="true" />
            )}
            {isSearching ? "Finding products..." : "Find products for this room"}
          </Button>
          {!photoBase64 && (
            <p className="text-xs text-muted-foreground mt-2">
              Tip: add a photo above so matches can also be picked with your room's style in mind.
            </p>
          )}
        </section>

        {/* Results */}
        {searched && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-lg font-bold text-foreground">
                {results && results.length > 0 ? "Suggested for you" : "No matches yet"}
              </h2>
              <Badge variant={usedAI ? "default" : "secondary"} className="text-xs">
                {usedAI ? "AI-personalized" : "Catalog match"}
              </Badge>
            </div>

            {results && results.length === 0 && (
              <Card variant="flat">
                <CardContent className="p-5 text-sm text-muted-foreground">
                  Nothing in the catalog matched that description yet. Try a broader
                  term (like "candle" or "towel") or a certification (like "GOTS" or
                  "non-toxic").
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {results?.map(({ product, reasons }) => (
                <Card key={product.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-xs text-muted-foreground">{product.brand}</p>
                      {product.powerSource === "battery" && (
                        <Badge variant="outline" className="text-xs shrink-0">Battery</Badge>
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-2">
                      {product.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.certifications.map((cert) => (
                        <Badge key={cert} variant="secondary" className="text-xs px-2 py-0.5">
                          {cert}
                        </Badge>
                      ))}
                      {product.scentFree && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">Scent-free</Badge>
                      )}
                    </div>
                    {reasons.length > 0 && (
                      <p className="text-xs text-muted-foreground italic">
                        Why it fits: {reasons.join(", ")}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {!aiMatchingAvailable() && (
          <p className="text-xs text-muted-foreground mt-8 flex items-start gap-2">
            <Camera className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            Currently using built-in catalog matching. AI-personalized matches
            that reason about your room's actual style and colors can be turned
            on by an admin — see the setup note in{" "}
            <code className="bg-muted px-1 rounded">src/lib/roomVisualizerAI.ts</code>.
          </p>
        )}
      </div>
    </div>
  );
};

export default RoomVisualizer;
