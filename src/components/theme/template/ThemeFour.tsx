import CeremonyCard from "@/components/theme/ceremony-card";
import DigitalWalletCard from "@/components/theme/digital-wallet-card";
import FeedbackCard from "@/components/theme/feedback-card";
import OfflineGiftCard from "@/components/theme/offline-gift-card";
import React from "react";
import CommentCard from "@/components/theme/comment-card";
import Image from "next/image";
import OurStory from "@/components/theme/OurStory";
import { accounts, comments, story } from "@/lib/data";
import DateCountDown from "@/components/theme/DateCountdown";
import { cn } from "@/lib/utils/tailwind-util";
import { allura, comfortaa, inter, playfairDisplay } from "@/lib/fonts";
import Footer from "@/components/shared/Footer";

export default function ThemeFour() {
  return (
    <>
      <main className={cn("bg-surface", comfortaa.className)}>
        <section className="relative md:w-full z-20 overflow-hidden">
          <div className="w-full  h-full  absolute top-0 left-0 opacity-[98%] -z-10 bg-fire-opal overflow-hidden">
            <Image
              src={"/images/icon/love-decor-theme-4.svg"}
              alt={"love decoration"}
              width={300}
              height={550}
              className="absolute w-[300px] left-[10px] top-[65px]"
            />
            <Image
              src={"/images/icon/love-decor-theme-4.svg"}
              alt={"love decoration"}
              width={300}
              height={550}
              className="absolute w-[300px] right-7 top-[341px] rotate-180"
            />
            <div className="absolute bottom-[-70%] left-[-15%] mx-auto rounded-[100%] bg-surface h-[100%] w-[130%]"></div>
          </div>
          <div className="py-10 lg:pt-[154px] lg:pb-[119px] flex flex-col w-11/12 mx-auto justify-start items-center text-white ">
            <p
              className={cn(
                "text-3xl md:text-4xl text-center font-bold lg:text-5xl py-3 px-48 border-b lg:mb-24",
                allura.className
              )}
            >
              Turut mengundang Atas Pernikahan
            </p>
            <Image
              src={"/images/icon/theme-4-hero-decor.svg"}
              alt={"decoration above name"}
              width={164}
              height={54}
            />
            <p
              className={cn(
                "text-4xl md:text-6xl lg:text-[86px] mb-3 pt-10 pb-8",
                playfairDisplay.className
              )}
            >
              Azka & Zeldya
            </p>
            <p
              className={cn(
                "text-base uppercase flex gap-2 md:gap-[30px] tracking-widest",
                inter.className
              )}
            >
              2 February, 2025 – Jakarta indonesia
            </p>
          </div>
          <div className="flex relative gap-6 lg:gap-9 justify-center  left-[-10%] w-[120%]  mx-auto">
            <div className="rounded-[30px] overflow-hidden">
              <Image
                src={"/images/couple/groom-hero.png"}
                alt={"mempelai laki laki"}
                width={509}
                height={706}
                className="object-cover h-full"
              />
            </div>
            <div className="rounded-[30px] overflow-hidden">
              <Image
                src={"/images/couple/groom-hero.png"}
                alt={"mempelai laki laki"}
                width={509}
                height={706}
                className="object-cover h-full"
              />
            </div>
            <div className="rounded-[30px] overflow-hidden">
              <Image
                src={"/images/couple/bride-hero.png"}
                alt={"mempelai perempuan"}
                width={509}
                height={706}
                className="object-cover  h-full"
              />
            </div>
            <div className="rounded-[30px] overflow-hidden">
              <Image
                src={"/images/couple/bride-hero.png"}
                alt={"mempelai perempuan"}
                width={509}
                height={706}
                className="object-cover  h-full"
              />
            </div>
          </div>
        </section>
        <section className=" flex justify-between items-center max-w-[1040px] mx-auto py-[44px] border-b border-b-raisin-black mb-10">
          <div className="flex flex-col gap-4 items-center">
            <p className={cn("text-[40px]", inter.className)}>Azka Kosasih</p>
            <p className={cn("text-base text-spanish-gray", inter.className)}>
              Bin Murzandi
            </p>
          </div>
          <Image
            src={"/images/icon/love-decor-theme-4.svg"}
            alt={"love decoration"}
            width={300}
            height={550}
            className="rotate-180"
          />
          <div className="flex flex-col gap-4 items-center">
            <p className={cn("text-[40px]", inter.className)}>Azka Kosasih</p>
            <p className={cn("text-base text-spanish-gray", inter.className)}>
              Bin Murzandi
            </p>
          </div>
        </section>

        <section className="bg-fire-opal pt-5 relative">
          <div className="border-b border-b-raisin-black max-w-[1040px] mx-auto pt-8 pb-[151px]">
            <OurStory
              {...story}
              className="bg-white border border-raisin-black text-raisin-black "
            />
          </div>
        </section>
        <div className="relative">
          <Image
            src={"/images/icon/love-decor-theme-4.svg"}
            alt={"love decoration"}
            width={300}
            height={550}
            className="absolute -left-24 top-96 rotate-180"
          />
          <div className="container px-5 pt-[100px] pb-20 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="mb-12 md:mb-16 lg:mb-24 ">
              <h3 className="text-center text-gray text-3xl md:text-5xl mb-12 md:mb-36">
                05 February 2025
              </h3>
              <DateCountDown
                date={new Date("2024-10-10T12:00:00")}
                className="bg-fire-opal text-raisin-black w-40 h-48"
              />
            </div>
            <div className="mb-5 mx-auto max-w-[1040px]">
              <CeremonyCard
                backgroundImage="/images/background/bg-ceremony.png"
                iconImage="/images/icon/wedding-ring.svg"
                ceremonyTitle="Akad Ceremony"
                ceremonyTime="07:00 - 08:00"
                locationTitle="InterContinental Jakarta Hotel"
                locationAddress="Jl. Jalan Metro Pondok Indah"
                buttonText="Open Map"
              />
            </div>
            <div className="mb-16 mx-auto max-w-[1040px]">
              <CeremonyCard
                backgroundImage="/images/background/bg-card-place.png"
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
            <Image
              src={"/images/icon/love-decor-theme-4.svg"}
              alt={"love decoration"}
              width={300}
              height={550}
              className="absolute -right-24"
            />

            <div className="relative text-center mt-12 md:mt-20 mb-12 max-w-[1040px] mx-auto ">
              <p className="text-center text-spanish-gray text-xl font-medium mb-16">
                It is an honor and happiness for us if Mr / Ms / Brother (i) is
                willing to attend to give blessings to the bride and groom.
              </p>
              <p className="text-spanish-gray text-xl font-medium mb-3">
                &quot;And among His verses is that He has created for you wives
                of your own kind, so that you may feel comfortable in them, and
                He has made between you mawaddah and mercy. Verily in that are
                signs for the people who think&quot;
              </p>
              <p className="text-granite-gray text-2xl font-medium">
                - AR-RUM 21 -
              </p>
            </div>
            <div className="max-w-[1040px] mx-auto mb-[335px]">
              <h3 className="text-black text-center text-4xl font-bold mb-8 lg:mb-16 ">
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

          <div className="bg-fire-opal">
            <div className="container py-7 w-11/12 mx-auto max-w-[1040px] bg-fire-opal">
              <div className="mb-4 md:mb-9">
                <FeedbackCard
                  title="Say Something!"
                  nameLabel="Name"
                  messageLabel="Message"
                  attendanceLabel="Attendance"
                  buttonText="Send Now!"
                />
              </div>
              <div>
                <CommentCard comments={comments} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer variant="dark" />
    </>
  );
}
