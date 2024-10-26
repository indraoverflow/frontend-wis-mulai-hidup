import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MenuItemProps {
  icon: string;
  title: string;
  formIndex: number;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  formIndex,
  setFormIndex,
}) => {
  return (
    <Card
      className="w-full h-full cursor-pointer"
      onClick={() => setFormIndex(formIndex)}
    >
      <CardHeader className="items-center px-0">
        <Image src={icon} alt={title} width={60} height={60} />
      </CardHeader>
      <CardContent className="text-center px-0 md:p-6 md:pt-0">
        <p className="text-xs md:text-sm">{title}</p>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
