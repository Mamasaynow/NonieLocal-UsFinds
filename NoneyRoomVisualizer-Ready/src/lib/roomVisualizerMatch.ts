import { VisualizerProduct, visualizerProducts } from "./roomVisualizerData";

export interface ProductMatch {
  product: VisualizerProduct;
  score: number;
  reasons: string[];
}

const STOPWORDS = new Set([
  "a", "an", "the", "for", "that", "this", "here", "with", "and", "or",
  "in", "on", "me", "find", "looking", "look", "looks", "good", "some",
  "i", "want", "need", "please", "of", "to", "my", "is",
]);

// Keyword hints that map loosely-phrased requests onto structured attributes.
const KEYWORD_HINTS: Record<string, { field: keyof VisualizerProduct; value: unknown }[]> = {
  "non-toxic": [{ field: "scentFree", value: true }],
  nontoxic: [{ field: "scentFree", value: true }],
  "chemical-free": [{ field: "scentFree", value: true }],
  unscented: [{ field: "scentFree", value: true }],
  "fragrance-free": [{ field: "scentFree", value: true }],
  battery: [{ field: "powerSource", value: "battery" }],
  "battery-operated": [{ field: "powerSource", value: "battery" }],
  cordless: [{ field: "powerSource", value: "battery" }],
  flameless: [{ field: "powerSource", value: "battery" }],
};

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w));
}

/**
 * Rule-based product matcher. Works entirely offline with no API calls —
 * this is the fallback (and, right now, the only implementation) behind
 * the Room Visualizer's "find products" search. It scores every product
 * against the tokens in the query plus a few keyword hints (see
 * KEYWORD_HINTS) for phrases like "non-toxic" or "battery-operated" that
 * map onto structured fields rather than literal words in the catalog.
 */
export function matchProductsByQuery(query: string, roomId?: string): ProductMatch[] {
  const tokens = tokenize(query);
  const pool = roomId
    ? visualizerProducts.filter((p) => p.room === roomId)
    : visualizerProducts;

  const matches: ProductMatch[] = pool.map((product) => {
    let score = 0;
    const reasons: string[] = [];
    const haystack = [
      product.name,
      product.type,
      product.brand,
      product.style,
      product.description,
      ...product.certifications,
    ]
      .join(" ")
      .toLowerCase();

    for (const token of tokens) {
      if (haystack.includes(token)) {
        score += 2;
        if (product.type.includes(token) || product.name.toLowerCase().includes(token)) {
          reasons.push(`matches "${token}"`);
        }
      }
      const hints = KEYWORD_HINTS[token];
      if (hints) {
        for (const hint of hints) {
          if (product[hint.field] === hint.value) {
            score += 3;
            if (hint.field === "scentFree") reasons.push("non-toxic / scent-free");
            if (hint.field === "powerSource") reasons.push("battery-operated, no flame");
          }
        }
      }
    }

    if (product.certifications.length > 0 && score > 0) {
      reasons.push(`certified ${product.certifications.join(", ")}`);
    }

    return { product, score, reasons: Array.from(new Set(reasons)) };
  });

  return matches
    .filter((m) => m.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}
