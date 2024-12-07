import { allura, comfortaa } from "@/lib/fonts";
import { useGetGuestByUniqueIdQuery } from "@/store/features/message/message-slice";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils/tailwind-util";

const Overlay = ({
  setHasOverlay,
  to = null,
  nicknameMan = "",
  nicknameWoman = "",
  ceremonyStartDateString = "",
  isTemplate = false,
}: {
  setHasOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  to: string | null;
  isTemplate?: boolean;
  nicknameMan?: string;
  nicknameWoman?: string;
  ceremonyStartDateString?: string;
}) => {
  const { data: guest } = useGetGuestByUniqueIdQuery(to);
  return (
    <div
      className={cn(
        "flex  items-center justify-center min-h-screen py-8 z-50 text-white text-center bg-black",
        comfortaa.className
      )}
    >
      <Image
        src="/images/background/hagia-sopia.png"
        width={300}
        height={500}
        alt="overlay"
        className="w-screen h-screen object-cover absolute blur"
      />
      <div className="flex flex-col items-center justify-center z-50 ">
        <p className="text-6xl lg:text-[120px] mb-12 flex justify-between items-center gap-4 lg:gap-20">
          <Image
            src={"/images/icon/leaf-theme-1.svg"}
            alt={"leaf decoration left"}
            width={40}
            height={60}
            className="scale-x-[-1] w-6 h-6 md:w-8 md:h-8"
          />
          <span
            className={cn(
              "flex flex-col items-center md:flex-row text-white",
              allura.className
            )}
          >
            <span>{nicknameMan}</span>
            <span>&nbsp; & &nbsp;</span> <span>{nicknameWoman}</span>
          </span>
          <Image
            src={"/images/icon/leaf-theme-1.svg"}
            alt={"leaf decoration left"}
            width={40}
            height={60}
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </p>
        <p>Kpd Bapak/ Ibu/ Saudara/i</p>
        <p className="text-2xl md:text-4xl my-8 md:py-8">
          {isTemplate ? "Nama Tamu" : guest?.data?.name}
        </p>
        <p>
          Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Berhadir Di
          Acara Pernikahan Kami.
        </p>
        <Button
          size={"sm"}
          className="bg-white rounded-full text-black font-semi my-[42px]"
          onClick={() => setHasOverlay(false)}
        >
          Buka Undangan
        </Button>
        <p>Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
      </div>
    </div>
  );
};

export default Overlay;
