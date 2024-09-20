import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { PiMapPinLineFill } from 'react-icons/pi';

interface OfflineGiftCardProps {
  title: string;
  address: string;
  buttonText: string;
}

const OfflineGiftCard: React.FC<OfflineGiftCardProps> = ({ title, address, buttonText }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray text-3xl font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-black font-light mb-8">
          {address}
        </p>
        <div className="flex items-center gap-5">
          <PiMapPinLineFill className="w-14 h-14" />
          <Button variant="dark" size="lg" className="w-full">
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OfflineGiftCard;