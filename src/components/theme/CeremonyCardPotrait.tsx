import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card"; // Adjust the import path as necessary
import { Button } from "../ui/button"; // Adjust the import path as necessary
import { PiMapPinLineFill } from "react-icons/pi"; // Adjust the import path as necessary

interface CeremonyCardProps {
  backgroundImage: string;
  iconImage: string;
  ceremonyTitle: string;
  ceremonyTime: string;
  locationTitle: string;
  locationAddress: string;
  buttonText: string;
}

const CeremonyCardPotrait: React.FC<CeremonyCardProps> = ({
  backgroundImage,
  iconImage,
  ceremonyTitle,
  ceremonyTime,
  locationTitle,
  locationAddress,
  buttonText,
}) => {
  return (
    <Card className="flex justify-center w-full overflow-hidden shadow-lg relative rounded-[30px] py-4 md:py-10 lg:pt-24 lg:pb-[93px] px-4 md:px-8 lg:px-14">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75 blur-[2px]"
        />
      </div>
      <CardContent className="relative space-y-4 text-white z-10">
        <div className="grid grid-cols-1 gap-4 md:gap-8  g:gap-14">
          <div className="flex flex-col items-center space-x-2">
            <Image src={iconImage} alt="Ceremony" width={65} height={65} />
            <h2 className="text-2xl md:text-4xl text-center font-bold leading-loose mb-4 md:mb-8 lg:mb-14  border-b border-b-black  w-full">
              {ceremonyTitle}
            </h2>
            <p>{ceremonyTime}</p>
          </div>
          <div>
            <div className=" mb-4">
              <h3 className="text-xl md:text-3xl text-center font-bold mb-3 lg:p-8">
                {locationTitle}
              </h3>
              <p className="text-lg md:text-2xl font-light">
                {locationAddress}
              </p>
            </div>
            <Button
              variant="white"
              size="lg"
              className="border-0 py-2 md:py-3 h-fit w-full font-bold text-base"
            >
              <PiMapPinLineFill className="mr-2 w-8 h-8" />
              {buttonText}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CeremonyCardPotrait;
