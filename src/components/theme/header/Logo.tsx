import { cn } from "@/lib/utils/tailwind-util";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex justify-center items-center  border rounded-full  p-1 w-[104px] h-[104px] ", className)}>
        <h5 className="text-3xl">
            {title}
        </h5>
    </div>
  );
}
