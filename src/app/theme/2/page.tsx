import CeremonyCard from "@/components/theme/ceremony-card";
import DigitalWalletCard from "@/components/theme/digital-wallet-card";
import FeedbackCard from "@/components/theme/feedback-card";
import OfflineGiftCard from "@/components/theme/offline-gift-card";
import TimeCard from "@/components/theme/time-card";
import React from "react";
import CommentCard from "@/components/theme/comment-card";
import OurStory from "@/components/theme/OurStory";
import { accounts, comments, story } from "@/lib/data";
import Footer from "@/components/shared/Footer";
import Image from "next/image";

export default function ThemePage() {
  return (
    <>
      <main className="relative">
        <div className="bg-surface pb-0">
          <div className="container px-5 p-20 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="text-center mb-[-150px]">
              <h3 className="font-bold text-4xl mb-14">
                We’r Getting Married
              </h3>
              <h2 className="text-5xl text-dark-liver mb-3">
                Assalamualaikum Warrohmatullah Wabarrakatuhu
              </h2>
              <p className="font-medium text-spanish-gray text-xl mb-8">
                By asking for the grace and blessing of Allah SWT. We intend to hold a wedding celebration for our sons and daughters, which Allah SWT willing will be held on:
              </p>
              <h3 className="font-bold text-raisin-black text-4xl">
                THE WEDDING OF
              </h3>
              <p className="text-[120px] text-raisin-black  flex flex-col md:flex-row justify-between gap-20">
                <Image
                  src={"/images/icon/leaf-theme-black.svg"}
                  alt={"leaf decoration left"}
                  width={40}
                  height={60}
                  className="hidden md:block"
                />
                Azka & Zeldya
                <Image
                  src={"/images/icon/leaf-theme-black.svg"}
                  alt={"leaf decoration left"}
                  className="hidden md:block  scale-x-[-1]"
                  width={40}
                  height={60}
                />
              </p>
              <p className="text-[40px] text-raisin-black">
                •<span className="mx-8">02 02 2025</span>•
              </p>
            </div>
            <div className="relative top-48 z-20">
              <div className="flex flex-col md:flex-row gap-8 w-full justify-center px-12 sm:px-20 md:px-12 lg:px-48">
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
              <h3 className="text-center text-gray text-5xl mb-36">
                05 February 2025
              </h3>
              <div className="grid grid-cols-4 md:flex md:justify-center gap-8">
                <TimeCard title="21" subtitle="H" />
                <TimeCard title="06" subtitle="D" />
                <TimeCard title="50" subtitle="M" />
                <TimeCard title="28" subtitle="S" />
              </div>
            </div>
            <div className="mb-5">
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
            <div className="mb-16">
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
            <div style={{ width: "100%", height: "450px" }} className="mb-16">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25290.95474578179!2d114.60485266193213!3d-3.3314483022037584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423e3adcd9d9f%3A0x1b5ad295e2204466!2sSwiss-Belhotel%20Borneo%20Banjarmasin!5e0!3m2!1sid!2sid!4v1726833580741!5m2!1sid!2sid"
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
                  address="Jl. Terusan Jakarta No.53, Cicaheum, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40291"
                  buttonText="Open Map"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-phthalo-green py-7">
          <div className="container px-5 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="mb-9">
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
      </main>
      <Footer variant="dark" />
    </>
  );
}
