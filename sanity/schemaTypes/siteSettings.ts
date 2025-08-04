import { defineField, defineType } from "sanity";
import * as FontAwesomeProBrands from "@awesome.me/kit-a1c88892fb/icons/classic/brands";
import { all } from "@awesome.me/kit-faa82e7f76/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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
    defineField({
      name: "socialMedia",
      title: "Social Media",
      type: "array",
      of: [
        {
          type: "object",
          name: "account",
          fields: [
            defineField({
              type: "string",
              name: "name",
            }),
            defineField({
              type: "url",
              name: "link",
            }),
            defineField({
              name: "text",
              title: "Link Text",
              type: "string",
            }),
            defineField({
              name: "icon",
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
          ],
        },
      ],
    }),
    defineField({
      name: "tinkeringWith",
      title: "Tinkering With",
      type: "object",
      fields: [
        defineField({
          name: "icon",
          title: "Section Icon",
          type: "iconPicker",
          options: {
            storeSvg: true,
            configurations: [
              {
                title: "Font Awesome Pro Brands",
                provider: "fapro-brands",
                icons: (_: any) =>
                  Object.entries(FontAwesomeProBrands).map(([name, icon]) => ({
                    name,
                    component: () =>
                      React.createElement(FontAwesomeIcon, { icon }),
                    tags: [name],
                  })),
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
          name: "tech",
          title: "Technologies",
          type: "array",
          of: [
            {
              type: "object",
              name: "technology",
              title: "Technology",
              fields: [
                defineField({
                  name: "name",
                  title: "Name",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "url",
                  title: "URL",
                  type: "url",
                }),
                defineField({
                  name: "logo",
                  title: "Logo",
                  type: "image",
                  options: {
                    hotspot: true,
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
                  title: "name",
                  media: "logo",
                },
              },
            },
          ],
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
