import { client } from "@/sanity/lib/client";
import { socialMediaQuery } from "@/sanity/sanity.queries";
import SocialLink from "./SocialLink";
import { Fragment } from "react";

export default async function SocialMediaLinks() {
  const socialMediaResponse = await client.fetch(socialMediaQuery);
  const { socialMedia } = socialMediaResponse[0];
  return (
    <div className="mt-6 flex gap-6">
      {socialMedia &&
        socialMedia.map((account) => {
          return (
            <Fragment key={account._key}>
              {account && <SocialLink key={account._key} account={account} />}
            </Fragment>
          );
        })}
    </div>
  );
}
