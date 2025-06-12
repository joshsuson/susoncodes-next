import { type SchemaTypeDefinition } from "sanity";
import { homePageType } from "./homePage";
import { galleryPhotoType } from "./galleryPhoto";
import { siteSettingsType } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePageType, galleryPhotoType, siteSettingsType],
};
