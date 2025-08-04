import { urlFor } from "@/sanity/lib/image";
import { ProfilePhotoQueryResult } from "@/sanity/sanity.types";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export default function ProfilePhoto({
  large = false,
  photo,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  photo: ProfilePhotoQueryResult[0]["profilePhoto"];
  large?: boolean;
}) {
  const url = photo && urlFor(photo).url();
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src={url || ""}
        alt={photo?.altText || ""}
        sizes={large ? "4rem" : "2.25rem"}
        height={100}
        width={100}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
        priority
      />
    </Link>
  );
}
