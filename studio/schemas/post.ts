import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO & Meta" },
    { name: "taxonomy", title: "Taxonomy" },
    { name: "settings", title: "Settings" },
    { name: "internal", title: "Internal" },
  ],
  fields: [
    // ── Core content ───────────────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: "The URL path — auto-generated from title. Do not change after publishing.",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "content",
      description: "2–3 sentences. Used in blog listing cards and meta description fallback.",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      group: "content",
    }),

    // ── Publication ────────────────────────────────────────────────────────
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      group: "settings",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "In Review", value: "in-review" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      group: "settings",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
    }),
    defineField({
      name: "updatedAt",
      title: "Last Updated",
      type: "datetime",
      group: "settings",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
    }),

    // ── Taxonomy ───────────────────────────────────────────────────────────
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      group: "taxonomy",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "taxonomy",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      group: "taxonomy",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "maturityStage",
      title: "Maturity Stage",
      type: "string",
      group: "taxonomy",
      description: "Which Marketing OS stage does this post target?",
      options: {
        list: [
          { title: "0→1 (Zero to One)", value: "0→1" },
          { title: "Friction (Fix what's breaking)", value: "Friction" },
          { title: "Scale (Systemise for growth)", value: "Scale" },
          { title: "Leader (Close lifecycle gaps)", value: "Leader" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured post",
      type: "boolean",
      group: "settings",
      description: "Pin to the top of the blog listing page.",
      initialValue: false,
    }),

    // ── Content enhancements ───────────────────────────────────────────────
    defineField({
      name: "tableOfContents",
      title: "Show Table of Contents",
      type: "boolean",
      group: "settings",
      initialValue: false,
    }),
    defineField({
      name: "readTime",
      title: "Read Time (minutes)",
      type: "number",
      group: "settings",
      validation: (Rule) => Rule.positive().integer(),
    }),
    defineField({
      name: "relatedPosts",
      title: "Related Posts",
      type: "array",
      group: "settings",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      group: "settings",
      description: "Optional CTA shown at the end of the post.",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Button URL",
      type: "url",
      group: "settings",
    }),

    // ── SEO ───────────────────────────────────────────────────────────────
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      group: "seo",
      description: "Defaults to post title. Max 60 characters.",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      group: "seo",
      description: "Defaults to excerpt. Max 160 characters.",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "ogImage",
      title: "OG Image",
      type: "image",
      group: "seo",
      description: "Defaults to featured image. Ideal size: 1200×630px.",
      options: { hotspot: true },
    }),
    defineField({
      name: "ogTitle",
      title: "OG Title",
      type: "string",
      group: "seo",
      description: "Defaults to meta title → post title.",
    }),
    defineField({
      name: "ogDescription",
      title: "OG Description",
      type: "text",
      rows: 2,
      group: "seo",
      description: "Defaults to meta description → excerpt.",
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      group: "seo",
      description: "Leave empty — auto-set to thatworksco.com/blog/[slug].",
    }),
    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      group: "seo",
      description: "Hide this post from search engines.",
      initialValue: false,
    }),

    // ── Internal ───────────────────────────────────────────────────────────
    defineField({
      name: "internalNotes",
      title: "Internal Notes",
      type: "text",
      rows: 4,
      group: "internal",
      description: "Not displayed on site. For team use only.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      status: "status",
      media: "featuredImage",
    },
    prepare({ title, author, status, media }: {
      title: string;
      author: string;
      status: string;
      media: unknown;
    }) {
      const statusEmoji: Record<string, string> = {
        draft: "📝",
        "in-review": "👀",
        published: "✅",
        archived: "📦",
      };
      return {
        title,
        subtitle: `${statusEmoji[status] ?? ""} ${status} · ${author ?? "No author"}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Published Date (newest first)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Title A–Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
