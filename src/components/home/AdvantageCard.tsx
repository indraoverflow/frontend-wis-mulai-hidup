import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export default function AdvantageCard({
  imgUrl,
  description,
}: {
  imgUrl: string;
  description: string;
}) {
  return (
    <Card className=" p-6  sm:py-12 lg:px-12 xl:py-20 xl:px-16">
      <CardContent className="flex items-center justify-center p-0 mb-4 md:mb-6">
        <Image
          src={imgUrl}
          alt="Update"
          width={158}
          height={158}
          className="h-24 w-24 md:h-[158px] md:w-[158px]"
        />
      </CardContent>
      <p className="text-center text-xl">{description}</p>
    </Card>
  );
}
