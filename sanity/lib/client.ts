import { createClient } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

export const sanityClient = createClient({
  projectId: projectId ?? "",
  dataset,
  apiVersion,
  useCdn: false,
});

export const readClient = createClient({
  projectId: projectId ?? "",
  dataset,
  apiVersion,
  useCdn: true,
});
