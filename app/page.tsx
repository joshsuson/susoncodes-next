import { client } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/sanity.queries";

export default async function Home() {
  const homePage = await client.fetch(homePageQuery);
  const { headline, slugline } = homePage[0];
  console.log(homePage);
  return (
    <div>
      <h1>{headline}</h1>
      <h2>{slugline}</h2>
    </div>
  );
}
