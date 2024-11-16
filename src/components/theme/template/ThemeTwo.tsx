"use client";
import CeremonyCard from "@/components/theme/ceremony-card";
import DigitalWalletCard from "@/components/theme/digital-wallet-card";
import FeedbackCard from "@/components/theme/feedback-card";
import OfflineGiftCard from "@/components/theme/offline-gift-card";
import React from "react";
import CommentCard from "@/components/theme/comment-card";
import OurStory from "@/components/theme/OurStory";
import { comments } from "@/lib/data";
import Footer from "@/components/shared/Footer";
import Image from "next/image";

import { Comfortaa, Allura } from "next/font/google";
import DateCountDown from "../DateCountdown";
import { cn } from "@/lib/utils/tailwind-util";
import useInvitationData from "@/lib/hooks/use-invitation-data";
import CommentCardTemplate from "../comment-card-template";
import FeedbackCardTemplate from "../feedback-card-template";
import Overlay from "../Overlay";

const comfortaa = Comfortaa({ subsets: ["latin"] });
const allura = Allura({ subsets: ["latin"], weight: "400" });

export default function ThemeTwo({
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
        <div className="bg-surface pb-0">
          <div className="container px-5 p-20 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="text-center mb-[-150px]">
              <h3 className="font-bold text-4xl mb-14">We’r Getting Married</h3>
              <h2
                className={cn(
                  "text-5xl text-dark-liver mb-3",
                  allura.className
                )}
              >
                Assalamualaikum Warrohmatullah Wabarrakatuhu
              </h2>
              <p className="font-medium text-spanish-gray text-xl mb-8">
                By asking for the grace and blessing of Allah SWT. We intend to
                hold a wedding celebration for our sons and daughters, which
                Allah SWT willing will be held on:
              </p>
              <h3 className="font-bold text-raisin-black text-4xl">
                THE WEDDING OF
              </h3>
              <p
                className={cn(
                  "text-[120px] text-raisin-black  flex flex-col md:flex-row justify-between gap-20",
                  allura.className
                )}
              >
                <Image
                  src={"/images/icon/leaf-theme-black.svg"}
                  alt={"leaf decoration left"}
                  width={40}
                  height={60}
                  className="hidden md:block"
                />
                {nicknameMan} & {nicknameWoman}
                <Image
                  src={"/images/icon/leaf-theme-black.svg"}
                  alt={"leaf decoration left"}
                  className="hidden md:block  scale-x-[-1]"
                  width={40}
                  height={60}
                />
              </p>
              <p className="text-[40px] text-raisin-black">
                •<span className="mx-8">{ceremonyStartDateString}</span>•
              </p>
            </div>
            <div className="relative top-48 z-20">
              <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center md:items-stretch px-12 sm:px-20 md:px-12 lg:px-48">
                <div className="rounded-[200px] overflow-hidden">
                  <Image
                    src={"/images/couple/groom-hero.png"}
                    alt={"mempelai laki laki"}
                    width={509}
                    height={706}
                    className="object-cover h-full"
                  />
                </div>
                <div>
                  <Image
                    src={"/images/icon/chevron-down-theme.svg"}
                    alt="chevron down"
                    width={18}
                    height={18}
                  />
                </div>
                <div className="rounded-[200px] overflow-hidden">
                  <Image
                    src={"/images/couple/bride-hero.png"}
                    alt={"mempelai perempuan"}
                    width={509}
                    height={706}
                    className="object-cover  h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative px-4 py-32 md:py-[262px] bg-phthalo-green z-10">
          <div className="hidden lg:block absolute right-0 top-0  z-30">
            <Image
              src={"/images/background/bg-patern-theme.svg"}
              alt="background patern"
              width={522.6}
              height={482.47}
            />
          </div>
          <div className="hidden lg:block  absolute left-0 bottom-0  scale-[-1] z-30">
            <Image
              src={"/images/background/bg-patern-theme.svg"}
              alt="background patern"
              width={522.6}
              height={482.47}
            />
          </div>
          <OurStory
            {...story}
            className="border border-white text-white"
            titleClassName="text-white"
          />
        </div>
        <div className="bg-surface">
          <div className="container px-5 p-20 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="mb-24">
              <h3 className="text-center text-gray text-5xl mb-16 md:mb-36">
                {ceremonyStartDateWithFullMonth}
              </h3>
              <DateCountDown
                date={new Date(ceremonyStartDateTime)}
                className="bg-phthalo-green text-white rounded-full w-full h-auto md:w-40 md:h-48"
              />
            </div>
            <div className="mb-5">
              <CeremonyCard
                backgroundImage="/images/background/bg-ceremony.png"
                iconImage="/images/icon/wedding-ring.svg"
                ceremonyTitle="Akad Ceremony"
                ceremonyTime={`${ceremonyStartTime} ${receptionTimezone} - ${
                  ceremonyEndTime
                    ? ceremonyEndTime + " " + receptionTimezone
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
                ceremonyTime={`${receptionStartTime} ${receptionTimezone} - ${
                  receptionEndTime
                    ? receptionEndTime + " " + receptionTimezone
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
                src={ceremonyLocation}
                loading="lazy"
                width="100%"
                height="100%"
              ></iframe>
            </div>
            <div className="text-center mb-8">
              <p className="text-spanish-gray text-xl font-medium mb-20">
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
        </div>
        <div className="bg-phthalo-green py-7">
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
