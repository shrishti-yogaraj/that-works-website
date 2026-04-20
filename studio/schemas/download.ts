import { defineField, defineType } from "sanity";

// Each document = one downloadable file.
// Buttons anywhere on the site reference a download by its slug.
// No need to add file fields to other schemas — just create a new document here.
export const download = defineType({
  name: "download",
  title: "Downloads",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'Internal name. E.g. "GTM Guide", "ICP Canvas PDF"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "Used by front-end buttons to look up this file. Do not change after a button is live.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "file",
      title: "File (PDF)",
      type: "file",
      options: { accept: ".pdf,.csv,.xlsx,.docx" },
      description: "Upload the file. Replacing it here updates every button that references this slug instantly.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "filename",
      title: "Download filename",
      type: "string",
      description: 'What the file saves as on the user\'s device. E.g. "that-works-gtm-guide.pdf"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Optional. Internal note about what this file is.",
    }),
  ],

  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare({ title, slug }: { title: string; slug: string }) {
      return { title, subtitle: slug ? `slug: ${slug}` : "no slug set" };
    },
  },
});
