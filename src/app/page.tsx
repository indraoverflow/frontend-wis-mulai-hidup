import AdvantageCard from "@/components/home/AdvantageCard";
import TemplatePreviewCard from "@/components/home/TemplatePreviewCard";
import TestimoniCard from "@/components/home/TestimoniCard";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { minervaModern } from "@/lib/fonts";
import { cn } from "@/lib/utils/tailwind-util";
import { FiArrowUpRight } from "react-icons/fi";

export default function page() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col items-center justify-center gap-6 md:gap-24 md:py-24  bg-surface">
        <section className="container flex flex-col items-center justify-start gap-4 md:gap-5 px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px] ">
          <h1
            className={cn(
              "text-3xl lg:text-5xl text-center",
              minervaModern.className
            )}
          >
            {'"'}REFLEKSI CINTA DAN KEIMANAN
          </h1>
          <p
            className={cn(
              "text-lg lg:text-[40px] tracking-wide leading-tight text-center max-w-[1034px]  mb-4 lg:mt-0",
              minervaModern.className
            )}
          >
            Tawarkan Undangan Pernikahan Islami yang Didesain Khusus untuk
            Memperkuat Tali Silaturahmi!{'"'}
          </p>
          <Button
            variant={"outline"}
            className="flex gap-2 py-2 md:py-4 pl-4 pr-5 bg-white rounded"
          >
            <FiArrowUpRight className="w-5 h-5" />
            Mulai Sekarang
          </Button>
        </section>
        <section className="container flex flex-col gap-14 px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px] ">
          <div className="grid grid-cols-1 items-stretch gap-5 md:gap-8 lg:gap-5 xl:gap-8 mx-auto md:grid-cols-2 md:w-11/12 lg:w-full lg:grid-cols-3 max-w-desktop">
            {[1, 2, 3, 4, 5, 6].map((value, index) => (
              <TemplatePreviewCard key={index} image={value} />
            ))}
          </div>
          <Button
            variant={"outline"}
            className="flex gap-2 py-2 md:py-4 pl-4 pr-5 bg-white rounded mx-auto"
          >
            <FiArrowUpRight className="w-5 h-5" />
            Mulai Sekarang
          </Button>
        </section>
        <section className="container flex flex-col  gap-5 px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px] ">
          <h3 className={cn("text-4xl text-center", minervaModern.className)}>
            Mengapa Layanan Kami ?
          </h3>
          <p className="text-2xl text-center">Benefit memakai layanan kami:</p>
          <div className="grid items-stretch grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-5 md:gap-8 w-11/12 lg:w-full mx-auto max-w-desktop ">
            <AdvantageCard
              imgUrl={"/images/icon/cost-and-time.svg"}
              description={"Hemat Biaya dan Waktu"}
            />
            <AdvantageCard
              imgUrl={"/images/icon/design-tools.svg"}
              description={"Fleksibilitas Design"}
            />
            <AdvantageCard
              imgUrl={"/images/icon/recycle.svg"}
              description={"Ramah Lingkungan"}
            />
            <AdvantageCard
              imgUrl={"/images/icon/update.svg"}
              description={"Update Real-time"}
            />
          </div>
        </section>
        <section className="container flex flex-col gap-5 px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
          <h3
            className={cn("text-4xl text-center mb-9", minervaModern.className)}
          >
            Apa Kata Mereka ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-0">
            {[0, 1, 2, 3].map((i) => (
              <TestimoniCard key={i} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
