import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "nb3xydcz",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // CDN-backed reads — fast for published content
});

// Image URL helper
export function sanityImageUrl(ref: string): string {
  // Format: image-{id}-{width}x{height}-{format}
  const [, id, dimensions, format] = ref.split("-");
  const [width, height] = dimensions?.split("x") ?? ["800", "600"];
  return `https://cdn.sanity.io/images/nb3xydcz/production/${id}-${width}x${height}.${format}`;
}

// File URL helper — converts a Sanity file asset _ref to a CDN download URL.
// Ref format: file-{assetId}-{extension}  e.g. file-abc123def456-pdf
export function sanityFileUrl(ref: string): string {
  const parts = ref.split("-"); // ["file", assetId, extension]
  const extension = parts[parts.length - 1];
  const assetId = parts.slice(1, -1).join("-");
  return `https://cdn.sanity.io/files/nb3xydcz/production/${assetId}.${extension}`;
}
