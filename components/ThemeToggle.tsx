import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-faa82e7f76/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Swith to ${otherTheme} theme` : "Toggle theme"}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <FontAwesomeIcon
        icon={byPrefixAndName.faslr["sun"]}
        className="!h-6 !w-6 text-zinc-100 transition group-hover:text-zinc-200 dark:!hidden [@media(prefers-color-scheme:dark)]:text-teal-200 [@media(prefers-color-scheme:dark)];group-hover:text-teal-200"
      />
      <FontAwesomeIcon
        icon={byPrefixAndName.faslr["moon"]}
        className="!hidden !h-6 !w-6 text-zinc-700  transition not-[@media_(prefers-color-scheme:dark)]:text-teal-400/10  dark:!block [@media(prefers-color-scheme:dark)]:group-hover:text-zinc-400"
      />
    </button>
  );
}
