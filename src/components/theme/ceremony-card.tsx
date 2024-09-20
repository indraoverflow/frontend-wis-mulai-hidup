import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card'; // Adjust the import path as necessary
import { Button } from '../ui/button'; // Adjust the import path as necessary
import { PiMapPinLineFill } from 'react-icons/pi'; // Adjust the import path as necessary

interface CeremonyCardProps {
  backgroundImage: string;
  iconImage: string;
  ceremonyTitle: string;
  ceremonyTime: string;
  locationTitle: string;
  locationAddress: string;
  buttonText: string;
}

const CeremonyCard: React.FC<CeremonyCardProps> = ({
  backgroundImage,
  iconImage,
  ceremonyTitle,
  ceremonyTime,
  locationTitle,
  locationAddress,
  buttonText,
}) => {
  return (
    <Card className="w-full overflow-hidden shadow-lg relative">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>
      <CardContent className="relative px-24 py-10 space-y-4 text-white z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="flex flex-col items-center space-x-2">
            <Image
              src={iconImage}
              alt="Ceremony"
              width={65}
              height={65}
            />
            <h2 className="text-2xl font-bold">{ceremonyTitle}</h2>
            <hr className="border-black border w-full" />
            <p>{ceremonyTime}</p>
          </div>
          <div>
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold mb-3">
                {locationTitle}
              </h3>
              <p className="text-2xl font-light">
                {locationAddress}
              </p>
            </div>
            <Button variant="white" size="lg" className="border-0 w-full font-bold text-base">
              <PiMapPinLineFill className="mr-2 w-8 h-8" />
              {buttonText}
            </Button>                               
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CeremonyCard;