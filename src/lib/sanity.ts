import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "nb3xydcz",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // CDN-backed reads — fast for published content
});

// Image URL helper (used when we add featuredImage support)
export function sanityImageUrl(ref: string): string {
  // Format: image-{id}-{width}x{height}-{format}
  const [, id, dimensions, format] = ref.split("-");
  const [width, height] = dimensions?.split("x") ?? ["800", "600"];
  return `https://cdn.sanity.io/images/nb3xydcz/production/${id}-${width}x${height}.${format}`;
}
