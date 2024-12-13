import React from "react";

import { Comfortaa, Allura } from "next/font/google";
import { minervaModern, amstelvarAlpha } from "@/lib/fonts";
import Image from "next/image";
import CeremonyCard from "@/components/theme/ceremony-card";
import DigitalWalletCard from "@/components/theme/digital-wallet-card";
import OfflineGiftCard from "@/components/theme/offline-gift-card";
import { accounts, comments, story } from "@/lib/data";
import CommentCard from "@/components/theme/comment-card";
import FeedbackCard from "@/components/theme/feedback-card";
import Footer from "@/components/shared/Footer";
import DateCountDown from "../DateCountdown";
import { cn } from "@/lib/utils/tailwind-util";
import FeedbackCardTemplate from "../feedback-card-template";
import CommentCardTemplate from "../comment-card-template";
import useInvitationData from "@/lib/hooks/use-invitation-data";
import OurStory from "../OurStory";

const comfortaa = Comfortaa({ subsets: ["latin"] });
const allura = Allura({ subsets: ["latin"], weight: "400" });

export default function ThemeFive({
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
      <main className={cn("relative", minervaModern.className)}>
        <section className="relative md:w-full z-20 md:min-h-[860px] lg:min-h-[1110px]">
          <Image
            src={"/images/background/hero-bg-theme-5.png"}
            alt={"mosque background image"}
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full opacity-[98%] -z-10"
          />
          <div className="py-10 md:pt-32 md:pb-24 lg:pt-[170px] lg:pb-[153px] flex flex-col w-11/12 mx-auto justify-start items-center text-white ">
            <Image
              src={"/images/icon/crown-theme-5.svg"}
              alt="icon"
              width={163.65}
              height={54.25}
              className="mb-4 lg:mb-8"
            />
            <p
              className={cn(
                "text-xl md:text-5xl text-center mb-6 lg:mb-[55px]",
                allura.className
              )}
            >
              The Wedding Of
            </p>
            <p
              className={`text-center text-4xl md:text-6xl lg:text-[128px] mb-6 lg:mb-[55px]`}
            >
              {nicknameMan}
              <br />
              <span className={cn("", minervaModern.className)}>&</span>
              <br />
              {nicknameWoman}
            </p>
            <p className="text-base md:text-lg">
              { isTemplate ? "2 February, 2025 – Jakarta indonesia" : receptionStartDate + "-" + receptionLocation }
            </p>
          </div>
        </section>
        <section className="bg-raisin-black text-white">
          <div className="container px-5 py-5 lg:pb-0 lg:pt-16 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="text-center mb-6 lg:mb-28">
              <p className="text-2xl font-medium mb-3">
                &quot;And among His verses is that He has created for you wives
                of your own kind, so that you may feel comfortable in them, and
                He has made between you mawaddah and mercy. Verily in that are
                signs for the people who think&quot;
              </p>
              <p className="text-2xl font-medium">- AR-RUM 21 -</p>
            </div>
            <div className="mb-8 md:mb-36">
              <p className="text-2xl text-center mb-4 lg:mb-11">
                We sincerely hope for your presence at the wedding of
              </p>
              <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={womanMedia?.[0]?.photo_url ?? "/images/couple/bride-hero-theme-5.png"}
                    alt="mempelai perempuan"
                    width={300}
                    height={300}
                    className="rounded-full mb-5"
                  />
                  <Image
                    src={"/images/icon/crown-theme-5.svg"}
                    alt="icon"
                    width={163.65}
                    height={54.25}
                    className="scale-y-[-1] mb-4 lg:mb-8"
                  />
                  <div className="text-center">
                    <h3 className="text-5xl">{nameWoman}</h3>
                    <p className="text-2xl">
                      Putri dari Bapak {fatherWoman} dan Ibu {motherWoman}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={manMedia?.[0]?.photo_url ? manMedia[0].photo_url : "/images/couple/groom-hero-theme-5.png"}
                    alt="mempelai pria"
                    width={300}
                    height={300}
                    className="rounded-full mb-5"
                  />
                  <Image
                    src={"/images/icon/crown-theme-5.svg"}
                    alt="icon"
                    width={163.65}
                    height={54.25}
                    className="scale-y-[-1] mb-4 lg:mb-8"
                  />
                  <div className="text-center">
                    <h3 className="text-5xl">{nameMan}</h3>
                    <p className="text-2xl">
                      Putra dari Bapak {fatherMan} dan Ibu {motherMan}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:pb-96 overflow-hidden">
            <div className="hidden lg:block absolute -left-60 top-0 z-0">
              <Image
                src={"/images/background/bg-rose-theme.svg"}
                alt="background patern"
                width={741}
                height={1079}
                className="z-0"
              />
            </div>
            <div className="relative container px-5 py-5 lg:pt-0 lg:pb-16 mx-auto max-w-desktop lg:px-20 xl:px-[100px] z-30">
              <hr className="border-white my-10" />
              {videoUrl || isTemplate == true && (
                <div className="text-center">
                  <h3 className="text-4xl mb-4">Our Story</h3>
                  <div
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
                </div>
              )}

              <OurStory {...story} className="bg-white text-black" titleClassName="text-white" />
              
              <hr className="border-white my-10" />
              <div className="mb-8 lg:mb-24">
                <h3 className="text-center text-gray text-3xl md:text-5xl mb-12 md:mb-36">
                  {ceremonyStartDateWithFullMonth}
                </h3>
                <DateCountDown
                  date={new Date(ceremonyStartDateTime)}
                  className="text-white bg-transparent w-full h-auto md:w-40 md:h-48"
                />
              </div>
              <div className="mb-5">
                <CeremonyCard
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
              </div>
              <div className="mb-16">
                <CeremonyCard
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
                  height: "450px",
                }}
                className="mb-16"
              >
                <iframe
                  src={ceremonyLocation}
                  loading="lazy"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
              <div className="mb-5 text-center">
                <p className="text-spanish-gray text-xl font-medium mb-20">
                  It is an honor and happiness for us if Mr / Ms / Brother (i)
                  is willing to attend to give blessings to the bride and groom.
                </p>
              </div>
              <div>
                <h3 className="text-center text-4xl font-bold mb-16">
                  Give a Gift
                </h3>
                <div
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-2 gap-5",
                    comfortaa.className
                  )}
                >
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
            <div className="hidden lg:block  absolute -right-12 -bottom-10  scale-x-[-1] z-0">
              <Image
                src={"/images/background/bg-rose-theme.svg"}
                alt="background patern"
                width={741}
                height={1079}
                className="z-0"
              />
            </div>
          </div>
        </section>
        <div className={cn("bg-philippine-silver py-7", comfortaa.className)}>
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
