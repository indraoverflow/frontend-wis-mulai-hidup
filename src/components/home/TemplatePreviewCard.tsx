import React from "react";
import { Card, CardContent } from "../ui/card";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { cn } from "@/lib/utils/tailwind-util";
import Link from "next/link";

type Props = {
  image: number;
};

export default function TemplatePreviewCard({ image = 1 }: Props) {
  return (
    <Card className="flex flex-col p-6 md:p-9 lg:p-6 xl:p-9 gap-y-[14px] w-full">
      <CardContent className="p-0 flex justify-center">
        <Image
          src={`/images/template/template-${image}.png`}
          alt={`template ${image}`}
          width={320}
          height={370}
        />
      </CardContent>
      <CardContent className="flex items-end justify-between p-0 border-b border-b-black">
        <div>
          <p className="text-[21px]">Basic {image}</p>
          <p className="text-[21px]">Bohemian</p>
        </div>
        <Link
          href={`/theme/${image > 4 ? 1 : image}`}
          className={cn(
            "flex justify-center items-center m-2 rounded-full border border-black h-7 w-7"
          )}
        >
          <GoArrowUpRight className="w-5 h-5" />
        </Link>
      </CardContent>
    </Card>
  );
}
