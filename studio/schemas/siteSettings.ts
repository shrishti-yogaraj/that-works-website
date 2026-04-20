import { defineType } from "sanity";

// Singleton — one document only. For site-wide configuration that doesn't belong
// to any content type. Downloads are managed separately via the Downloads document type.
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
