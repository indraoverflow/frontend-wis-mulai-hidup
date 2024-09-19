import PortofolioPreviewCard from "@/components/home/PortofolioPreviewCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { minervaModern } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function page() {
  return (
    <main className="relative flex flex-col items-center justify-center gap-6 md:gap-24 md:py-24  bg-surface">
      <section className="flex flex-col items-center justify-start gap-4 md:gap-8 px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
        <h1
          className={cn(
            "text-3xl lg:text-5xl text-center py-0",
            minervaModern.className
          )}
        >
          PORTOFOLIO
        </h1>
        <p
          className={cn(
            "text-lg lg:text-[40px] text-center tracking-wide  leading-tight max-w-[1034px] px-4 lg:px-32  mb-2 md:mb-4 -mt-2 lg:mt-0",
            minervaModern.className
          )}
        >
          Lihat contoh pasangan yang sudah menjadi client kami
        </p>

        <Button
          variant={"outline"}
          className="flex gap-2 py-2 md:py-4 pl-4 pr-5 bg-white rounded"
        >
          <FiArrowUpRight className="w-5 h-5" />
          Mulai Sekarang
        </Button>
      </section>
      <section className="grid grid-cols-1  gap-5 px-5 mx-auto mb-16 md:grid-cols-2 lg:grid-cols-3 max-w-desktop lg:px-20 bg-blue xl:px-[100px]">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <PortofolioPreviewCard key={i} image={i} />
        ))}
      </section>
    </main>
  );
}
