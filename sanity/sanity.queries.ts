import { defineQuery } from "next-sanity";

export const homePageQuery = defineQuery(`*[_type == 'homePage']{
      ...,
      gallery[] -> {
        photo,
        altText
      }
    }`);

export const profilePhotoQuery = defineQuery(`*[_type == 'siteSettings']{
  profilePhoto
}`);

export const socialMediaQuery = defineQuery(`*[_type == 'siteSettings']{
  socialMedia
}`);

export const aboutPageQuery = defineQuery(`*[_type == 'aboutPage'][0]{
  headline,
  aboutPhoto,
  content,
  rulesForBuilding[enabled == true]{
    title,
    description,
    icon,
    enabled
  }
}`);

export const blogPostsQuery = defineQuery(`*[_type == 'blogPost'] | order(publishedAt desc)[0...3]{
  title,
  slug,
  publishedAt,
  excerpt
}`);

export const allBlogPostsQuery = defineQuery(`*[_type == 'blogPost'] | order(publishedAt desc){
  title,
  slug,
  publishedAt,
  excerpt,
  author
}`);

export const blogPostBySlugQuery = defineQuery(`*[_type == 'blogPost' && slug.current == $slug][0]{
  title,
  slug,
  publishedAt,
  excerpt,
  content,
  author
}`);

export const siteSettingsQuery = defineQuery(`*[_type == 'siteSettings'][0]{
  tinkeringWith
}`);
