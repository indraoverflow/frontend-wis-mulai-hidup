import {
  allura,
  comfortaa,
  minervaModern,
  montaga,
  playfairDisplay,
} from "@/lib/fonts";
import { useGetGuestByUniqueIdQuery } from "@/store/features/message/message-slice";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils/tailwind-util";
import Envelop from "../icons/Envelop";

const Overlay = ({
  setHasOverlay,
  to = null,
  nicknameMan = "",
  nicknameWoman = "",
  ceremonyStartDateString = "",
  isTemplate = false,
  template = 1,
}: {
  setHasOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  to: string | null;
  isTemplate?: boolean;
  nicknameMan?: string;
  nicknameWoman?: string;
  ceremonyStartDateString?: string;
  template?: number;
}) => {
  const { data: guest } = useGetGuestByUniqueIdQuery(to);

  return (
    <div
      className={cn(
        "flex  items-center justify-center min-h-screen py-8 z-50  text-center bg-slate-600",
        comfortaa.className,
        template == 8 ? "text-black" : "text-white"
      )}
    >
      {template == 7 && (
        <div className="absolute w-screen h-screen bg-black"></div>
      )}
      {template == 8 && (
        <div className="absolute w-screen h-screen bg-white"></div>
      )}
      {template <= 6 ? (
        <Image
          src={`/images/overlay/template-${template}.png`}
          width={300}
          height={500}
          alt="overlay"
          className={cn(
            "w-screen h-screen absolute blur",
            template == 3 ? "object-fill" : "object-cover"
          )}
        />
      ) : (
        <Image
          src={`/images/overlay/template-${template}.png`}
          width={300}
          height={500}
          alt="overlay"
          className={cn(
            "md:h-screen py-6 w-[200vw] top-0   md:w-max absolute blur-sm"
          )}
        />
      )}

      {template <= 6 && (
        <div className="absolute w-screen h-screen opacity-30 bg-black"></div>
      )}
      {template == 4 && (
        <Image
          src={`/images/overlay/decoration-4.png`}
          width={300}
          height={500}
          alt="overlay decoration 4"
          className="w-8/12 top-0 object-cover absolute "
        />
      )}
      {template == 2 && (
        <div>
          <Image
            src={`/images/overlay/decoration-2.png`}
            width={300}
            height={500}
            alt="overlay decoration"
            className="top-0 right-0 absolute  w-6/12 sm:w-fit"
          />
          <Image
            src={`/images/overlay/decoration-2.png`}
            width={300}
            height={500}
            alt="overlay decoration"
            className="bottom-0 left-0 absolute rotate-180 w-6/12 sm:w-fit"
          />
        </div>
      )}
      <div className="flex flex-col items-center justify-center z-50 w-10/12">
        {template >= 6 && (
          <div
            className={cn(
              montaga.className,
              "flex text-center justify-center items-center p-4 z-50 rounded-full font-bold border-2 text-2xl lg:text-4xl aspect-square mb-4 tracking-tight",
              template == 8
                ? "text-black border-black"
                : "text-white border-white"
            )}
          >
            {nicknameMan[0]}&{nicknameWoman[0]}
          </div>
        )}

        {template == 5 && (
          <Image
            src={`/images/overlay/decoration-5.png`}
            width={300}
            height={500}
            alt="overlay decoration"
            className="h-min w-min mb-4"
          />
        )}

        {template >= 5 && (
          <div
            className={cn(
              allura.className,
              template == 8 ? "text-black " : "text-white ",
              "my-4 text-2xl lg:text-4xl"
            )}
          >
            The Wedding Of
          </div>
        )}
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
              "flex flex-col items-center md:flex-row",
              template <= 4
                ? allura.className
                : template == 5
                ? minervaModern.className
                : template == 6
                ? montaga.className
                : playfairDisplay.className,
              template == 8 ? "text-black" : "text-white"
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
          className={cn(
            "group rounded-full font-semi my-[42px]",
            template == 8
              ? "bg-black hover:bg-black text-white"
              : "bg-white hover:bg-white text-black"
          )}
          onClick={() => setHasOverlay(false)}
        >
          Buka Undangan
          <span className="ml-1 hidden group-hover:block">
            <Envelop size={28} color={template == 8 ? "white" : "black"} />
          </span>
        </Button>
        <p className="px-2">
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
      </div>
    </div>
  );
};

export default Overlay;
