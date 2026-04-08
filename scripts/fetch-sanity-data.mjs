/**
 * Pre-build script: fetches all published blog posts from Sanity and writes
 * them to src/data/sanityPosts.json so the Vite SSG build can import them.
 *
 * Run automatically before `vite-react-ssg build` via the npm prebuild script.
 * Can also be run manually: node scripts/fetch-sanity-data.mjs
 *
 * Required env vars (set in .env or Netlify env):
 *   SANITY_READ_TOKEN   — API token with viewer permissions (required if dataset is private)
 *   VITE_SANITY_DATASET — dataset name (defaults to "production")
 */

import { createClient } from "@sanity/client";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PROJECT_ID = "nb3xydcz";
const DATASET = process.env.VITE_SANITY_DATASET ?? "production";
const TOKEN = process.env.SANITY_READ_TOKEN;

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-01-01",
  useCdn: false, // always fresh data at build time
  token: TOKEN,
});

const QUERY = /* groq */ `
  *[_type == "post" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    publishedAt,
    updatedAt,
    readTime,
    featured,
    "category": categories[0]->title,
    "categoryColor": categories[0]->color,
    "author": author->name,
    "authorRole": author->role,
    "authorPhoto": author->photo.asset._ref,
    "featuredImage": featuredImage{
      "ref": asset._ref,
      alt,
      caption
    },
    metaTitle,
    metaDescription,
    "ogImageRef": ogImage.asset._ref,
    ogTitle,
    ogDescription,
    canonicalUrl,
    noIndex,
    tags,
    maturityStage,
    tableOfContents,
    ctaText,
    ctaLink
  }
`;

async function main() {
  console.log(`[fetch-sanity] Fetching posts from Sanity (${PROJECT_ID}/${DATASET})…`);

  let posts = [];

  try {
    posts = await client.fetch(QUERY);
    console.log(`[fetch-sanity] Fetched ${posts.length} published posts.`);
  } catch (err) {
    console.error("[fetch-sanity] Failed to fetch from Sanity:", err.message);

    // On failure, preserve existing data so the build doesn't break
    const outPath = join(__dirname, "../src/data/sanityPosts.json");
    try {
      const { readFileSync } = await import("fs");
      const existing = readFileSync(outPath, "utf-8");
      const existingPosts = JSON.parse(existing);
      if (existingPosts.length > 0) {
        console.warn(
          `[fetch-sanity] Using cached ${existingPosts.length} posts from previous build.`
        );
        process.exit(0);
      }
    } catch {
      // no existing file
    }
    process.exit(1);
  }

  const outPath = join(__dirname, "../src/data/sanityPosts.json");
  writeFileSync(outPath, JSON.stringify(posts, null, 2));
  console.log(`[fetch-sanity] Written to src/data/sanityPosts.json`);
}

main();
