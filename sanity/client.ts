import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "a6lfpaut",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
