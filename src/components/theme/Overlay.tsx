import { allura } from "@/lib/fonts";
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
        "flex  items-center justify-center min-h-screen  bg-gradient-radial py-8 from-sky-200  via-10%  via-sky-300 to-sky-200 z-50 ",
        allura.className
      )}
    >
      <div className="flex flex-col items-center justify-center ">
        <p className="text-3xl md:text-[40px] font-semibold mb-2">
          THE WEDDING OF
        </p>
        <p className="text-4xl md:text-[40px]  mb-3 flex justify-between items-center lg:py-2">
          <span>{nicknameMan}</span>
          <span>&nbsp; & &nbsp;</span> <span>{nicknameWoman}</span>
        </p>
        <p className="text-2xl md:text-3xl lg:text-[40px] flex gap-2 md:gap-[30px] mb-4 md:mb-[48px]">
          •<span>{ceremonyStartDateString}</span>•
        </p>
        <Image
          src="/images/faceless/couple-white-face-to-face.png"
          width={300}
          height={500}
          alt="overlay"
          className="md:w-[500px] md:h-[500px] h-[300px] w-[300px] "
        />
        <p className="text-2xl md:text-3xl lg:text-4xl">Kepada Yth</p>
        <p className="text-3xl md:text-6xl lg:text-8xl pt-2 pb-4 md:py-8">
          {isTemplate ? "Nama Tamu" : guest?.data?.name}
        </p>
        <Button size={"sm"} onClick={() => setHasOverlay(false)}>
          Open Invitation
        </Button>
      </div>
    </div>
  );
};

export default Overlay;
