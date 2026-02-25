import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    spaces: defineTable({ name: v.string(), icon: v.string(), pinned: v.boolean() }),
    documents: defineTable({ spaceId: v.id("spaces"), parentId: v.optional(v.id("documents")), title: v.string(), content: v.string(), updatedAt: v.string() }).index("by_space", ["spaceId"]).index("by_parent", ["parentId"]),
    comments: defineTable({ documentId: v.id("documents"), text: v.string(), author: v.string(), createdAt: v.string() }).index("by_doc", ["documentId"])
});
