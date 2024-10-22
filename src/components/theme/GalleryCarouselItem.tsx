import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card"; // Adjust the import path as necessary
import { Button } from "../ui/button"; // Adjust the import path as necessary
import { PiMapPinLineFill } from "react-icons/pi"; // Adjust the import path as necessary
import { cn } from "@/lib/utils/tailwind-util";

interface GalleryItemProps {
    galleryImage?: string | null;
    title?: string | null;
    description?: string | null;
    className?: string;
    textClassName?: string;
}

const GalleryCarouselItem: React.FC<GalleryItemProps> = ({
    galleryImage,
    title,
    description,
    className,
    textClassName,
}) => {
    return (
        <Card className="bg-transparent border-none">
            <CardContent className={`aspect-square relative p-0 group rounded-full overflow-hidden`}>
                <div className={cn("absolute inset-0 rounded-full ", className ?? "border-2 border-light-silver")} />
                {galleryImage ? (
                    <Image
                        src={galleryImage}
                        alt="wedding"
                        fill
                        style={{ objectFit: "cover" }}
                        className="w-full h-full"
                    />
                ) : (
                    <div className={cn("absolute inset-0 flex flex-col items-center justify-center ", textClassName ?? "text-white bg-black/40")}>
                        <h2 className="text-3xl font-serif mb-4">
                            {title}
                        </h2>
                        <p className="text-sm text-center max-w-[80%] leading-relaxed">
                            {description}
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default GalleryCarouselItem;
