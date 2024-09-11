"use client";

import React from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import NavLink from "./NavLink";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 py-[10px] md:py-5 lg:py-10 flex-col items-center bg-surface z-40">
      <nav className="flex  items-center justify-between md:gap-10 lg:gap-14 xl:gap-[138px] max-w-desktop px-5 lg:px-20 xl:px-[100px] mx-auto">
        <Logo width={80} height={80} className="w-10 lg:w-20" />
        {isExpanded ? (
          <div
            onClick={() => setIsExpanded(false)}
            className="absolute top-0 bottom-0 left-0 right-0 z-40 w-screen transition-all duration-500 h-dvh bg-slate-800 opacity-30"
          ></div>
        ) : null}
        <ul
          className={cn(
            "flex justify-start flex-1 flex-col z-40 h-screen px-4 pt-24 gap-6 w-10/12 top-0 right-0  max-w-sm border-l border-l-tertiary  bg-surface absolute transition-all duration-500 ease-in-out",
            "md:justify-center  md:item-center md:static md:flex-row md:max-w-[400px] md:h-fit md:pt-0   md:p-0  md:gap-0 md:border-none lg:gap-[76px]  lg:max-w-full",
            `${isExpanded ? "w-10/12" : "w-0 px-0 overflow-hidden"}`
          )}
        >
          <NavLink label="Home" route="/" />
          <NavLink label="Portofolio" route="/portofolio" />
          <NavLink label="Harga" route="/harga" />
          <NavLink label="FAQ" route="/faq" />
        </ul>
        <div className="relative flex items-center justify-end flex-1 gap-7 md:flex-grow-0 md:items-start">
          {session ? (
            // FIXME: login and start free trial button slighly shown when user is logged in and the page is reloaded
            <Button
              size={"sm"}
              rounded={"sm"}
              className="h-10 p-2 rounded lg:p-5"
              onClick={() => signOut()}
            >
              Hai, &nbsp;{session.user?.name}
            </Button>
          ) : (
            <>
              {/* <Link href={"/login"}> */}
              <Button
                onClick={() => signIn()}
                variant={"outline"}
                size={"sm"}
                rounded={"sm"}
                className="h-10 p-2 rounded bg-surface border-surface lg:p-5 lg:bg-primary lg:text-primary-foreground lg:hover:bg-primary/90 lg:hover:text-primary-foreground"
              >
                Login
              </Button>
              {/* </Link> */}
              <Button
                variant={"outline"}
                size={"sm"}
                className="h-10 px-2 py-0 border-black rounded md:px-9 lg:border-primary"
              >
                <span className="hidden md:block">Start &nbsp;</span> Free Trial
              </Button>
            </>
          )}
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
