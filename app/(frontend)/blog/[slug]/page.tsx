import { Container } from "@/components/Container";
import { client } from "@/sanity/lib/client";
import { blogPostBySlugQuery } from "@/sanity/sanity.queries";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import type { PortableTextBlock } from "sanity";
import { formatDate } from "@/lib/formatDate";

export default async function BlogIndexPage({ params }: { params: any }) {
  const post = await client.fetch(blogPostBySlugQuery, { slug: params.slug });

  if (!post) {
    notFound();
  }

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <article>
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              {post.title}
            </h1>
            <time
              dateTime={post.publishedAt || ""}
              className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
              <span className="ml-3">{formatDate(post.publishedAt || "")}</span>
            </time>
          </header>
          <div className="mt-8 prose dark:prose-invert">
            <PortableText value={post.content as PortableTextBlock[]} />
          </div>
        </article>
      </div>
    </Container>
  );
}
