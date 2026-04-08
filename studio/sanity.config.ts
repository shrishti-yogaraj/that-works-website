import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "that-works",
  title: "That Works",
  projectId: "nb3xydcz",
  dataset: "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Blog Posts")
              .schemaType("post")
              .child(S.documentTypeList("post").title("Blog Posts")),
            S.divider(),
            S.listItem()
              .title("Authors")
              .schemaType("author")
              .child(S.documentTypeList("author").title("Authors")),
            S.listItem()
              .title("Categories")
              .schemaType("category")
              .child(S.documentTypeList("category").title("Categories")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
