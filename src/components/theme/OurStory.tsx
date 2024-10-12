import { cn } from "@/lib/utils/tailwind-util";
import { OurStoryProps } from "@/types/our-story-props";
import Image from "next/image";

export default function OurStory({
  imgBride,
  imgGroom,
  quoteBride,
  quoteGroom,
  className,
  titleClassName,
}: OurStoryProps) {
  return (
    <section className=" flex flex-col justify-center">
      <h2
        className={cn(
          "text-[40px] text-center font-bold mb-8 md:mb-[50px]",
          titleClassName ?? "text-black"
        )}
      >
        Our Story
      </h2>
      <div className="flex flex-col md:flex-row gap-5 max-w-[1040px] mx-auto">
        <div className="flex flex-col flex-1 p-0 border-none bg-transparent shadow-none gap-5">
          <div className=" overflow-hidden p-0 rounded-[20px] flex flex-col ">
            <Image
              src={imgGroom}
              alt={"mempelai laki-laki"}
              width={509}
              height={468}
              className=" w-full"
            />
          </div>
          <div
            className={cn(
              " flex-1 md:hidden px-3 pt-7 pb-4 rounded-[20px]",
              className
            )}
          >
            <p className="text-justify  p-[10px] pr-0">{quoteGroom}</p>
          </div>
          <div
            className={cn(
              " flex-1 hidden md:block px-3 pt-7 pb-4 rounded-[20px]",
              className
            )}
          >
            <p className="text-justify p-[10px] pr-0">{quoteBride}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-col-reverse flex-1 p-0 border-none bg-transparent shadow-none gap-5">
          <div className=" overflow-hidden p-0 rounded-[20px] flex flex-col ">
            <Image
              src={imgBride}
              alt={"mempelai laki-laki"}
              width={509}
              height={468}
              className=" w-full"
            />
          </div>
          <div
            className={cn(
              " flex-1 md:hidden px-3 pt-7 pb-4 rounded-[20px]",
              className
            )}
          >
            <p className="text-justify p-[10px] pr-0">{quoteBride}</p>
          </div>
          <div
            className={cn(
              " flex-1 hidden md:block px-3 pt-7 pb-4 rounded-[20px]",
              className
            )}
          >
            <p className="text-justify p-[10px] pr-0">{quoteGroom}</p>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
