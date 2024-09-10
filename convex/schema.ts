import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  expertise: defineTable({
    title: v.string(),
    description: v.string(),
    image: v.string(), // This assumes image is stored as URL or file path. Adjust it as per your implementation
  }),
  projects: defineTable({
    projectTitle: v.string(),
    projectDescription: v.string(),
    projectImages: v.array(v.string()), // This assumes images are stored as array of URLs or file paths. Adjust it as per your implementation
  }),
});