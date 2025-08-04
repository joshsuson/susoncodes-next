import { client } from "@/sanity/lib/client";
import {
  homePageQuery,
  blogPostsQuery,
  siteSettingsQuery,
} from "@/sanity/sanity.queries";
import { Container } from "../../components/Container";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import PhotoGallery from "@/components/PhotoGallery";
import { urlFor } from "@/sanity/lib/image";
import InlineSVG from "react-inlinesvg";
import Link from "next/link";

export default async function Home() {
  const homePage = await client.fetch(homePageQuery);
  const blogPosts = await client.fetch(blogPostsQuery);
  const siteSettings = await client.fetch(siteSettingsQuery);

  const { headline, bio } = homePage[0] || {};

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {headline || "Code is a way for me to leave something good behind"}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {bio ||
              "My name is Josh Suson. I'm a programmer in Concord, North Carolina. I'm a husband and dad of five kids. Everything I do I try to do for the glory of Christ. I see programming and coding as a craft and it's a craft that I love. I have a deep desire to use this craft to build software that might outlive me. It should be built to serve people, shaped to last, and worth leaving behind."}
          </p>
          <SocialMediaLinks />
        </div>
      </Container>

      {/* Photo Gallery */}
      <div className="mt-16 sm:mt-20">
        <PhotoGallery />
      </div>

      {/* Blog Posts and Newsletter Section */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/* Blog Posts */}
          <div className="flex flex-col gap-16">
            {blogPosts?.map((post) => (
              <article
                className="group relative flex flex-col items-start"
                key={post.slug?.current}
              >
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                  <Link href={`/blog/${post.slug?.current}`}>
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                    <span className="relative z-10">{post.title}</span>
                  </Link>
                </h2>
                <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                  <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  </span>
                  {post.publishedAt &&
                    new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
                <div
                  aria-hidden="true"
                  className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                >
                  Read More
                  <svg
                    className="ml-1 h-4 w-4 stroke-current"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m5.25 8.25 3 3 3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar with Newsletter and Tinkering */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* Newsletter Signup */}
            <form className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Stay up to date
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Get notified when I publish something new and unsubscribe at any
                time.
              </p>
              <div className="mt-6 flex items-center">
                <span className="flex min-w-0 flex-auto p-px">
                  <input
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    required
                    className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
                  />
                </span>
                <button
                  className="ml-4 flex-none inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
                  type="submit"
                >
                  Join
                </button>
              </div>
            </form>

            {/* Tinkering With Section */}
            {siteSettings?.tinkeringWith && (
              <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {siteSettings.tinkeringWith.icon && (
                    <InlineSVG
                      src={siteSettings.tinkeringWith.icon.svg || ""}
                      className="flex-none h-4 w-4"
                    />
                  )}
                  <span className="ml-3">Currently Tinkering With:</span>
                </h2>
                <ol className="mt-6 space-y-4">
                  {siteSettings.tinkeringWith.tech
                    ?.filter((tech) => tech.enabled)
                    .map((tech, index) => (
                      <li className="flex items-center gap-4" key={index}>
                        <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          {tech.logo && (
                            <img
                              src={urlFor(tech.logo)
                                .width(40)
                                .height(40)
                                .fit("crop")
                                .url()}
                              alt={tech.name}
                              className="h-7 w-7 rounded-full"
                            />
                          )}
                        </div>
                        <dl className="flex flex-auto items-center justify-between">
                          <div>
                            <dt className="sr-only">Technology</dt>
                            <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              {tech.name}
                            </dd>
                          </div>
                          {tech.url && (
                            <div className="flex items-center">
                              <a
                                href={tech.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
                              >
                                <span>Check it out</span>
                                <span>
                                  <svg
                                    className="h-3 w-3"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </a>
                            </div>
                          )}
                        </dl>
                      </li>
                    ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
