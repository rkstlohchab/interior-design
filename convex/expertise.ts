import { mutation } from "./_generated/server";
import { query } from "./_generated/server";
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

export const getExpertise = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("expertise").collect();
  },
});

export const deleteExpertise = mutation({
  args: {
    id: v.id("expertise"), // expects an ID of the expertise entry to delete
  },
  handler: async (ctx, { id }) => {
    // Deletes an expertise entry by its ID
    await ctx.db.delete(id);
    return { success: true };
  },
});

export const getExpertiseById = query({
  args: {
    id: v.id("expertise"),
  },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});