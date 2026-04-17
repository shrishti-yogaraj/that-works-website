/**
 * One-time script: seeds blog categories into Sanity.
 *
 * Usage:
 *   SANITY_WRITE_TOKEN=<your-editor-token> node scripts/seed-categories.mjs
 *
 * Get a token at: sanity.io/manage → nb3xydcz → API → Tokens (Editor role)
 * Safe to run multiple times — skips categories that already exist.
 */

import { createClient } from "@sanity/client";

const PROJECT_ID = "nb3xydcz";
const DATASET = process.env.VITE_SANITY_DATASET ?? "production";
const TOKEN = process.env.SANITY_WRITE_TOKEN;

if (!TOKEN) {
  console.error("Error: SANITY_WRITE_TOKEN is not set.");
  console.error("Usage: SANITY_WRITE_TOKEN=<token> node scripts/seed-categories.mjs");
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: TOKEN,
});

const CATEGORIES = [
  { title: "GTM & Growth",         slug: "gtm-and-growth",         color: "#ff5c00" },
  { title: "Marketing Systems",    slug: "marketing-systems",       color: "#c4b5fd" },
  { title: "Lead Generation",      slug: "lead-generation",         color: "#fb923c" },
  { title: "Revenue Architecture", slug: "revenue-architecture",    color: "#34d399" },
  { title: "Playbooks",            slug: "playbooks",               color: "#22d3ee" },
  { title: "Strategy",             slug: "strategy",                color: "#fbbf24" },
  { title: "Positioning",          slug: "positioning",             color: "#60a5fa" },
  { title: "Hiring & Team Design", slug: "hiring-and-team-design",  color: "#fb7185" },
  { title: "Tool Reviews",         slug: "tool-reviews",            color: "#9a9088" },
];

async function main() {
  console.log(`[seed-categories] Connecting to Sanity (${PROJECT_ID}/${DATASET})…`);

  // Fetch existing categories to avoid duplicates
  const existing = await client.fetch(
    `*[_type == "category"]{ "slug": slug.current }`
  );
  const existingSlugs = new Set(existing.map((c) => c.slug));

  const toCreate = CATEGORIES.filter((c) => !existingSlugs.has(c.slug));

  if (toCreate.length === 0) {
    console.log("[seed-categories] All categories already exist. Nothing to do.");
    return;
  }

  console.log(`[seed-categories] Creating ${toCreate.length} categories…`);

  for (const cat of toCreate) {
    await client.create({
      _type: "category",
      title: cat.title,
      slug: { _type: "slug", current: cat.slug },
      color: cat.color,
    });
    console.log(`  ✓ ${cat.title}`);
  }

  console.log("[seed-categories] Done.");
}

main().catch((err) => {
  console.error("[seed-categories] Failed:", err.message);
  process.exit(1);
});
