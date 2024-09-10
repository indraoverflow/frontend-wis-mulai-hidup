import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { minervaModern } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col items-center justify-center gap-8 py-24 bg-surface">
        <section className="flex flex-col items-center justify-center gap-5 px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
          <h1 className={cn("text-5xl text-center", minervaModern.className)}>
            {'"'}Refleksi Cinta dan Keimanan
          </h1>
          <p
            className={cn(
              "text-4xl text-center max-w-[1034px] px-8 mb-4",
              minervaModern.className
            )}
          >
            Tawarkan Undangan Pernikahan Islami yang Didesain Khusus untuk
            Memperkuat Tali Silaturahmi!{'"'}
          </p>
          <Button
            variant={"outline"}
            className="flex gap-2 p-4 pr-5 bg-white rounded"
          >
            <FiArrowUpRight className="w-5 h-5" />
            Mulai Sekarang
          </Button>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-desktop px-5 gap-5 lg:px-20 xl:px-[100px] mx-auto bg-blue">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Card className="flex flex-col p-6 gap-y-[14px] " key={i}>
              <CardContent className="p-0">
                <Image
                  src="/template-placeholder.png"
                  alt="template"
                  width={312}
                  height={370}
                />
              </CardContent>
              <CardContent className="flex items-end justify-between p-0 border-b border-b-black">
                <div>
                  <p className="text-[21px]">Bohemian {i + 1}</p>
                  <p className="text-[21px]">Bohemian</p>
                </div>
                <a
                  href=""
                  className={cn(
                    "flex justify-center items-center m-2 rounded-full border border-black h-7 w-7"
                  )}
                >
                  <GoArrowUpRight className="w-5 h-5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
