import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", initialValue: "About" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "introduction", title: "Introduction", type: "text" }),
    defineField({ name: "aboutIETE", title: "About IETE", type: "text" }),
    defineField({ name: "aboutIETESFIT", title: "About IETE SFIT", type: "text" }),
    defineField({ name: "vision", title: "Vision", type: "text" }),
    defineField({ name: "mission", title: "Mission", type: "text" }),
    defineField({ name: "images", title: "Images", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
  ],
});
