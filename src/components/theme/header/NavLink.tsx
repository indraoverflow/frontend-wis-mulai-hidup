"use client";

import { cn } from "@/lib/utils/tailwind-util";
import { tr } from "date-fns/locale";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  label,
  route,
  darkTheme = true,
}: {
  label: string;
  route: string;
  darkTheme?: boolean;
}) {
  const path = usePathname();
  return (
    <Link href={route}>
      <li
        className={cn(
          "p-2 text-sm lg:text-base border-b  md:border-b-0 ",
          path === route && "lg:border-b",
          darkTheme ? "border-b-white" : "border-b-raisin-black",
        )}
      >
        {label}
      </li>
    </Link>
  );
}
