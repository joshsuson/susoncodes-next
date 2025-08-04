import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Home Page")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("About Page")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      ...S.documentTypeListItems()
        .filter((listItem) => !["homePage"].includes(listItem.getId() || ""))
        .filter(
          (listItem) => !["siteSettings"].includes(listItem.getId() || "")
        )
        .filter(
          (listItem) => !["aboutPage"].includes(listItem.getId() || "")
        ),
    ]);
