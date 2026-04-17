import { defineField, defineType } from "sanity";

export const dissection = defineType({
  name: "dissection",
  title: "Dissection",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "card", title: "Card & Hub" },
    { name: "seo", title: "SEO & Meta" },
    { name: "settings", title: "Settings" },
    { name: "internal", title: "Internal" },
  ],
  fields: [
    // ── Core content ──────────────────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      description: 'The full headline. E.g. "How Notion Went From $0 to $10B: The GTM Infrastructure Behind the Growth"',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: "Auto-generated from title. Do not change after publishing.",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      group: "content",
      description: 'Short company name used in the banner. E.g. "Notion"',
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      group: "content",
      description: 'Short descriptor shown above the headline. E.g. "GTM Infrastructure · Product-Led Growth"',
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "content",
      description: "2–3 sentences. Used on listing cards and in search results.",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      group: "content",
      description: "3–4 key numbers shown on the banner. E.g. $10B valuation · PLG motion · 22 min read",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string",
              description: 'E.g. "$10B"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              description: 'E.g. "valuation"',
            },
          ],
          preview: {
            select: { value: "value", label: "label" },
            prepare({ value, label }: { value: string; label: string }) {
              return { title: label ? `${value} ${label}` : value };
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(5),
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
      ],
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      group: "content",
      description: "Emoji shown on cards. E.g. 🔬 🏗️ 📈",
    }),
    defineField({
      name: "accentColor",
      title: "Accent Colour",
      type: "string",
      group: "content",
      description: "Card accent colour on the hub.",
      options: {
        list: [
          { title: "Amber (default)", value: "amber" },
          { title: "Orange", value: "orange" },
          { title: "Lavender", value: "lavender" },
          { title: "Green", value: "green" },
          { title: "Dark", value: "dark" },
        ],
        layout: "radio",
      },
      initialValue: "amber",
    }),
    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      group: "content",
      description: "Primary search terms for this dissection. Used for Cleo AI context.",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "chapters",
      title: "Chapters",
      type: "array",
      group: "content",
      description: "Optional chapter list shown as a table of contents. E.g. 'The ICP Problem', 'The GTM Motion', 'What Actually Worked'",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      group: "content",
    }),

    // ── Card & Hub ─────────────────────────────────────────────────────────────
    defineField({
      name: "readTime",
      title: "Read Time (minutes)",
      type: "number",
      group: "card",
      validation: (Rule) => Rule.positive().integer(),
    }),
    defineField({
      name: "relatedPosts",
      title: "Related Articles",
      type: "array",
      group: "card",
      description: "Articles to surface alongside this dissection.",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (Rule) => Rule.max(4),
    }),

    // ── Settings ──────────────────────────────────────────────────────────────
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

    // ── SEO ───────────────────────────────────────────────────────────────────
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      group: "seo",
      description: "Defaults to title. Max 60 characters.",
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
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      group: "seo",
      description: "Hide this page from search engines.",
      initialValue: false,
    }),

    // ── Internal ──────────────────────────────────────────────────────────────
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
      company: "company",
      status: "status",
      media: "featuredImage",
    },
    prepare({ title, company, status, media }: {
      title: string;
      company: string;
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
        title: company ? `${company} — ${title}` : title,
        subtitle: `${statusEmoji[status] ?? ""} ${status}`,
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
      title: "Company A–Z",
      name: "companyAsc",
      by: [{ field: "company", direction: "asc" }],
    },
  ],
});
