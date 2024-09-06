import { cn } from "@/lib/utils";
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
