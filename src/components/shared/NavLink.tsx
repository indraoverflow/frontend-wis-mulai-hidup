"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  label,
  route,
}: {
  label: string;
  route: string;
}) {
  const path = usePathname();
  return (
    <Link href={route}>
      <li
        className={cn(
          "p-2 text-sm lg:text-base border-b border-b-black md:border-b-0 ",
          path === route && "lg:border-b"
        )}
      >
        {label}
      </li>
    </Link>
  );
}
