import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", initialValue: "Home" }),
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "aboutPreviewTitle", title: "About Preview Title", type: "string" }),
    defineField({ name: "aboutPreviewText", title: "About Preview Text", type: "text" }),
    defineField({
      name: "featuredEvents",
      title: "Featured Events",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "event" }] })],
    }),
    defineField({
      name: "teamPreview",
      title: "Team Preview",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "teamMember" }] })],
    }),
    defineField({
      name: "galleryPreview",
      title: "Gallery Preview",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "gallery" }] })],
    }),
    defineField({ name: "ctaText", title: "CTA Text", type: "string" }),
    defineField({ name: "ctaLink", title: "CTA Link", type: "string" }),
  ],
});
