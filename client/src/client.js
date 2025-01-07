import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "sanity course",
  dataset: "production",
  apiVersion: "2022-11-22",
  useCdn: true,
});

export default client;
