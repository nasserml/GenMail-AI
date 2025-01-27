import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const SaveTemplate = mutation({
  args: {
    tid: v.string(),
    design: v.any(),
    email: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const result = await ctx.db.insert('emailTemplates', {
        tid: args.tid,
        design: args.design,
        email: args.email,
        description: args.description,
      });
      return result;
    } catch (error) {
      console.log(error);
      return {};
    }
  },
});

export const GetTemplateDesign = query({
  args: {
    email: v.string(),
    tid: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const result = await ctx.db
        .query('emailTemplates')
        .filter((q) => q.eq(q.field('tid'), args.tid))
        .collect();

      return result[0];
    } catch (error) {
      console.log(error);
      return {};
    }
  },
});

export const UpdateTemplateDesign = mutation({
  args: {
    tid: v.string(),
    design: v.any(), // Email Template Design
  },
  handler: async (ctx, args) => {
    try {
      // Get Doc Id
      const result = await ctx.db
        .query('emailTemplates')
        .filter((q) => q.eq(q.field('tid'), args.tid))
        .collect();

      const docId = result[0]._id;

      console.log(docId)

      // Update The doc Id
      await ctx.db.patch(docId, {
        design:args.design
      })
    } catch (error) {
      console.log(error)
      return {}
    }
  },
});
