import { defineField, defineType } from "sanity";
import * as FontAwesomeProBrands from "@awesome.me/kit-a1c88892fb/icons/classic/brands";
import { all } from "@awesome.me/kit-faa82e7f76/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aboutPhoto",
      title: "About Photo",
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
    defineField({
      name: "content",
      title: "About Content",
      type: "text",
      rows: 10,
    }),
    defineField({
      name: "rulesForBuilding",
      title: "Rules for Building",
      type: "array",
      of: [
        {
          type: "object",
          name: "rule",
          title: "Rule",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "iconPicker",
              options: {
                storeSvg: true,
                configurations: [
                  {
                    title: "Font Awesome Pro Brands",
                    provider: "fapro-brands",
                    icons: (_: any) =>
                      Object.entries(FontAwesomeProBrands).map(
                        ([name, icon]) => ({
                          name,
                          component: () =>
                            React.createElement(FontAwesomeIcon, { icon }),
                          tags: [name],
                        })
                      ),
                  },
                  {
                    title: "Font Awesome Slab",
                    provider: "faplus-slab",
                    icons: (_: any) =>
                      Object.entries(all).map(([name, icon]) => ({
                        name,
                        component: () =>
                          React.createElement(FontAwesomeIcon, { icon }),
                        tags: [name],
                      })),
                  },
                ],
              },
            }),
            defineField({
              name: "enabled",
              title: "Enabled",
              type: "boolean",
              initialValue: true,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About Page",
      };
    },
  },
});
