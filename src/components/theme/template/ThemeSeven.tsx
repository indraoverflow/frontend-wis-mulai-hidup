import React from "react";

import { Comfortaa, Playfair_Display } from "next/font/google";
import Image from "next/image";
import DigitalWalletCard from "@/components/theme/digital-wallet-card";
import OfflineGiftCard from "@/components/theme/offline-gift-card";
import { accounts, comments } from "@/lib/data";
import CommentCard from "@/components/theme/comment-card";
import FeedbackCard from "@/components/theme/feedback-card";
import Footer from "@/components/shared/Footer";
import DateCountDown from "../DateCountdown";
import CeremonyCardPotrait from "../CeremonyCardPotrait";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils/tailwind-util";
import Navbar from "../header/Navbar";
import GalleryCarouselItem from "../GalleryCarouselItem";

const comfortaa = Comfortaa({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function ThemeSeven({
  data,
  isTemplate = false,
}: {
  data?: any;
  isTemplate?: boolean;
}) {
  const stories = [
    {
      title: "Raka",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis maxime consectetur debitis maiores veritatis unde voluptates, nostrum quasi. Vitae molestias alias incidunt, laborum ratione eveniet.",
    },
    {
      title: null,
      description: null,
      image: "/images/background/carousel-weeding-1-theme-7.png",
    },
    {
      title: "Raisa",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis maxime consectetur debitis maiores veritatis unde voluptates, nostrum quasi. Vitae molestias alias incidunt, laborum ratione eveniet.",
      image: null,
    },
    {
      title: null,
      description: null,
      image: "/images/background/carousel-weeding-2-theme-7.png",
    },
  ];

  const galleries = [
    {
      image: "/images/couple/gallery-wedding-1-theme-7.png",
    },
    {
      image: "/images/couple/gallery-wedding-2-theme-7.png",
    },
    {
      image: "/images/couple/gallery-wedding-3-theme-7.png",
    },
  ];

  return (
    <>
      <Navbar />
      <main className={cn("relative", comfortaa.className)}>
        <section className="bg-black text-white">
          <div className="relative px-5 lg:px-16">
            <div
              className={cn(
                "text-center mb-8 md:mb-0",
                playfairDisplay.className
              )}
            >
              <h1 className="text-9xl mb-2">R & R</h1>
              <h5 className="text-4xl">
                5TH <span className="font-bold">January</span> 2025
              </h5>
              <h5 className="text-4xl">- save the date to calendar -</h5>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between md:-mb-52">
              <div className={playfairDisplay.className}>
                <p className="text-center text-4xl mb-3">Raka</p>
                <div className="relative w-[268.33px] h-[428.37px]">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/background/bg-frame-template-7.svg"
                      className="relative z-20"
                      fill
                      style={{ objectFit: "cover" }}
                      alt="mempelai pria"
                    />
                  </div>
                  <div className="absolute inset-y-8 inset-x-5">
                    <Image
                      src="/images/couple/groom-hero.png"
                      alt="mempelai pria"
                      fill
                      style={{ objectFit: "cover" }}
                      className="relative rounded-full z-10"
                    />
                  </div>
                </div>
              </div>
              <div className={playfairDisplay.className}>
                <p className="text-center text-4xl mb-3">Raisa</p>
                <div className="relative w-[268.33px] h-[428.37px]">
                  <div className="absolute inset-0">
                    <Image
                      src="/images/background/bg-frame-template-7.svg"
                      className="relative z-20"
                      fill
                      style={{ objectFit: "cover" }}
                      alt="mempelai wanita"
                    />
                  </div>
                  <div className="absolute inset-y-8 inset-x-5">
                    <Image
                      src="/images/couple/bride-hero.png"
                      alt="mempelai wanita"
                      fill
                      style={{ objectFit: "cover" }}
                      className="relative rounded-full z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[268.33px] lg:w-full max-w-[621.05px] h-[428.37px] lg:h-[1020.03px]">
                <div className="absolute inset-0">
                  <Image
                    src="/images/background/bg-frame-template-7.svg"
                    className="relative z-20"
                    fill
                    style={{ objectFit: "cover" }}
                    alt="mempelai"
                  />
                </div>
                <div className="absolute inset-y-8 inset-x-5 lg:inset-y-24 lg:inset-x-12">
                  <Image
                    src="/images/couple/couple-hero.png"
                    alt="mempelai"
                    fill
                    style={{ objectFit: "cover" }}
                    className="relative rounded-full z-10"
                  />
                </div>
              </div>
            </div>
            <div className="absolute left-0 right-0 bottom-52 h-[400px] z-0">
              <Image
                src={"/images/background/bg-template-border-gradient-7.png"}
                alt="background patern"
                fill
                style={{ objectFit: "cover" }}
                className="z-0"
              />
            </div>
          </div>
          <div className="container px-5 pt-5 lg:pt-16 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <h3 className="text-6xl mb-40 text-center">
              Allah destined it, Allah brought us together…
            </h3>
            <div className="relative">
              <Carousel>
                <CarouselContent>
                  {stories.map((story, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <GalleryCarouselItem
                        galleryImage={story.image}
                        title={story.title}
                        description={story.description}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div
              className="rounded-lg overflow-hidden my-16"
              style={{
                width: "100%",
                height: "557px",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ivrumxRUz_Y?si=tipbNyMEGJj7tsRf"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="relative mb-16">
              <Carousel>
                <CarouselContent>
                  {galleries.map((gallery, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <GalleryCarouselItem galleryImage={gallery.image} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <hr />
            <div className="my-8 lg:my-16">
              <h3 className="text-center text-gray text-3xl md:text-5xl mb-8 md:mb-36">
                05 February 2025
              </h3>
              <DateCountDown
                date={new Date("2024-11-11T12:00:00")}
                className="text-white bg-black w-full h-auto md:w-40 md:h-48"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5 mb-5 mx-auto max-w-[1040px]">
              <CeremonyCardPotrait
                backgroundImage="/images/background/bg-ceremony-potrait.png"
                iconImage="/images/icon/wedding-ring.svg"
                ceremonyTitle="Akad Ceremony"
                ceremonyTime="07:00 - 08:00"
                locationTitle="InterContinental Jakarta Hotel"
                locationAddress="Jl. Jalan Metro Pondok Indah"
                buttonText="Open Map"
              />
              <CeremonyCardPotrait
                backgroundImage="/images/background/bg-reception-potrait.png"
                iconImage="/images/icon/dinner-table.svg"
                ceremonyTitle="Wedding Reseption"
                ceremonyTime="11.00 - 14.00"
                locationTitle="InterContinental Jakarta Hotel"
                locationAddress="Jl. Jalan Metro Pondok Indah"
                buttonText="Open Map"
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "331px",
              }}
              className="mb-8 md:mb-16 max-w-[1040px] mx-auto rounded-[10px] overflow-hidden bg-stone-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25290.95474578179!2d114.60485266193213!3d-3.3314483022037584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423e3adcd9d9f%3A0x1b5ad295e2204466!2sSwiss-Belhotel%20Borneo%20Banjarmasin!5e0!3m2!1sid!2sid!4v1726833580741!5m2!1sid!2sid"
                loading="lazy"
                width="100%"
                height="100%"
              ></iframe>
            </div>
            <p className="text-center text-spanish-gray text-xl font-medium mb-16">
              It is an honor and happiness for us if Mr / Ms / Brother (i) is
              willing to attend to give blessings to the bride and groom.
            </p>
            <div className="mb-20">
              <h3 className="text-center text-4xl font-bold mb-6">
                Give a Gift
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <DigitalWalletCard
                  title="Digital Wallet"
                  note="Note: Click copy button to copy bank number"
                  accounts={accounts}
                />
                <OfflineGiftCard
                  title="Offline Gift"
                  address="Jl. Terusan Jakarta No.53, Cicaheum, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40291"
                  buttonText="Open Map"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 right-0 top-48 h-[400px] scale-y-[-1] z-0">
              <Image
                src={"/images/background/bg-template-border-gradient-7.png"}
                alt="background patern"
                fill
                style={{ objectFit: "cover" }}
                className="z-0"
              />
            </div>
            <div className="relative container px-5 pb-5 lg:pb-16 mx-auto max-w-desktop lg:px-20 xl:px-[100px] z-10">
              <div className="mb-9">
                <FeedbackCard
                  title="Say Something!"
                  nameLabel="Name"
                  messageLabel="Message"
                  attendanceLabel="Attendance"
                  buttonText="Send Now!"
                  to={null}
                />
              </div>
              <div>
                <CommentCard comments={comments} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="dark" />
    </>
  );
}
