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
            // ── Hub control ──────────────────────────────────────────────────
            S.listItem()
              .title("Hub Settings")
              .id("hubSettings")
              .child(
                S.document()
                  .schemaType("hubSettings")
                  .documentId("hubSettings")
                  .title("Hub Settings")
              ),
            S.divider(),

            // ── Content types ─────────────────────────────────────────────────
            S.listItem()
              .title("Articles")
              .schemaType("post")
              .child(S.documentTypeList("post").title("Articles")),
            S.listItem()
              .title("Dissections")
              .schemaType("dissection")
              .child(S.documentTypeList("dissection").title("Dissections")),
            S.listItem()
              .title("Arsenal")
              .schemaType("arsenal")
              .child(S.documentTypeList("arsenal").title("Arsenal")),
            S.listItem()
              .title("Lab")
              .schemaType("labItem")
              .child(S.documentTypeList("labItem").title("Lab")),
            S.listItem()
              .title("Downloads")
              .schemaType("download")
              .child(S.documentTypeList("download").title("Downloads")),
            S.divider(),

            // ── Reference data ────────────────────────────────────────────────
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
