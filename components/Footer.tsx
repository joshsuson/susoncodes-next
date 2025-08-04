import { Container } from "./Container";
import Link from "next/link";

const navigation = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Blog", url: "/blog" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 flex-none">
      <Container footer={true}>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            {navigation.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="transition hover:text-teal-500 dark:hover:text-teal-400"
              >
                {page.title}
              </Link>
            ))}
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {currentYear} Josh Suson. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
