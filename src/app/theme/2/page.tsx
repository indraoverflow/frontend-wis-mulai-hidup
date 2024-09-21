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

export default function ThemePage() {
  return (
    <>
      <div className="relative">
        <div className="py-[262px] bg-phthalo-green">
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
      </div>
      <Footer variant="dark" />
    </>
  );
}
