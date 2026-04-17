import { defineField, defineType } from "sanity";

export const labItem = defineType({
  name: "labItem",
  title: "Lab",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "card", title: "Card & Hub" },
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
      description: 'E.g. "GTM Readiness Score"',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: "Must match the React route for this tool exactly. E.g. 'gtm-readiness-score' → /lab/gtm-readiness-score",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "content",
      description: "One punchy line shown on the card. E.g. "Surfaces your top 3 gaps in 8 minutes."",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      group: "content",
      description: "2–3 sentences for the lab listing page.",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Diagnostic", value: "diagnostic" },
          { title: "Calculator", value: "calculator" },
          { title: "Scorecard", value: "scorecard" },
          { title: "Generator", value: "generator" },
          { title: "Planner", value: "planner" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "timeToComplete",
      title: "Time to Complete",
      type: "string",
      group: "content",
      description: 'E.g. "8 minutes", "15 minutes"',
    }),
    defineField({
      name: "outputDescription",
      title: "What You Get",
      type: "string",
      group: "content",
      description: 'What the tool produces. E.g. "Scored breakdown across 4 pillars with prioritised next steps."',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      group: "content",
      description: "Emoji shown on lab cards. E.g. 🧪 ⚡ 🎯",
    }),
    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      group: "content",
      description: "Search terms for Cleo AI to surface this tool.",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "outputFormat",
      title: "Output Format",
      type: "string",
      group: "content",
      description: "How results are presented to the user.",
      options: {
        list: [
          { title: "Score / number", value: "score" },
          { title: "Ranked list", value: "ranked-list" },
          { title: "Action plan", value: "action-plan" },
          { title: "Visual chart", value: "chart" },
          { title: "Written summary", value: "summary" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "useCases",
      title: "Best For",
      type: "array",
      group: "content",
      description: "Who gets the most value from this tool.",
      of: [{ type: "string" }],
    }),

    // ── Card & Hub ─────────────────────────────────────────────────────────────
    defineField({
      name: "relatedPosts",
      title: "Related Articles",
      type: "array",
      group: "card",
      description: "Articles to surface alongside this tool.",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: "relatedArsenal",
      title: "Related Arsenal Resources",
      type: "array",
      group: "card",
      of: [{ type: "reference", to: [{ type: "arsenal" }] }],
      validation: (Rule) => Rule.max(2),
    }),

    // ── Settings ──────────────────────────────────────────────────────────────
    defineField({
      name: "isLive",
      title: "Live",
      type: "boolean",
      group: "settings",
      description: "Is the React tool built and accessible at its slug route?",
      initialValue: false,
    }),
    defineField({
      name: "comingSoon",
      title: "Coming Soon",
      type: "boolean",
      group: "settings",
      description: "Show a 'coming soon' badge on the card instead of a live link.",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      group: "settings",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
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
      category: "category",
      isLive: "isLive",
      comingSoon: "comingSoon",
    },
    prepare({ title, category, isLive, comingSoon }: {
      title: string;
      category: string;
      isLive: boolean;
      comingSoon: boolean;
    }) {
      const badge = comingSoon ? "🔜" : isLive ? "✅" : "🔧";
      return {
        title,
        subtitle: `${badge} ${category ?? ""} · ${isLive ? "Live" : comingSoon ? "Coming soon" : "Not built yet"}`,
      };
    },
  },
  orderings: [
    {
      title: "Published Date (newest first)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
