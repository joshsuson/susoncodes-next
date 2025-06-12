import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "profilePhoto",
      title: "Profile Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "altText",
          type: "string",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});
