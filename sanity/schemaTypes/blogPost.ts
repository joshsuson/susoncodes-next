import {defineField, defineType} from "sanity";

export const blogPostType = defineType({
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        {title: "Normal", value: "normal"},
                        {title: "H1", value: "h1"},
                        {title: "H2", value: "h2"},
                        {title: "H3", value: "h3"},
                        {title: "H4", value: "h4"},
                        {title: "Quote", value: "blockquote"},
                    ],
                    lists: [
                        {title: "Bullet", value: "bullet"},
                        {title: "Numbered", value: "number"},
                    ],
                    marks: {
                        decorators: [
                            {title: "Strong", value: "strong"},
                            {title: "Emphasis", value: "em"},
                            {title: "Code", value: "code"},
                        ],
                        annotations: [
                            {
                                title: "URL",
                                name: "link",
                                type: "object",
                                fields: [
                                    {
                                        title: "URL",
                                        name: "href",
                                        type: "url",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: "image",
                    options: {hotspot: true},
                },
            ],
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "string",
            initialValue: "Josh Suson",
        }),
    ],
    preview: {
        select: {
            title: "title",
            date: "publishedAt",
        },
        prepare({title, date}) {
            return {
                title,
                subtitle: date ? new Date(date).toLocaleDateString() : "No date",
            };
        },
    },
    orderings: [
        {
            title: "Published Date, New",
            name: "publishedAtDesc",
            by: [{field: "publishedAt", direction: "desc"}],
        },
        {
            title: "Published Date, Old",
            name: "publishedAtAsc",
            by: [{field: "publishedAt", direction: "asc"}],
        },
    ],
});
