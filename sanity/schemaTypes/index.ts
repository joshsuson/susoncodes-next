import { type SchemaTypeDefinition } from "sanity";
import { homePageType } from "./homePage";
import { galleryPhotoType } from "./galleryPhoto";
import { siteSettingsType } from "./siteSettings";
import { aboutPageType } from "./aboutPage";
import { blogPostType } from "./blogPost";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageType, galleryPhotoType, siteSettingsType, aboutPageType, blogPostType],
};
