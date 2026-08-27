// Product catalog for the Room Visualizer's product finder.
// This mirrors the sample data in ShopByRoom.tsx but adds a few extra
// attributes (type, powerSource, scentFree, style) that the matcher needs
// to answer requests like "a non-toxic, battery-operated candle that looks
// good here." In a real backend this would all live in one shared catalog —
// see the note in RoomVisualizer.tsx about unifying the two.

export type PowerSource = "battery" | "electric" | "none";

export interface VisualizerProduct {
  id: number;
  name: string;
  brand: string;
  room: string;
  type: string;
  certifications: string[];
  powerSource: PowerSource;
  scentFree: boolean;
  style: string;
  description: string;
}

export const visualizerProducts: VisualizerProduct[] = [
  { id: 1, name: "Organic Cotton Dish Towels", brand: "Coyuchi", room: "kitchen", type: "towel", certifications: ["GOTS"], powerSource: "none", scentFree: true, style: "minimalist", description: "Undyed organic cotton, soft and absorbent." },
  { id: 2, name: "Bamboo Drawer Organizers", brand: "Brightroom", room: "kitchen", type: "organizer", certifications: ["FSC"], powerSource: "none", scentFree: true, style: "modern", description: "Natural bamboo, no finishes or adhesives with VOCs." },
  { id: 3, name: "Zero-VOC Wall Paint", brand: "Clare", room: "kitchen", type: "paint", certifications: ["GREENGUARD"], powerSource: "none", scentFree: true, style: "modern", description: "Low-odor, zero-VOC interior paint." },
  { id: 4, name: "GOTS Cotton Bath Towels", brand: "Under the Canopy", room: "bathroom", type: "towel", certifications: ["GOTS"], powerSource: "none", scentFree: true, style: "coastal", description: "Plush organic cotton towels in soft neutrals." },
  { id: 5, name: "Bamboo Bath Mat", brand: "Threshold", room: "bathroom", type: "bath-mat", certifications: ["FSC"], powerSource: "none", scentFree: true, style: "minimalist", description: "Quick-dry bamboo slat mat." },
  { id: 6, name: "Organic Linen Bedding", brand: "Coyuchi", room: "bedroom", type: "bedding", certifications: ["GOTS", "OEKO-TEX"], powerSource: "none", scentFree: true, style: "coastal", description: "Breathable relaxed-linen bedding set." },
  { id: 7, name: "Natural Latex Pillow", brand: "Avocado", room: "bedroom", type: "pillow", certifications: ["GOLS", "GREENGUARD"], powerSource: "none", scentFree: true, style: "minimalist", description: "Supportive natural latex, no memory-foam off-gassing." },
  { id: 8, name: "Unscented Soy Candle", brand: "Fontana Candle Co.", room: "bedroom", type: "candle", certifications: [], powerSource: "none", scentFree: true, style: "rustic", description: "Soy wax with a cotton wick, no fragrance added." },
  { id: 19, name: "Flameless LED Candle (Battery)", brand: "Luminara", room: "bedroom", type: "candle", certifications: [], powerSource: "battery", scentFree: true, style: "minimalist", description: "Realistic flicker, no flame, no wax, no scent — safe for kids and pets." },
  { id: 9, name: "Solid Wood Coat Rack", brand: "West Elm", room: "entryway", type: "coat-rack", certifications: ["FSC"], powerSource: "none", scentFree: true, style: "modern", description: "FSC-certified solid wood, simple silhouette." },
  { id: 10, name: "Natural Fiber Entry Mat", brand: "Ruggable", room: "entryway", type: "entry-mat", certifications: ["OEKO-TEX"], powerSource: "none", scentFree: true, style: "rustic", description: "Durable natural-fiber weave for high traffic." },
  { id: 11, name: "Stackable Storage Bins", brand: "Open Spaces", room: "small-spaces", type: "storage-bin", certifications: [], powerSource: "none", scentFree: true, style: "modern", description: "Space-saving stackable bins for tight closets." },
  { id: 12, name: "Solid Wood Desk", brand: "Medley Home", room: "office", type: "desk", certifications: ["FSC", "GREENGUARD"], powerSource: "none", scentFree: true, style: "modern", description: "Low-emission finish, solid wood top." },
  { id: 13, name: "Ergonomic Office Chair", brand: "Autonomous", room: "office", type: "chair", certifications: ["GREENGUARD"], powerSource: "none", scentFree: true, style: "modern", description: "Low-VOC foam and upholstery." },
  { id: 14, name: "Bamboo Monitor Stand", brand: "Uplift", room: "office", type: "monitor-stand", certifications: ["FSC"], powerSource: "none", scentFree: true, style: "minimalist", description: "Raises your screen to eye level, natural bamboo." },
  { id: 15, name: "Unscented Beeswax Candle", brand: "Big Dipper Wax Works", room: "office", type: "candle", certifications: [], powerSource: "none", scentFree: true, style: "rustic", description: "Pure beeswax, cotton wick, no added fragrance." },
  { id: 16, name: "Teak Outdoor Dining Table", brand: "West Elm", room: "patio", type: "outdoor-table", certifications: ["FSC"], powerSource: "none", scentFree: true, style: "coastal", description: "Weather-resistant FSC teak." },
  { id: 17, name: "Recycled Plastic Adirondack Chair", brand: "Polywood", room: "patio", type: "outdoor-chair", certifications: [], powerSource: "none", scentFree: true, style: "coastal", description: "Made from recycled plastic, weatherproof." },
  { id: 18, name: "Natural Fiber Outdoor Rug", brand: "Ruggable", room: "patio", type: "outdoor-rug", certifications: ["OEKO-TEX"], powerSource: "none", scentFree: true, style: "coastal", description: "Fade-resistant natural-fiber weave." },
];
