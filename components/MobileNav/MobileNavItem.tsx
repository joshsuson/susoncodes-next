import { PopoverButton } from "@headlessui/react";
import Link from "next/link";

type MobileNavItemProps = {
  href: string;
  children: React.ReactNode;
};

export default function MobileNavItem({ href, children }: MobileNavItemProps) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  );
}
