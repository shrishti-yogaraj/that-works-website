/**
 * One-time migration script: converts existing hardcoded blog posts to Sanity documents.
 *
 * Run with: bun scripts/migrate-to-sanity.ts
 *
 * Required env var:
 *   SANITY_WRITE_TOKEN — API token with Editor permissions
 *   (create at sanity.io/manage → your project → API → Tokens)
 *
 * Safe to run multiple times — uses createIfNotExists so it won't overwrite
 * posts you've already edited in the Studio.
 */

import { createClient } from "@sanity/client";
import { blogPosts } from "../src/data/blogPosts";

const TOKEN = process.env.SANITY_WRITE_TOKEN;
if (!TOKEN) {
  console.error("❌ SANITY_WRITE_TOKEN is not set.");
  console.error("   Export it: export SANITY_WRITE_TOKEN=skYour...Token");
  process.exit(1);
}

const client = createClient({
  projectId: "nb3xydcz",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: TOKEN,
});

// ─── Markdown → Portable Text converter ──────────────────────────────────────

interface PTSpan {
  _type: "span";
  _key: string;
  text: string;
  marks: string[];
}

interface PTBlock {
  _type: "block";
  _key: string;
  style: string;
  listItem?: "bullet" | "number";
  level?: number;
  children: PTSpan[];
  markDefs: unknown[];
}

let keyCounter = 0;
const key = () => (++keyCounter).toString(36).padStart(8, "0");

function parseInline(text: string): PTSpan[] {
  const spans: PTSpan[] = [];
  // Split on **bold** and *italic* patterns
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  for (const part of parts) {
    if (part.startsWith("**") && part.endsWith("**")) {
      spans.push({ _type: "span", _key: key(), text: part.slice(2, -2), marks: ["strong"] });
    } else if (part.startsWith("*") && part.endsWith("*")) {
      spans.push({ _type: "span", _key: key(), text: part.slice(1, -1), marks: ["em"] });
    } else if (part) {
      spans.push({ _type: "span", _key: key(), text: part, marks: [] });
    }
  }
  return spans.length > 0 ? spans : [{ _type: "span", _key: key(), text: "", marks: [] }];
}

function block(style: string, text: string): PTBlock {
  return {
    _type: "block",
    _key: key(),
    style,
    children: parseInline(text),
    markDefs: [],
  };
}

function listBlock(
  listItem: "bullet" | "number",
  text: string,
  level = 1
): PTBlock {
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    listItem,
    level,
    children: parseInline(text),
    markDefs: [],
  };
}

function markdownToPortableText(markdown: string): PTBlock[] {
  const lines = markdown.split("\n");
  const blocks: PTBlock[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) continue; // skip blank lines

    // Skip the H1 title — it's stored in the `title` field
    if (trimmed.startsWith("# ") && blocks.length === 0) continue;

    if (trimmed.startsWith("### ")) {
      blocks.push(block("h3", trimmed.slice(4)));
    } else if (trimmed.startsWith("## ")) {
      blocks.push(block("h2", trimmed.slice(3)));
    } else if (trimmed.startsWith("# ")) {
      blocks.push(block("h2", trimmed.slice(2))); // demote extra h1s to h2
    } else if (trimmed.startsWith("- ")) {
      blocks.push(listBlock("bullet", trimmed.slice(2)));
    } else if (/^\d+\.\s/.test(trimmed)) {
      blocks.push(listBlock("number", trimmed.replace(/^\d+\.\s/, "")));
    } else if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      // Skip markdown tables — they'll appear in plain text below
      // (table rows come as separate lines; skip separator rows)
      if (trimmed.match(/^[\s|:-]+$/)) continue;
      const cellText = trimmed.slice(1, -1).split("|").map((c) => c.trim()).join(" | ");
      blocks.push(block("normal", cellText));
    } else {
      blocks.push(block("normal", trimmed));
    }
  }

  return blocks;
}

// ─── Category → Sanity reference ─────────────────────────────────────────────

const CATEGORY_MAP: Record<string, string> = {
  "GTM & Growth": "gtm-growth",
  "Marketing Systems": "marketing-systems",
  "Lead Generation": "lead-generation",
  "Tool Reviews": "tool-reviews",
  "Revenue Architecture": "revenue-architecture",
  "Playbooks": "playbooks",
  "Hiring & Team Design": "hiring-team-design",
};

// Pre-create categories if they don't exist, return their IDs
async function ensureCategories(): Promise<Record<string, string>> {
  const categoryColors: Record<string, string> = {
    "GTM & Growth": "var(--yellow)",
    "Marketing Systems": "var(--lavender)",
    "Lead Generation": "var(--orange)",
    "Tool Reviews": "var(--muted)",
    "Revenue Architecture": "#4ade80",
    "Playbooks": "#22d3ee",
    "Hiring & Team Design": "#fb7185",
  };

  const idMap: Record<string, string> = {};
  for (const [title, slugValue] of Object.entries(CATEGORY_MAP)) {
    const docId = `category-${slugValue}`;
    await client.createIfNotExists({
      _type: "category",
      _id: docId,
      title,
      slug: { _type: "slug", current: slugValue },
      color: categoryColors[title] ?? "",
    });
    idMap[title] = docId;
  }
  return idMap;
}

// Pre-create the default author
async function ensureAuthor(): Promise<string> {
  const docId = "author-that-works-team";
  await client.createIfNotExists({
    _type: "author",
    _id: docId,
    name: "That Works Team",
    slug: { _type: "slug", current: "that-works-team" },
    role: "That Works",
  });
  return docId;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n🚀 Starting migration of ${blogPosts.length} posts to Sanity…\n`);

  console.log("Creating categories…");
  const categoryIds = await ensureCategories();
  console.log(`✅ ${Object.keys(categoryIds).length} categories ready\n`);

  console.log("Creating default author…");
  const authorId = await ensureAuthor();
  console.log(`✅ Author ready (${authorId})\n`);

  let created = 0;
  let skipped = 0;

  for (const post of blogPosts) {
    const docId = `post-migrated-${post.slug}`;

    const content = markdownToPortableText(post.content);
    const categoryId = categoryIds[post.category];
    const readTimeNum = parseInt(post.readTime, 10) || 5;

    const doc = {
      _type: "post",
      _id: docId,
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      excerpt: post.excerpt,
      content,
      publishedAt: new Date(post.publishedAt).toISOString(),
      status: "published" as const,
      featured: post.featured ?? false,
      readTime: readTimeNum,
      author: { _type: "reference", _ref: authorId },
      categories: categoryId
        ? [{ _type: "reference", _ref: categoryId, _key: key() }]
        : [],
    };

    try {
      await client.createIfNotExists(doc);
      console.log(`  ✅ ${post.slug}`);
      created++;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  ❌ ${post.slug}: ${message}`);
      skipped++;
    }
  }

  console.log(`\n✅ Migration complete: ${created} posts created, ${skipped} failed.`);
  console.log(`\nNext steps:`);
  console.log(`  1. Open Sanity Studio and review the migrated posts`);
  console.log(`  2. Add featured images to each post`);
  console.log(`  3. Run: node scripts/fetch-sanity-data.mjs`);
  console.log(`  4. Run: npm run dev to test locally\n`);
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
