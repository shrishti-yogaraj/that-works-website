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

const POSTS_QUERY = /* groq */ `
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

// Fetches everything the hub page (/blog) needs in a single request
const HUB_QUERY = /* groq */ `{
  "featuredPost": *[_type == "post" && status == "published"] | order(featured desc, publishedAt desc) [0] {
    title,
    "slug": slug.current,
    excerpt,
    readTime,
    publishedAt,
    "category": categories[0]->title,
    "categoryColor": categories[0]->color
  },
  "recentPosts": *[_type == "post" && status == "published"] | order(publishedAt desc) [0..4] {
    title,
    "slug": slug.current,
    "category": categories[0]->title,
    "categoryColor": categories[0]->color,
    "featuredImage": featuredImage{ "ref": asset._ref, alt }
  },
  "labItems": *[_type == "labItem" && isLive == true] | order(publishedAt desc) [0..1] {
    title,
    "slug": slug.current,
    tagline,
    category,
    timeToComplete,
    outputDescription,
    useCases,
    icon
  },
  "latestDissection": *[_type == "dissection" && status == "published"] | order(publishedAt desc) [0] {
    title,
    "slug": slug.current,
    company,
    eyebrow,
    excerpt,
    stats,
    readTime
  }
}`;

async function main() {
  console.log(`[fetch-sanity] Fetching from Sanity (${PROJECT_ID}/${DATASET})…`);

  const postsPath = join(__dirname, "../src/data/sanityPosts.json");
  const hubPath = join(__dirname, "../src/data/sanityHubData.json");

  let posts = [];
  let hubData = null;

  try {
    [posts, hubData] = await Promise.all([
      client.fetch(POSTS_QUERY),
      client.fetch(HUB_QUERY),
    ]);
    console.log(`[fetch-sanity] Fetched ${posts.length} published posts.`);
  } catch (err) {
    console.error("[fetch-sanity] Failed to fetch from Sanity:", err.message);

    // On failure, preserve existing cached data so the build doesn't break
    try {
      const { readFileSync } = await import("fs");
      const existingPosts = JSON.parse(readFileSync(postsPath, "utf-8"));
      if (existingPosts.length > 0) {
        console.warn(`[fetch-sanity] Using cached ${existingPosts.length} posts from previous build.`);
        process.exit(0);
      }
    } catch {
      // no existing file
    }
    process.exit(1);
  }

  writeFileSync(postsPath, JSON.stringify(posts, null, 2));
  console.log(`[fetch-sanity] Written to src/data/sanityPosts.json`);

  writeFileSync(hubPath, JSON.stringify(hubData, null, 2));
  console.log(`[fetch-sanity] Written to src/data/sanityHubData.json`);
}

main();
