import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { minervaModern } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

export default function page() {
  return (
    <main className="relative flex flex-col items-center justify-center gap-8 py-24 bg-surface">
      <section className="flex flex-col items-center justify-center gap-5 px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
        <h1 className={cn("text-5xl text-center", minervaModern.className)}>
          Portofolio
        </h1>
        <p
          className={cn(
            " text-4xl text-center px-8 mb-4  max-w-[741px]",
            minervaModern.className
          )}
        >
          Lihat contoh pasangan yang sudah menjadi client kami
        </p>

        <Button
          variant={"outline"}
          className="flex gap-2 p-4 pr-5 bg-white rounded"
        >
          <FiArrowUpRight className="w-5 h-5" />
          Mulai Sekarang
        </Button>
      </section>
      <section className="grid grid-cols-1 gap-5 px-5 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-desktop lg:px-20 bg-blue xl:px-[100px]">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Card className="flex flex-col p-6 gap-y-[14px]" key={i}>
            <CardContent className="p-0">
              <Image
                src="/template-placeholder.png"
                alt="template"
                width={312}
                height={370}
              />
            </CardContent>
            <CardDescription className="p-0 text-center border-b border-b-black text-[40px]">
              Azka & Zelda
            </CardDescription>
          </Card>
        ))}
      </section>
    </main>
  );
}
