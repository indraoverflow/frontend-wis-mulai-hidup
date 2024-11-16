"use client";

import React from "react";
import { Comfortaa, Allura } from "next/font/google";
import Image from "next/image";
import CeremonyCard from "@/components/theme/ceremony-card";
import DigitalWalletCard from "@/components/theme/digital-wallet-card";
import OfflineGiftCard from "@/components/theme/offline-gift-card";
import { comments } from "@/lib/data";
import OurStory from "@/components/theme/OurStory";
import CommentCard from "@/components/theme/comment-card";
import FeedbackCard from "@/components/theme/feedback-card";
import Footer from "@/components/shared/Footer";
import DateCountDown from "../DateCountdown";
import { cn } from "@/lib/utils/tailwind-util";
import useInvitationData from "@/lib/hooks/use-invitation-data";
import FeedbackCardTemplate from "../feedback-card-template";
import CommentCardTemplate from "../comment-card-template";
import Overlay from "../Overlay";

const comfortaa = Comfortaa({ subsets: ["latin"] });
const allura = Allura({ subsets: ["latin"], weight: "400" });

export default function ThemeThree({
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

  const [hasOverlay, setHasOverlay] = React.useState(true);
  return hasOverlay ? (
    <Overlay
      setHasOverlay={setHasOverlay}
      to={to}
      nicknameMan={nicknameMan}
      nicknameWoman={nicknameWoman}
      ceremonyStartDateString={ceremonyStartDateString}
    />
  ) : (
    <>
      <main className={cn("relative", comfortaa.className)}>
        <div className="bg-surface">
          <div className="container px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="text-center mb-14">
              <Image
                src={"/images/background/bg-frame-theme.png"}
                alt={"flower decoration"}
                width={1103}
                height={340.6}
                className="w-full mb-1"
              />
              <h4 className={cn("text-5xl mb-3", allura.className)}>
                Turut mengundang Atas Pernikahan
              </h4>
              <hr className="border-black" />
            </div>
            <div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 lg:gap-28">
                <div className="rounded-[150px] overflow-hidden bg-isabelline aspect-[10/14]">
                  <Image
                    src={"/images/faceless/groom.png"}
                    alt={"mempelai laki laki"}
                    width={382.13}
                    height={529.5}
                    className="object-cover h-full rounded-[150px]"
                  />
                </div>
                <div>
                  <h4 className={cn("text-9xl mb-6", allura.className)}>
                    {nameMan}
                  </h4>
                  <p className="text-2xl font-bold mb-4">
                    Putra dari Bapak {fatherMan} dan ibu {motherMan}
                  </p>
                  <h5 className="font-bold text-4xl">Bin {fatherMan}</h5>
                </div>
              </div>
              <p
                className={cn(
                  "text-9xl text-center my-6 md:my-[-50px]",
                  allura.className
                )}
              >
                &
              </p>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 lg:gap-28">
                <div>
                  <h4 className={cn("text-9xl mb-6", allura.className)}>
                    {nameWoman}
                  </h4>
                  <h5 className="font-bold text-4xl">Binti {fatherWoman}</h5>
                  <p className="text-2xl font-bold mb-4">
                    Putri dari Bapak {fatherWoman} dan ibu {motherWoman}
                  </p>
                </div>
                <div className="rounded-[150px] overflow-hidden bg-isabelline aspect-[10/14]">
                  <Image
                    src={"/images/faceless/bride.png"}
                    alt={"mempelai perempuan"}
                    width={382.13}
                    height={529.5}
                    className="object-cover h-full rounded-[150px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative py-8 lg:pt-28 lg:pb-96">
            <div className="hidden lg:block absolute left-0 top-0 z-0">
              <Image
                src={"/images/background/bg-rose-theme.svg"}
                alt="background patern"
                width={741}
                height={1079}
                className="z-0"
              />
            </div>
            <div className="container relative px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px] z-30">
              <hr className="border-black mb-28" />
              <div className="mb-32">
                <OurStory
                  {...story}
                  className="border border-black text-black bg-white"
                  titleClassName="text-black"
                />
              </div>
              <hr className="border-black mb-28" />
              <div className="mb-24">
                <h3 className="text-center text-gray text-5xl mb-16 md:mb-36">
                  {ceremonyStartDateWithFullMonth}
                </h3>
                <DateCountDown
                  date={new Date(ceremonyStartDateTime)}
                  className="bg-transparent border-black text-black w-full h-auto md:w-40 md:h-48"
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
                  locationAddress={ceremonyAddress}
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
                  locationAddress={receptionAddress}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25290.95474578179!2d114.60485266193213!3d-3.3314483022037584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423e3adcd9d9f%3A0x1b5ad295e2204466!2sSwiss-Belhotel%20Borneo%20Banjarmasin!5e0!3m2!1sid!2sid!4v1726833580741!5m2!1sid!2sid"
                  loading="lazy"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
              <div className="text-center mb-8">
                <p className="text-spanish-gray text-xl font-medium mb-20">
                  It is an honor and happiness for us if Mr / Ms / Brother (i)
                  is willing to attend to give blessings to the bride and groom.
                </p>
                <p className="text-spanish-gray text-xl font-medium mb-3">
                  &quot;And among His verses is that He has created for you
                  wives of your own kind, so that you may feel comfortable in
                  them, and He has made between you mawaddah and mercy. Verily
                  in that are signs for the people who think&quot;
                </p>
                <p className="text-granite-gray text-2xl font-medium">
                  - AR-RUM 21 -
                </p>
              </div>
              <div>
                <h3 className="text-black text-center text-4xl font-bold mb-16">
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
                    address={
                      isTemplate
                        ? "Jl. Terusan Jakarta No.53, Cicaheum, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40291"
                        : receptionAddress
                    }
                    buttonText="Open Map"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:block  absolute right-0 bottom-0  scale-x-[-1] z-0">
              <Image
                src={"/images/background/bg-rose-theme.svg"}
                alt="background patern"
                width={741}
                height={1079}
                className="z-0"
              />
            </div>
          </div>
        </div>
        <div className="bg-philippine-silver py-7">
          <div className="container px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="mb-4 md:mb-9">
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
