import { mutation } from "./_generated/server";
import { query } from "./_generated/server";
import { v } from "convex/values";

export const addBlog = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    image: v.string(),
  },
  handler: async (ctx, { title, description, image }) => {
    const result = await ctx.db.insert("blog", {
      title,
      description,
      image,
    });
    return result;
  },
});

export const getBlog = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("blog").collect();
  },
});

export const deleteBlog = mutation({
  args: {
    id: v.id("blog"), // expects an ID of the Blog entry to delete
  },
  handler: async (ctx, { id }) => {
    // Deletes an Blog entry by its ID
    await ctx.db.delete(id);
    return { success: true };
  },
});

export const getBlogById = query({
  args: {
    id: v.id("blog"),
  },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});