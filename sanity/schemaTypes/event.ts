import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text" }),
    defineField({ name: "description", title: "Full Description", type: "text" }),
    defineField({ name: "eventDate", title: "Event Date", type: "date" }),
    defineField({ name: "startTime", title: "Start Time", type: "string" }),
    defineField({ name: "endTime", title: "End Time", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "galleryImages", title: "Gallery Images", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "registrationLink", title: "Registration Link", type: "url" }),
    defineField({ name: "eventType", title: "Event Type", type: "string", options: { list: ["Workshop", "Talk", "Event", "Seminar", "Contest"] } }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["draft", "published", "upcoming", "completed"] },
      initialValue: "draft",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "eventDate" },
  },
});
