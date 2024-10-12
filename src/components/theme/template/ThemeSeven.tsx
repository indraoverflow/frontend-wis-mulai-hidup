import React from "react";

import { Comfortaa, Playfair_Display } from "next/font/google";
import { minervaModern } from "@/lib/fonts";
import Image from "next/image";
import DigitalWalletCard from "@/components/theme/digital-wallet-card";
import OfflineGiftCard from "@/components/theme/offline-gift-card";
import { accounts, comments, story } from "@/lib/data";
import CommentCard from "@/components/theme/comment-card";
import FeedbackCard from "@/components/theme/feedback-card";
import Footer from "@/components/shared/Footer";
import DateCountDown from "../DateCountdown";
import CeremonyCardPotrait from "../CeremonyCardPotrait";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const comfortaa = Comfortaa({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function ThemeSeven() {
    return (
        <>
            <main className={`relative ${comfortaa.className}`}>
                <section className="bg-black text-white">
                    <div className="relative">
                        <div className={cn("text-center", playfairDisplay.className)}>
                            <h1 className="text-9xl mb-2">R & R</h1>
                            <h5 className="text-4xl">
                                5TH <span className="font-bold">January</span> 2025
                            </h5>
                            <h5 className="text-4xl">
                                - save the date to calendar -
                            </h5>
                        </div>
                        {/* <div className="bg-gradient-to-r from-philippine-yellow to-light-silver h-[2px]"></div> */}
                    </div>
                    <div className="container px-5 py-5 lg:py-16 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
                        <h3 className="text-6xl mb-40">
                            Allah destined it, Allah brought us together…
                        </h3>
                        <div className="relative">
                            <Carousel>
                                <CarouselContent>
                                    <CarouselItem className="basis-1/4">
                                        <div className="relative border border-philippine-yellow rounded-full">
                                            <div className="relative">
                                                <h5>Raka</h5>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis maxime consectetur debitis maiores veritatis unde voluptates, nostrum quasi. Vitae molestias alias incidunt, laborum ratione eveniet.</p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4">2</CarouselItem>
                                    <CarouselItem className="basis-1/4">3</CarouselItem>
                                    <CarouselItem className="basis-1/4">4</CarouselItem>
                                    <CarouselItem className="basis-1/4">5</CarouselItem>
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </section>
            </main>
            <Footer variant="dark" />
        </>
    );
}
