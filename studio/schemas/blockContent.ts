import { defineArrayMember, defineType } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    // ── Standard rich text block ──────────────────────────────────────────────
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        annotations: [
          {
            title: "Link",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
                initialValue: false,
              },
            ],
          },
        ],
      },
    }),

    // ── Callout box ───────────────────────────────────────────────────────────
    defineArrayMember({
      name: "calloutBox",
      type: "object",
      title: "Callout Box",
      fields: [
        {
          name: "type",
          title: "Type",
          type: "string",
          options: {
            list: [
              { title: "ℹ️ Info", value: "info" },
              { title: "⚠️ Warning", value: "warning" },
              { title: "✅ Success", value: "success" },
              { title: "💡 Tip", value: "tip" },
            ],
            layout: "radio",
          },
          initialValue: "info",
        },
        {
          name: "text",
          title: "Content",
          type: "text",
          rows: 3,
        },
        {
          name: "icon",
          title: "Icon (emoji or text)",
          type: "string",
          description: "Optional — override the default icon. E.g. 🚀",
        },
      ],
      preview: {
        select: { type: "type", text: "text" },
        prepare({ type, text }: { type: string; text: string }) {
          const icons: Record<string, string> = {
            info: "ℹ️",
            warning: "⚠️",
            success: "✅",
            tip: "💡",
          };
          return {
            title: `${icons[type] ?? "📌"} ${type?.toUpperCase() ?? "Callout"}`,
            subtitle: text?.slice(0, 80),
          };
        },
      },
    }),

    // ── Pull quote ────────────────────────────────────────────────────────────
    defineArrayMember({
      name: "pullQuote",
      type: "object",
      title: "Pull Quote",
      fields: [
        {
          name: "quote",
          title: "Quote",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required(),
        },
        {
          name: "attribution",
          title: "Attribution",
          type: "string",
          description: "Optional — name/title of the person quoted",
        },
      ],
      preview: {
        select: { quote: "quote", attribution: "attribution" },
        prepare({ quote, attribution }: { quote: string; attribution: string }) {
          return {
            title: `"${quote?.slice(0, 60)}…"`,
            subtitle: attribution ?? "No attribution",
          };
        },
      },
    }),

    // ── Stats block ───────────────────────────────────────────────────────────
    defineArrayMember({
      name: "statsBlock",
      type: "object",
      title: "Stat",
      fields: [
        {
          name: "number",
          title: "Number / Value",
          type: "string",
          description: 'E.g. "3x", "47%", "$2M"',
          validation: (Rule) => Rule.required(),
        },
        {
          name: "label",
          title: "Label",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          rows: 2,
        },
      ],
      preview: {
        select: { number: "number", label: "label" },
        prepare({ number, label }: { number: string; label: string }) {
          return { title: `${number} — ${label}` };
        },
      },
    }),

    // ── Image ─────────────────────────────────────────────────────────────────
    defineArrayMember({
      name: "imageBlock",
      type: "object",
      title: "Image",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          validation: (Rule) => Rule.required(),
        },
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
        {
          name: "size",
          title: "Size",
          type: "string",
          options: {
            list: [
              { title: "Small", value: "small" },
              { title: "Medium", value: "medium" },
              { title: "Large", value: "large" },
              { title: "Full width", value: "full" },
            ],
            layout: "radio",
          },
          initialValue: "large",
        },
      ],
      preview: {
        select: { media: "image", caption: "caption", alt: "alt" },
        prepare({ media, caption, alt }: { media: unknown; caption: string; alt: string }) {
          return { title: caption ?? alt ?? "Image", media };
        },
      },
    }),

    // ── Image gallery ─────────────────────────────────────────────────────────
    defineArrayMember({
      name: "imageGallery",
      type: "object",
      title: "Image Gallery",
      fields: [
        {
          name: "images",
          title: "Images",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "image", type: "image", options: { hotspot: true } },
                { name: "alt", type: "string", title: "Alt text" },
                { name: "caption", type: "string", title: "Caption" },
              ],
            },
          ],
        },
      ],
      preview: {
        select: { images: "images" },
        prepare({ images }: { images: unknown[] }) {
          return { title: `Gallery (${images?.length ?? 0} images)` };
        },
      },
    }),

    // ── Code block ────────────────────────────────────────────────────────────
    defineArrayMember({
      name: "codeBlock",
      type: "object",
      title: "Code Block",
      fields: [
        {
          name: "language",
          title: "Language",
          type: "string",
          description: "E.g. javascript, python, bash, sql",
          initialValue: "javascript",
        },
        {
          name: "code",
          title: "Code",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
      ],
      preview: {
        select: { language: "language", code: "code" },
        prepare({ language, code }: { language: string; code: string }) {
          return { title: `Code — ${language}`, subtitle: code?.slice(0, 60) };
        },
      },
    }),

    // ── Video embed ───────────────────────────────────────────────────────────
    defineArrayMember({
      name: "videoEmbed",
      type: "object",
      title: "Video Embed",
      fields: [
        {
          name: "url",
          title: "Video URL",
          type: "url",
          description: "YouTube, Loom, or Vimeo URL",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
      ],
      preview: {
        select: { url: "url", caption: "caption" },
        prepare({ url, caption }: { url: string; caption: string }) {
          return { title: caption ?? "Video", subtitle: url };
        },
      },
    }),

    // ── Divider ───────────────────────────────────────────────────────────────
    defineArrayMember({
      name: "divider",
      type: "object",
      title: "Divider",
      fields: [
        {
          name: "style",
          title: "Style",
          type: "string",
          hidden: true,
          initialValue: "default",
        },
      ],
      preview: {
        prepare() {
          return { title: "── Divider ──" };
        },
      },
    }),

    // ── CTA Button ────────────────────────────────────────────────────────────
    defineArrayMember({
      name: "ctaButton",
      type: "object",
      title: "CTA Button",
      fields: [
        {
          name: "text",
          title: "Button text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "url",
          title: "URL",
          type: "url",
          validation: (Rule) =>
            Rule.required().uri({ scheme: ["http", "https"] }),
        },
        {
          name: "style",
          title: "Style",
          type: "string",
          options: {
            list: [
              { title: "Primary", value: "primary" },
              { title: "Secondary", value: "secondary" },
            ],
            layout: "radio",
          },
          initialValue: "primary",
        },
      ],
      preview: {
        select: { text: "text", style: "style" },
        prepare({ text, style }: { text: string; style: string }) {
          return { title: `Button: ${text}`, subtitle: style };
        },
      },
    }),

  ],
});
