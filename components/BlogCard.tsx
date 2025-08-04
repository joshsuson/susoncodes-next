import { formatDate } from "@/lib/formatDate";
import { AllBlogPost } from "@/sanity/customTypes";
import { byPrefixAndName } from "@awesome.me/kit-faa82e7f76/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type BlogCardProps = {
  post: AllBlogPost;
};
export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="md:grid md:grid-cols-1 md:items-baseline">
      <div className="group relative flex flex-col items-start md:col-span-3">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <>
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
            <Link href={`/blog/${post.slug?.current}`}>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">{post.title}</span>
            </Link>
          </>
        </h2>
        <p className="mt-1 relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
          {formatDate(post?.publishedAt || "")}
        </p>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {post.excerpt}
        </p>
        <div className="relative z-10 mt-4 flex gap-1 items-center text-sm font-medium text-teal-500">
          Read Blog Post
          <FontAwesomeIcon icon={byPrefixAndName.faslr["arrow-right"]} />
        </div>
      </div>
    </article>
  );
}
