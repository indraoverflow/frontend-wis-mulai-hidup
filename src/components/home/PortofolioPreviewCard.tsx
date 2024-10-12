import React from "react";
import { Card, CardContent, CardDescription } from "../ui/card";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { cn } from "@/lib/utils/tailwind-util";
import { minervaModern } from "@/lib/fonts";

type Props = {
  image: number;
};

export default function PortofolioPreviewCard({ image = 1 }: Props) {
  return (
    <Card className="flex flex-col p-0 pb-12 gap-y-12">
      <CardContent className="p-0 object-cover overflow-hidden ">
        {" "}
        <Image
          src={`/images/template/template-${image}.png`}
          alt={`portofolio ${image}`}
          width={398}
          height={370}
        />
      </CardContent>
      <CardDescription
        className={cn(
          "mx-10  text-center border-b border-b-black text-lg md:text-3xl xl:text-5xl",
          minervaModern.className
        )}
      >
        Azka & Zelda
      </CardDescription>
    </Card>
  );
}
