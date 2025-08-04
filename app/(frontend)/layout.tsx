import { client } from "@/sanity/lib/client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { profilePhotoQuery } from "@/sanity/sanity.queries";

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await client.fetch(profilePhotoQuery);
  const { profilePhoto } = siteSettings[0];
  return (
    <div className="flex min-h-full bg-zinc-50 dark:bg-black">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header profilePhoto={profilePhoto} />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
