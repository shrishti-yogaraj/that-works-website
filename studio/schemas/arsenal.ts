import { defineField, defineType } from "sanity";

export const arsenal = defineType({
  name: "arsenal",
  title: "Arsenal",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "download", title: "Download" },
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
      description: 'E.g. "ICP Qualification Canvas"',
      validation: (Rule) => Rule.required().max(100),
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
      name: "type",
      title: "Type",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Template", value: "template" },
          { title: "Framework", value: "framework" },
          { title: "Checklist", value: "checklist" },
          { title: "Swipe File", value: "swipe-file" },
          { title: "Playbook", value: "playbook" },
          { title: "Worksheet", value: "worksheet" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "GTM & Growth", value: "gtm" },
          { title: "Positioning", value: "positioning" },
          { title: "Lead Generation", value: "lead-gen" },
          { title: "Retention", value: "retention" },
          { title: "Hiring & Team", value: "hiring" },
          { title: "Strategy", value: "strategy" },
          { title: "Operations", value: "operations" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 2,
      group: "content",
      description: "1–2 sentences for listing cards. Keep it punchy.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      group: "content",
      description: "Longer description for the individual arsenal item page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "outputDescription",
      title: "What You Get",
      type: "string",
      group: "content",
      description: 'One line describing the output. E.g. "Score your motion across 4 pillars. Surfaces where revenue is leaking."',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "featuredImage",
      title: "Preview Image",
      type: "image",
      group: "content",
      description: "A preview/thumbnail of the resource.",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      group: "content",
      description: "Emoji shown on resource cards. E.g. 📋 🎯 📊",
    }),
    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      group: "content",
      description: "Search terms this resource should surface for. Used for Cleo AI.",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "useCases",
      title: "Use Cases",
      type: "array",
      group: "content",
      description: "Who this is for / when to use it. E.g. 'Pre-Series A founders validating ICP', 'SDRs building outbound lists'",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "prerequisites",
      title: "Prerequisites",
      type: "string",
      group: "content",
      description: "Optional. What should someone have done/read before using this? E.g. 'Read the ICP article first'",
    }),

    // ── Download ──────────────────────────────────────────────────────────────
    defineField({
      name: "isFree",
      title: "Free to download",
      type: "boolean",
      group: "download",
      description: "All resources are currently free. This field future-proofs paid tiers.",
      initialValue: true,
    }),
    defineField({
      name: "file",
      title: "File Upload",
      type: "file",
      group: "download",
      description: "Upload the file directly to Sanity (PDF, XLSX, DOCX, etc.)",
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      group: "download",
      description: "Alternative to file upload — link to Notion, Google Sheets, Airtable, etc.",
    }),
    defineField({
      name: "fileFormat",
      title: "File Format",
      type: "string",
      group: "download",
      description: 'E.g. "PDF", "Google Sheets", "Notion Template"',
    }),

    // ── Card & Hub ─────────────────────────────────────────────────────────────
    defineField({
      name: "relatedPosts",
      title: "Related Articles",
      type: "array",
      group: "card",
      description: "Articles that pair with this resource.",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: "relatedDissections",
      title: "Related Dissections",
      type: "array",
      group: "card",
      of: [{ type: "reference", to: [{ type: "dissection" }] }],
      validation: (Rule) => Rule.max(2),
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
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      group: "seo",
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
      type: "type",
      category: "category",
      status: "status",
      media: "featuredImage",
    },
    prepare({ title, type, category, status, media }: {
      title: string;
      type: string;
      category: string;
      status: string;
      media: unknown;
    }) {
      const statusEmoji: Record<string, string> = {
        draft: "📝",
        published: "✅",
        archived: "📦",
      };
      return {
        title,
        subtitle: `${statusEmoji[status] ?? ""} ${type ?? ""} · ${category ?? ""}`,
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
      title: "Category",
      name: "categoryAsc",
      by: [{ field: "category", direction: "asc" }],
    },
  ],
});
