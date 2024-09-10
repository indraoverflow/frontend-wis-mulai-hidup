import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({
  height,
  width,
  className,
}: {
  height?: number;
  width?: number;
  className?: string;
}) {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="mulai hidup logo"
        width={width ?? 120}
        height={height ?? 120}
        className={cn("mx-auto", className)}
      />
    </Link>
  );
}
