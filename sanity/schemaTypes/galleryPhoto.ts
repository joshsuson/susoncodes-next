import { defineField, defineType } from "sanity";

export const galleryPhotoType = defineType({
  name: "galleryPhoto",
  type: "document",
  title: "Gallery Photos",
  fields: [
    defineField({
      name: "altText",
      title: "Alt Text",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
