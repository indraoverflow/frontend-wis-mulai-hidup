import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { minervaModern } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col items-center justify-center gap-8 py-24 bg-surface">
        <section className="container flex flex-col items-center justify-center gap-5 px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px] mb-8 md:mb-24">
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
        <section className="container flex flex-col px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px] mb-8 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Card className="flex flex-col p-6 gap-y-[14px] " key={i}>
                <CardContent className="p-0 flex justify-center">
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
          </div>
          <Button
            variant={"outline"}
            className="flex gap-2 p-4 pr-5 bg-white rounded mx-auto"
          >
            <FiArrowUpRight className="w-5 h-5" />
            Mulai Sekarang
          </Button>
        </section>
        <section className="container flex flex-col items-center gap-5 px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px] mb-8 md:mb-24">
          <h3 className={cn("text-4xl text-center", minervaModern.className)}>
            Mengapa Layanan Kami ?
          </h3>
          <p
            className="text-2xl text-center"
          >
            Benefit memakai layanan kami:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="px-16 py-20">
              <CardContent className="flex items-center justify-center mb-6">
                <Image
                  src="/images/icon/cost-and-time.svg"
                  alt="Cost and Time"
                  width={158}
                  height={158}
                />
              </CardContent>
              <p className="text-center text-xl">
                Hemat Biaya dan Waktu
              </p>
            </Card>
            <Card className="px-16 py-20">
              <CardContent className="flex items-center justify-center mb-6">
                <Image
                  src="/images/icon/design-tools.svg"
                  alt="Design Tools"
                  width={158}
                  height={158}
                />
              </CardContent>
              <p className="text-center text-xl">
                Fleksibilitas Design
              </p>
            </Card>
            <Card className="px-16 py-20">
              <CardContent className="flex items-center justify-center mb-6">
                <Image
                  src="/images/icon/recycle.svg"
                  alt="Recycle"
                  width={158}
                  height={158}
                />
              </CardContent>
              <p className="text-center text-xl">
                Ramah Lingkungan
              </p>
            </Card>
            <Card className="px-16 py-20">
              <CardContent className="flex items-center justify-center mb-6">
                <Image
                  src="/images/icon/update.svg"
                  alt="Update"
                  width={158}
                  height={158}
                />
              </CardContent>
              <p className="text-center text-xl">
                Update Real-time
              </p>
            </Card>
          </div>
        </section>
        <section className="container flex flex-col gap-5 px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
          <h3 className={cn("text-4xl text-center mb-9", minervaModern.className)}>
            Apa Kata Mereka ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-12">
                <h1 className="text-5xl font-semibold mb-12">“Quote”</h1>
                <div className="flex items-center gap-6">
                  <Avatar>
                    <AvatarImage 
                      src="https://github.com/shadcn.png" 
                      className="rounded-full" 
                      width={80} 
                      height={80} 
                      alt="@shadcn" 
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <CardDescription>
                    <h4 className="text-xl">Title</h4>
                    <p className="text-xl">Description</p>
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
