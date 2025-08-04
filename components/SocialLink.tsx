import { SocialMediaQueryResult } from "@/sanity/sanity.types";
import InlineSVG from "react-inlinesvg";

export default function SocialLink({
  account,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  account: NonNullable<SocialMediaQueryResult[0]["socialMedia"]>[0];
}) {
  return (
    <a className="group -m-1 p-1" href={account.link} {...props}>
      <InlineSVG
        src={account?.icon?.svg || ""}
        className="h-8 w-8 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300"
      />
    </a>
  );
}
