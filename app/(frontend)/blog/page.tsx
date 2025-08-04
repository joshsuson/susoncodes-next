import BlogCard from "@/components/BlogCard";
import { Container } from "@/components/Container";
import { AllBlogPost } from "@/sanity/customTypes";
import { client } from "@/sanity/lib/client";
import { allBlogPostsQuery } from "@/sanity/sanity.queries";

export default async function BlogPage() {
  const posts = await client.fetch(allBlogPostsQuery);
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Writing on making software, coding as a craft, and how to use tech to
          better your life.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Here you'll find all my thoughts about technology, programming, and
          how those things can impact your life for good.
        </p>
      </div>
      <div className="mt-16 sm:mt-20">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post) => (
            <BlogCard
              key={`${post.slug} - ${post.publishedAt}`}
              post={post as AllBlogPost}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
