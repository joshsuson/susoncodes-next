import DesktopNavItem from "./DesktopNavItem";

export default function DesktopNav(
  props: React.ComponentPropsWithoutRef<"nav">
) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <DesktopNavItem href="/about">About</DesktopNavItem>
        <DesktopNavItem href="/blog">Blog</DesktopNavItem>
        <DesktopNavItem href="/uses">Uses</DesktopNavItem>
      </ul>
    </nav>
  );
}
