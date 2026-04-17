import { defineField, defineType } from "sanity";

// Singleton — only one document of this type should ever exist.
// In Sanity Studio structure, this is surfaced as a top-level menu item, not a list.
export const hubSettings = defineType({
  name: "hubSettings",
  title: "Hub Settings",
  type: "document",
  groups: [
    { name: "featured", title: "Featured Content", default: true },
    { name: "newHot", title: "New & Hot" },
  ],
  fields: [
    // ── Featured content (controls hero slots on the hub) ─────────────────────
    defineField({
      name: "featuredArticle",
      title: "Featured Article",
      type: "reference",
      to: [{ type: "post" }],
      group: "featured",
      description: "The large lead article shown centre-stage on the hub.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredDissection",
      title: "Featured Dissection",
      type: "reference",
      to: [{ type: "dissection" }],
      group: "featured",
      description: "The dissection shown in the dark banner section.",
    }),
    defineField({
      name: "featuredArsenal",
      title: "Featured Arsenal Resource",
      type: "reference",
      to: [{ type: "arsenal" }],
      group: "featured",
      description: "The tool/template shown in the left column tool card.",
    }),
    defineField({
      name: "featuredLabItem",
      title: "Featured Lab Tool",
      type: "reference",
      to: [{ type: "labItem" }],
      group: "featured",
      description: "The lab diagnostic shown alongside the featured arsenal resource.",
    }),

    // ── New & Hot column ──────────────────────────────────────────────────────
    defineField({
      name: "newAndHot",
      title: "New & Hot Items",
      type: "array",
      group: "newHot",
      description: "Up to 5 items shown in the right-hand 'New & Hot' column. Mix of articles, dissections, arsenal and lab. Drag to reorder.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "contentType",
              title: "Content Type",
              type: "string",
              options: {
                list: [
                  { title: "Article", value: "post" },
                  { title: "Dissection", value: "dissection" },
                  { title: "Arsenal", value: "arsenal" },
                  { title: "Lab", value: "labItem" },
                ],
                layout: "radio",
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "article",
              title: "Article",
              type: "reference",
              to: [{ type: "post" }],
              hidden: ({ parent }: { parent: { contentType?: string } }) =>
                parent?.contentType !== "post",
            },
            {
              name: "dissection",
              title: "Dissection",
              type: "reference",
              to: [{ type: "dissection" }],
              hidden: ({ parent }: { parent: { contentType?: string } }) =>
                parent?.contentType !== "dissection",
            },
            {
              name: "arsenal",
              title: "Arsenal Resource",
              type: "reference",
              to: [{ type: "arsenal" }],
              hidden: ({ parent }: { parent: { contentType?: string } }) =>
                parent?.contentType !== "arsenal",
            },
            {
              name: "labItem",
              title: "Lab Tool",
              type: "reference",
              to: [{ type: "labItem" }],
              hidden: ({ parent }: { parent: { contentType?: string } }) =>
                parent?.contentType !== "labItem",
            },
          ],
          preview: {
            select: {
              contentType: "contentType",
              articleTitle: "article.title",
              dissectionTitle: "dissection.title",
              arsenalTitle: "arsenal.title",
              labTitle: "labItem.title",
            },
            prepare(values: Record<string, string>) {
              const { contentType, articleTitle, dissectionTitle, arsenalTitle, labTitle } = values;
              const typeLabels: Record<string, string> = {
                post: "Article",
                dissection: "Dissection",
                arsenal: "Arsenal",
                labItem: "Lab",
              };
              const title = articleTitle ?? dissectionTitle ?? arsenalTitle ?? labTitle ?? "—";
              return {
                title,
                subtitle: typeLabels[contentType] ?? contentType,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(5),
    }),
  ],

  preview: {
    prepare() {
      return { title: "Hub Settings" };
    },
  },
});
