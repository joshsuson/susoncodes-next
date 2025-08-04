import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { homePageQuery } from "@/sanity/sanity.queries";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default async function PhotoGallery() {
  const homePage = await client.fetch(homePageQuery);
  const { gallery } = homePage[0] || {};

  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      {gallery?.map((photo, index) => (
        <div
          key={photo.photo?.asset?._ref || index}
          className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
        >
          <img
            src={urlFor(photo.photo as SanityImageSource)
              .width(288)
              .height(320)
              .fit("crop")
              .url()}
            alt={photo.altText || ""}
            className="object-cover absolute inset-0 h-full w-full"
          />
        </div>
      ))}
    </div>
  );
}
