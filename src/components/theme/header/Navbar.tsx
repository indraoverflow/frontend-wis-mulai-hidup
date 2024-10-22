"use client";

import React from "react";
import { cn } from "@/lib/utils/tailwind-util";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { Montaga } from "next/font/google";

type Props = {
  showMenu?: boolean;
  darkTheme?: boolean;
};

const montaga = Montaga({ subsets: ["latin"], weight: "400" });

export default function Navbar({ showMenu = true, darkTheme = true }: Props) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <header className={cn("sticky top-0  py-7 px-7 md:py-5 lg:py-10 lg:px-0 flex-col items-center  z-40 ", darkTheme ? "bg-black text-white" : "bg-white text-raisin-black")}>
      <nav className="flex  items-center justify-center  max-w-desktop px-5  lg:px-20 xl:px-[100px] mx-auto">
        <Logo title="R & R" className={cn("md:hidden", montaga.className, darkTheme ? "" : "border-raisin-black")} />
        {isExpanded ? (
          <div
            onClick={() => setIsExpanded(false)}
            className="absolute top-0 bottom-0 left-0 right-0 z-40 w-screen transition-all duration-500 h-dvh bg-slate-800 opacity-30"
          ></div>
        ) : null}
        {showMenu && (
          <ul
            className={cn(
              "flex justify-center flex-1 flex-col z-40 h-screen px-4 pt-24 gap-6 w-10/12 top-0 right-0  max-w-sm border-l border-l-tertiary absolute transition-all duration-500 ease-in-out",
              " md:items-center md:static md:flex-row md:max-w-[400px] md:h-fit md:pt-0   md:p-0  md:gap-0 md:border-none lg:gap-12 xl:gap-[76px] lg:max-w-screen-md xl:max-w-desktop",
              darkTheme ? "bg-black text-white " : "bg-white text-raisin-black ",
              `${isExpanded ? "w-10/12" : "w-0 px-0 overflow-hidden"}`,
            )}
          >
            <NavLink label="Home" route="/" darkTheme={darkTheme} />
            <NavLink label="Our Story" route="/" darkTheme={darkTheme} />
            <NavLink label="Venue" route="/" darkTheme={darkTheme} />
            <div className="hidden md:block">
              <Logo title="R & R" className={darkTheme ? "" : "border-raisin-black" + " " + montaga.className} />
            </div>
            <NavLink label="Gift" route="/" darkTheme={darkTheme} />
            <NavLink label="Comment" route="/" darkTheme={darkTheme} />
            <NavLink label="Contact Us" route="/" darkTheme={darkTheme} />
          </ul>
        )}
        <div className="relative flex items-center justify-end flex-1 gap-4 md:gap-7 md:flex-grow-0 md:items-start">
          <button
            className="relative z-50 flex items-center justify-center w-8 h-8 md:hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <RxCross1
              className={cn(
                "w-0 h-0 transition-all duration-300 absolute md:duration-0",
                isExpanded && "rotate-180 w-6 h-6"
              )}
            />

            <RxHamburgerMenu
              className={cn(
                "w-6 h-6 transition-all duration-300 absolute md:duration-0",
                isExpanded && "rotate-180 w-0 h-0"
              )}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
