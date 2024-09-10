import { mutation } from "@/../convex/_generated/server";
import { query } from "@/../convex/_generated/server";
import { v } from "convex/values";

export const addExpertise = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    image: v.string(),
  },
  handler: async (ctx, { title, description, image }) => {
    const result = await ctx.db.insert("expertise", {
      title,
      description,
      image,
    });
    return result;
  },
});

export const addProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    images: v.array(v.string()),
  },
  handler: async (ctx, { title, description, images }) => {
    const result = await ctx.db.insert("projects", {
      title,
      description,
      images,
    });
    return result;
  },
});

export const getExpertise = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("expertise").collect();
  },
});

export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});
