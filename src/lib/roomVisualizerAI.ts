import { visualizerProducts } from "./roomVisualizerData";
import { ProductMatch, matchProductsByQuery } from "./roomVisualizerMatch";

/**
 * Optional AI-powered upgrade to the room product finder.
 *
 * WHY THIS IS OFF BY DEFAULT
 * This app has no backend, so the only way to call an AI model from here is
 * a direct fetch from the browser with an API key baked into the built
 * JS bundle. Anyone can open devtools and read that key out of the network
 * request. That's fine for a private prototype only you use, but it is
 * NOT safe to ship publicly. Before launching this to real users, move
 * this call into a small backend function (a Supabase Edge Function is the
 * natural fit since Lovable projects commonly use Supabase) that holds the
 * key server-side, and have the browser call that function instead.
 *
 * HOW TO TURN IT ON FOR NOW (personal/testing use)
 * 1. Get an API key from console.anthropic.com
 * 2. Create a .env.local file in the project root with:
 *      VITE_ANTHROPIC_API_KEY=sk-ant-...
 * 3. Restart `npm run dev`. The Room Visualizer will automatically start
 *    using AI reasoning about the room photo instead of the offline
 *    keyword matcher, and will say so in the UI.
 */

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY as string | undefined;

export function aiMatchingAvailable(): boolean {
  return Boolean(API_KEY);
}

interface AIProductPick {
  id: number;
  reason: string;
}

/**
 * Sends the room photo + the user's request + the product catalog to
 * Claude and asks it to pick the best-fitting products, reasoning about
 * the room's visible style and colors. Falls back to the offline matcher
 * (see roomVisualizerMatch.ts) on any failure — missing key, network
 * error, bad response — so the feature never hard-fails for the user.
 */
export async function findProductsWithAI(
  query: string,
  roomPhotoBase64: string,
  roomId?: string
): Promise<{ matches: ProductMatch[]; usedAI: boolean }> {
  if (!API_KEY) {
    return { matches: matchProductsByQuery(query, roomId), usedAI: false };
  }

  const pool = roomId
    ? visualizerProducts.filter((p) => p.room === roomId)
    : visualizerProducts;

  const catalogForPrompt = pool.map(
    ({ id, name, brand, type, certifications, powerSource, scentFree, style, description }) => ({
      id, name, brand, type, certifications, powerSource, scentFree, style, description,
    })
  );

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
        // Required to call the API directly from a browser. See the
        // security note at the top of this file before shipping this
        // to real users.
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5",
        max_tokens: 800,
        messages: [
          {
            role: "user",
            content: [
              { type: "image", source: { type: "base64", media_type: "image/jpeg", data: roomPhotoBase64 } },
              {
                type: "text",
                text:
                  `This photo shows a room. A shopper is looking for: "${query}".\n\n` +
                  `Here is the available product catalog as JSON:\n${JSON.stringify(catalogForPrompt)}\n\n` +
                  `Pick up to 6 products from the catalog that best match what the shopper asked for AND ` +
                  `would visually fit the room's style and colors. Respond ONLY with a JSON array, no other ` +
                  `text and no markdown fences, in this exact shape: ` +
                  `[{"id": number, "reason": "short reason tied to the room and the request"}]. ` +
                  `If nothing matches well, return an empty array.`,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) throw new Error(`AI request failed: ${response.status}`);

    const data = await response.json();
    const text = (data.content || [])
      .filter((b: { type: string }) => b.type === "text")
      .map((b: { text: string }) => b.text)
      .join("");
    const picks: AIProductPick[] = JSON.parse(text.replace(/```json|```/g, "").trim());

    const matches: ProductMatch[] = picks
      .map((pick) => {
        const product = visualizerProducts.find((p) => p.id === pick.id);
        return product ? { product, score: 99, reasons: [pick.reason] } : null;
      })
      .filter((m): m is ProductMatch => m !== null);

    if (matches.length === 0) {
      return { matches: matchProductsByQuery(query, roomId), usedAI: false };
    }
    return { matches, usedAI: true };
  } catch {
    // Network error, bad JSON, missing key at runtime, etc. — always
    // degrade gracefully to the offline matcher rather than showing an
    // error to the shopper.
    return { matches: matchProductsByQuery(query, roomId), usedAI: false };
  }
}
