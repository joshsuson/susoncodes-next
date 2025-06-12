import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slugline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "galleryPhoto" }],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
      };
    },
  },
});
