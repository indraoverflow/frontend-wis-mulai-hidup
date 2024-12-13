import React from "react";

import { Comfortaa, Allura, Montaga } from "next/font/google";
import { minervaModern } from "@/lib/fonts";
import Image from "next/image";
import DigitalWalletCard from "@/components/theme/digital-wallet-card";
import OfflineGiftCard from "@/components/theme/offline-gift-card";
import { accounts, comments } from "@/lib/data";
import CommentCard from "@/components/theme/comment-card";
import FeedbackCard from "@/components/theme/feedback-card";
import Footer from "@/components/shared/Footer";
import DateCountDown from "../DateCountdown";
import CeremonyCardPotrait from "../CeremonyCardPotrait";
import { cn } from "@/lib/utils/tailwind-util";
import FeedbackCardTemplate from "../feedback-card-template";
import CommentCardTemplate from "../comment-card-template";
import useInvitationData from "@/lib/hooks/use-invitation-data";

const comfortaa = Comfortaa({ subsets: ["latin"] });
const allura = Allura({ subsets: ["latin"], weight: "400" });
const montaga = Montaga({ subsets: ["latin"], weight: "400" });

export default function ThemeSix({
  data,
  isTemplate = false,
  uniqueId,
  to,
}: {
  data?: any;
  isTemplate?: boolean;
  uniqueId?: string;
  to: string | null;
}) {

  let {
    nameMan,
    nicknameMan,
    prefixMan,
    titleMan,
    fatherMan,
    motherMan,
    descriptionMan,
    nameWoman,
    nicknameWoman,
    prefixWoman,
    titleWoman,
    fatherWoman,
    motherWoman,
    descriptionWoman,
    receptionStartDate,
    receptionEndDate,
    receptionStartTime,
    receptionEndTime,
    receptionTimezone,
    receptionLocation,
    receptionAddress,
    manMedia,
    womanMedia,
    manStory,
    womanStory,
    videoUrl,
    ceremonyStartDate,
    ceremonyEndDate,
    ceremonyStartTime,
    ceremonyEndTime,
    ceremonyTimezone,
    ceremonyLocation,
    ceremonyAddress,
    ceremonyStartDateString,
    ceremonyStartDateWithFullMonth,
    ceremonyStartDateTime,
    story,
    accounts,
  } = useInvitationData(data, isTemplate);

  return (
    <>
      <main className={cn("relative", montaga.className)}>
        <section className="relative md:w-full z-20 min-h-[960px] lg:min-h-[1110px]">
          <Image
            src="/images/background/hero-bg-theme-6.png"
            alt=""
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-7xl bg-snow bg-opacity-90 z-10 py-14 px-6 lg:py-28 lg:px-10">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-3">
              <div className="w-[255px] h-[255px] relative overflow-hidden rounded-full">
                <Image
                  src={manMedia?.[0]?.photo_url ? manMedia[0].photo_url : "/images/couple/groom-hero-theme-6.png"}
                  alt="mempelai pria"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="text-center">
                <p className="text-2xl lg:text-3xl">
                  Please join us to celebrate our wedding
                </p>
                <h1 className="text-6xl lg:text-[101px] text-copper-red my-10 lg:my-20">
                  {nicknameMan} & {nicknameWoman}
                </h1>
                <p className="text-2xl lg:text-3xl">
                  { isTemplate ? "Januari 15, 2025 - Bandung, Jawa barat" : receptionStartDate + "-" + receptionLocation }
                </p>
              </div>
              <div className="w-[255px] h-[255px] relative overflow-hidden rounded-full">
                <Image
                  src={womanMedia?.[0]?.photo_url ? womanMedia[0].photo_url : "/images/couple/bride-hero-theme-6.png"}
                  alt="mempelai wanita"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-copper-red text-white">
          <div className="container px-5 py-5 lg:py-16 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="lg:pb-60 lg:px-28">
              <h3 className="text-5xl text-center mb-16">Our Story</h3>
              <p className="text-lg leading-relaxed">
                {story.quoteGroom}
                <br />
                <br />
                {story.quoteBride}
                <br />
                <br />
              </p>
            </div>
          </div>
        </section>
        <section className="bg-snow text-white">
          <div className="container px-5 py-5 lg:pb-16 lg:pt-0 lg:-mb-60 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="lg:relative lg:bottom-60 z-20">
              {videoUrl || isTemplate == true && (
                <div
                  className="rounded-lg overflow-hidden mb-10"
                  style={{
                    width: "100%",
                    height: "557px",
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={isTemplate ? "https://www.youtube.com/embed/ivrumxRUz_Y?si=tipbNyMEGJj7tsRf" : videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              )}
              <div className="text-center">
                <h3
                  className={cn(
                    "text-black font-bold text-4xl mb-14",
                    comfortaa.className
                  )}
                >
                  We’r Getting Married
                </h3>
                <h2
                  className={cn(
                    "text-5xl text-dark-liver mb-3",
                    allura.className
                  )}
                >
                  Assalamualaikum Warrohmatullah Wabarrakatuhu
                </h2>
                <p
                  className={`font-medium text-spanish-gray text-xl mb-8 ${comfortaa.className}`}
                >
                  By asking for the grace and blessing of Allah SWT. We intend
                  to hold a wedding celebration for our sons and daughters,
                  which Allah SWT willing will be held on:
                </p>
              </div>
              <div className={cn("mb-8 lg:mb-24", comfortaa.className)}>
                <h3 className="text-center text-gray text-3xl md:text-5xl mb-8 md:mb-36">
                  {ceremonyStartDateWithFullMonth}
                </h3>
                <DateCountDown
                  date={new Date(ceremonyStartDateTime)}
                  className="text-white bg-black rounded-[20px] w-full h-auto md:w-40 md:h-48"
                />
              </div>
              <div
                className={cn(
                  "flex flex-col md:flex-row justify-center gap-5 mb-5 mx-auto max-w-[1040px]",
                  comfortaa.className
                )}
              >
                <CeremonyCardPotrait
                  backgroundImage="/images/background/bg-ceremony.png"
                  iconImage="/images/icon/wedding-ring.svg"
                  ceremonyTitle="Akad Ceremony"
                  ceremonyTime={`${ceremonyStartTime} ${
                    receptionTimezone ?? ""
                  } - ${
                    ceremonyEndTime
                      ? ceremonyEndTime + " " + (receptionTimezone ?? "")
                      : "Selesai"
                  }`}
                  locationTitle="InterContinental Jakarta Hotel"
                  locationAddress={
                    isTemplate ? "Jl.  Jalan Metro Pondok Indah" : ceremonyAddress
                  }
                  buttonText="Open Map"
                />
                <CeremonyCardPotrait
                  backgroundImage="/images/background/bg-card-place.png"
                  iconImage="/images/icon/dinner-table.svg"
                  ceremonyTitle="Wedding Reseption"
                  ceremonyTime={`${receptionStartTime} ${
                    receptionTimezone ?? ""
                  } - ${
                    receptionEndTime
                      ? receptionEndTime + " " + (receptionTimezone ?? "")
                      : "Selesai"
                  }`}
                  locationTitle="InterContinental Jakarta Hotel"
                  locationAddress={
                    isTemplate ? "Jl.  Jalan Metro Pondok Indah" : receptionAddress
                  }
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
                  src={ceremonyLocation}
                  loading="lazy"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
              <p
                className={cn(
                  "text-center text-spanish-gray text-xl font-medium mb-16",
                  comfortaa.className
                )}
              >
                It is an honor and happiness for us if Mr / Ms / Brother (i) is
                willing to attend to give blessings to the bride and groom.
              </p>
            </div>
          </div>
        </section>
        <section className="relative md:w-full z-20 min-h-[810px] lg:min-h-[1110px]">
          <Image
            src="/images/background/wedding-bg-theme-6.png"
            alt=""
            layout="fill"
            objectFit="cover"
            className=""
          />
        </section>
        <section className="bg-snow text-raisin-black">
          <div className="container px-5 py-5 lg:py-16 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <h5 className="text-2xl text-center mb-11">
              We sincerely hope for your presence at the wedding of
            </h5>
            <div
              className={cn(
                "bg-white flex flex-col md:flex-row justify-between items-center gap-12 mb-24",
                minervaModern.className
              )}
            >
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={manMedia?.[0]?.photo_url ? manMedia[0].photo_url : "/images/couple/groom-hero-theme-6.png"}
                  alt="mempelai pria"
                  width={300}
                  height={300}
                  className="rounded-full mb-5"
                />
                <Image
                  src={"/images/icon/crown-theme-6.svg"}
                  alt="icon"
                  width={163.65}
                  height={54.25}
                  className="mb-4 lg:mb-8"
                />
                <div className="text-center">
                  <h3 className="text-5xl">{nameMan}</h3>
                  <p className="text-2xl">Putra dari Bapak {fatherMan} dan Ibu {motherMan}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={womanMedia?.[0]?.photo_url ? womanMedia[0].photo_url : "/images/couple/bride-hero-theme-6.png"}
                  alt="mempelai wanita"
                  width={300}
                  height={300}
                  className="rounded-full mb-5"
                />
                <Image
                  src={"/images/icon/crown-theme-6.svg"}
                  alt="icon"
                  width={163.65}
                  height={54.25}
                  className="mb-4 lg:mb-8"
                />
                <div className="text-center">
                  <h3 className="text-5xl">{nameWoman}</h3>
                  <p className="text-2xl">Putri dari Bapak {fatherWoman} dan Ibu {motherWoman}</p>
                </div>
              </div>
            </div>
            <div className={cn("", comfortaa.className)}>
              <h3 className="text-center text-4xl font-bold mb-16">
                Give a Gift
              </h3>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
                <DigitalWalletCard
                  title="Digital Wallet"
                  note="Note: Click copy button to copy bank number"
                  accounts={accounts}
                />
                <OfflineGiftCard
                  title="Offline Gift"
                  address={
                    isTemplate
                      ? "Jl.  Jalan Metro Pondok Indah"
                      : receptionAddress ?? ceremonyAddress
                  }
                  buttonText="Open Map"
                />
              </div>
            </div>
          </div>
        </section>
        <div className={cn("bg-copper-red py-7", comfortaa.className)}>
          <div className="container px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="mb-9">
              {isTemplate ? (
                <FeedbackCardTemplate
                  title="Say Something!"
                  nameLabel="Name"
                  messageLabel="Message"
                  attendanceLabel="Attendance"
                  buttonText="Send Now!"
                />
              ) : (
                <FeedbackCard
                  title="Say Something!"
                  nameLabel="Name"
                  messageLabel="Message"
                  attendanceLabel="Attendance"
                  buttonText="Send Now!"
                  uniqueId={uniqueId}
                  to={to}
                  isTemplate={isTemplate}
                />
              )}
            </div>
            <div>
              {isTemplate ? (
                <CommentCardTemplate comments={comments} />
              ) : (
                <CommentCard
                  comments={comments}
                  uniqueId={uniqueId}
                  isTemplate={isTemplate}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer variant="dark" />
    </>
  );
}
