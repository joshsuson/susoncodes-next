import { siteSettingsQuery } from "@/sanity/sanity.queries";
import { client } from "@/sanity/lib/client";
export default async function Header() {
  const siteSettings = await client.fetch(siteSettingsQuery);
  console.log(siteSettings);
  return (
    <header>
      <span>Josh Suson</span>
    </header>
  );
}
