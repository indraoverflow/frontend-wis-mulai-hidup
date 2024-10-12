import { cn } from "@/lib/utils/tailwind-util";
import React from "react";

export default function ErrorMessage({
  error,
  className,
}: {
  error?: string;
  className?: string;
}) {
  return <p className={cn("text-red-400 text-sm", className)}>{error}</p>;
}
