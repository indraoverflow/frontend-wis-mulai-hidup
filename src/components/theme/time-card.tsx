import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

interface TimeCardProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function TimeCard({
  title,
  subtitle,
  className,
}: TimeCardProps) {
  return (
    <Card
      className={cn(
        "rounded-[100px] text-white bg-phthalo-green",
        className
      )}
    >
      <div className="px-4 md:px-11 py-6 md:py-8 text-center">
        <h5 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-3">
          {title}
        </h5>
        <p className="text-xl md:text-3xl">{subtitle}</p>
      </div>
    </Card>
  );
}
