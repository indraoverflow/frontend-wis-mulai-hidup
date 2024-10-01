import DigitalWalletCard from "@/components/theme/digital-wallet-card";
import FeedbackCard from "@/components/theme/feedback-card";
import OfflineGiftCard from "@/components/theme/offline-gift-card";
import React from "react";
import CommentCard from "@/components/theme/comment-card";
import Image from "next/image";
import CeremonyCardPotrait from "@/components/theme/CeremonyCardPotrait";
import OurStory from "@/components/theme/OurStory";
import { accounts, comments, story } from "@/lib/data";
import DateCountDown from "../../../components/theme/DateCountdown";
import Footer from "@/components/shared/Footer";

export default function ThemeOne() {
  return (
    <>
      <main className="bg-surface">
        <section className="relative md:w-full z-20">
          <Image
            src={"/images/background/hero-bg-theme-1.png"}
            alt={"mosque background image"}
            width={1440}
            height={1440}
            className="w-full aspect-square lg:aspect-auto absolute top-0 left-0 opacity-[98%] -z-10"
          />
          <div className="py-10 lg:pt-[154px] lg:pb-[53px] flex flex-col w-11/12 mx-auto justify-start items-center text-white ">
            <p className="text-base md:text-xl text-center font-bold">
              Ya Allah the Most Loving
            </p>
            <p className="text-base md:text-xl text-center font-medium mb-6 lg:mb-[50px]">
              With Your blessing, you brought us together in a holy marriage
              bond
            </p>
            <p className="text-xl md:text-[40px] font-bold mb-3 lg:mb-[50px]">
              THE WEDDING OF
            </p>
            <p className="text-4xl md:text-6xl lg:text-[120px] mb-3 flex justify-between items-center gap-4 lg:gap-20">
              <Image
                src={"/images/icon/leaf-theme-1.svg"}
                alt={"leaf decoration left"}
                width={40}
                height={60}
                className="scale-x-[-1] w-6 h-6 md:w-8 md:h-8"
              />
              Azka & Zeldya
              <Image
                src={"/images/icon/leaf-theme-1.svg"}
                alt={"leaf decoration left"}
                width={40}
                height={60}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </p>
            <p className="text-2xl md:text-3xl lg:text-[40px] flex gap-2 md:gap-[30px]">
              •<span>02 02 2025</span>•
            </p>
          </div>
          <div className="flex  gap-6 lg:gap-20 lg:w-full justify-center w-11/12 mx-auto  sm:px-20 md:px-12 lg:px-48">
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
          </div>
          <div className="w-full flex justify-center mb-3">
            <Image
              src={"/images/decorations/flower-decoration-1.png"}
              alt={"flower decoration"}
              width={1200}
              height={243}
              className="-mt-4 lg:-mt-11 md:-mr-4"
            />
          </div>
        </section>
        <section className="text-center mb-[50px] w-11/12 mx-auto">
          <p className="text-3xl md:text-[39px] font-bold mb-8 md:mb-[50px]">
            We’re Getting Married
          </p>
          <p className="text-2xl md:text-5xl italic mb-[10px]">
            Assalamualaikum Warrohmatullah Wabarrakatuhu
          </p>
          <p className="text-base md:text-xl max-w-screen-md mx-auto px-6">
            By asking for the grace and blessing of Allah SWT. We intend to hold
            a wedding celebration for our sons and daughters, which Allah SWT
            willing will be held on:
          </p>
        </section>
        <div className="relative">
          <div className="container px-5 pb-20 mx-auto max-w-desktop lg:px-20 xl:px-[100px]">
            <div className="mb-12 md:mb-16 lg:mb-24 ">
              <h3 className="text-center text-gray text-3xl md:text-5xl mb-12 md:mb-36">
                05 February 2025
              </h3>
              <DateCountDown
                date={new Date("2024-10-10T12:00:00")}
                className="bg-black text-white rounded-[20px] w-40 h-48"
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
            <OurStory {...story} className="bg-isabelline text-granite-gray" />
            <div className="text-center mt-12 md:mt-20 mb-12  max-w-[1040px] mx-auto">
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
            <div className="max-w-[1040px] mx-auto">
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

          <div className="container py-7 w-11/12 mx-auto max-w-[1040px]">
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
      </main>
      <Footer variant="dark" />
    </>
  );
}
