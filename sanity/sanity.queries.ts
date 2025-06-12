import { defineQuery } from "next-sanity";

export const homePageQuery = defineQuery(`*[_type == 'homePage']{
      ...,
      gallery[] -> {
        photo,
        altText
      }
    }`);

export const siteSettingsQuery = defineQuery(`*[_type == 'siteSettings']{
  profilePhoto
}`);
