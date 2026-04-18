/**
 * Pre-build script: generates public/sitemap.xml from static routes + live Sanity content.
 *
 * Runs automatically before `vite-react-ssg build` via the build script.
 * Can also be run manually: node scripts/generate-sitemap.mjs
 *
 * Required env vars (set in .env or Netlify env):
 *   SANITY_READ_TOKEN   — API token with viewer permissions
 *   VITE_SANITY_DATASET — dataset name (defaults to "production")
 */

import { createClient } from "@sanity/client";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://thatworksco.com";
const PROJECT_ID = "nb3xydcz";
const DATASET = process.env.VITE_SANITY_DATASET ?? "production";
const TOKEN = process.env.SANITY_READ_TOKEN;

// ── Static routes ─────────────────────────────────────────────────────────────
// Update this list whenever a new page is added to src/routes.tsx
const STATIC_ROUTES = [
  { path: "/",                                     priority: "1.0", changefreq: "weekly"  },
  { path: "/approach",                             priority: "0.8", changefreq: "monthly" },
  { path: "/about",                                priority: "0.7", changefreq: "monthly" },
  { path: "/contact",                             priority: "0.8", changefreq: "monthly" },
  { path: "/contact",                              priority: "0.7", changefreq: "monthly" },
  { path: "/faq",                                  priority: "0.8", changefreq: "monthly" },
  { path: "/privacy",                              priority: "0.3", changefreq: "yearly"  },
  { path: "/terms",                                priority: "0.3", changefreq: "yearly"  },
  { path: "/services",                             priority: "0.9", changefreq: "monthly" },
  { path: "/services/lead-gen",                    priority: "0.8", changefreq: "monthly" },
  { path: "/services/inbound",                     priority: "0.8", changefreq: "monthly" },
  { path: "/services/branding",                    priority: "0.8", changefreq: "monthly" },
  { path: "/services/retention",                   priority: "0.8", changefreq: "monthly" },
  { path: "/services/marketing-os/zero-to-one",    priority: "0.8", changefreq: "monthly" },
  { path: "/services/marketing-os/friction",       priority: "0.8", changefreq: "monthly" },
  { path: "/services/marketing-os/scale",          priority: "0.8", changefreq: "monthly" },
  { path: "/services/marketing-os/leader",         priority: "0.8", changefreq: "monthly" },
  { path: "/blog",                                 priority: "0.8", changefreq: "weekly"  },
  { path: "/articles",                             priority: "0.7", changefreq: "weekly"  },
  { path: "/lab",                                  priority: "0.7", changefreq: "weekly"  },
  { path: "/join",                                 priority: "0.8", changefreq: "monthly" },
  { path: "/join/marketing-intern",                priority: "0.7", changefreq: "monthly" },
  { path: "/join/finance-intern",                  priority: "0.7", changefreq: "monthly" },
  { path: "/join/ops-admin-intern",                priority: "0.7", changefreq: "monthly" },
  { path: "/join/gtm-systems-engineer",            priority: "0.7", changefreq: "monthly" },
  { path: "/join/sales",                           priority: "0.7", changefreq: "monthly" },
];

// ── Sanity queries ────────────────────────────────────────────────────────────
const QUERIES = {
  posts: /* groq */ `
    *[_type == "post" && status == "published" && defined(slug.current)] {
      "slug": slug.current,
      "lastmod": coalesce(updatedAt, publishedAt)
    }
  `,
  dissections: /* groq */ `
    *[_type == "dissection" && status == "published" && defined(slug.current)] {
      "slug": slug.current,
      "lastmod": publishedAt
    }
  `,
  lab: /* groq */ `
    *[_type == "labItem" && isLive == true && defined(slug.current)] {
      "slug": slug.current,
      "lastmod": publishedAt
    }
  `,
};

const DYNAMIC_PREFIXES = {
  posts:       { prefix: "/blog",        priority: "0.7", changefreq: "monthly" },
  dissections: { prefix: "/dissections", priority: "0.7", changefreq: "monthly" },
  lab:         { prefix: "/lab",         priority: "0.6", changefreq: "monthly" },
};

// ── Helpers ───────────────────────────────────────────────────────────────────
const today = new Date().toISOString().slice(0, 10);

function toLastmod(dateStr) {
  if (!dateStr) return today;
  return dateStr.slice(0, 10);
}

function urlEntry({ loc, lastmod, changefreq, priority }) {
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log("[sitemap] Generating sitemap…");

  const client = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: "2024-01-01",
    useCdn: false,
    token: TOKEN,
  });

  // Fetch dynamic content (tolerate failures — just skip that content type)
  const dynamic = {};
  for (const [key, query] of Object.entries(QUERIES)) {
    try {
      dynamic[key] = await client.fetch(query);
      console.log(`[sitemap]   ${key}: ${dynamic[key].length} items`);
    } catch (err) {
      console.warn(`[sitemap]   Warning — could not fetch ${key}: ${err.message}`);
      dynamic[key] = [];
    }
  }

  // Build URL entries
  const entries = [];

  // Static routes
  for (const route of STATIC_ROUTES) {
    entries.push(urlEntry({
      loc: `${SITE_URL}${route.path}`,
      lastmod: today,
      changefreq: route.changefreq,
      priority: route.priority,
    }));
  }

  // Dynamic routes
  for (const [key, items] of Object.entries(dynamic)) {
    const { prefix, priority, changefreq } = DYNAMIC_PREFIXES[key];
    for (const item of items) {
      if (!item.slug) continue;
      entries.push(urlEntry({
        loc: `${SITE_URL}${prefix}/${item.slug}`,
        lastmod: toLastmod(item.lastmod),
        changefreq,
        priority,
      }));
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    "",
    entries.join("\n\n"),
    "",
    "</urlset>",
  ].join("\n");

  const outPath = join(__dirname, "../public/sitemap.xml");
  writeFileSync(outPath, xml);
  console.log(`[sitemap] Written to public/sitemap.xml (${entries.length} URLs)`);
}

main();
