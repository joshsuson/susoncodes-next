import { Slug } from "sanity";

export type AllBlogPost = {
  title: string | null;
  slug: Slug | null;
  publishedAt: string | null;
  excerpt: string | null;
  author: string | null;
};
