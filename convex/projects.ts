import { mutation } from "./_generated/server";
import { query } from "./_generated/server";
import { v } from "convex/values";

export const addProject = mutation({
  args: {
    projectTitle: v.string(),
    projectDescription: v.string(),
    projectImages: v.array(v.string()),
  },
  handler: async (ctx, { projectTitle, projectDescription, projectImages }) => {
    const result = await ctx.db.insert("projects", {
      projectTitle,
      projectDescription,
      projectImages,
    });
    return result;
  },
});

export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});

export const deleteProjects = mutation({
  args: {
    id: v.id("projects"), // expects an ID of the expertise entry to delete
  },
  handler: async (ctx, { id }) => {
    // Deletes an expertise entry by its ID
    await ctx.db.delete(id);
    return { success: true };
  },
});

export const getProjectById = query({
  args: {
    id: v.id("projects"),
  },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});