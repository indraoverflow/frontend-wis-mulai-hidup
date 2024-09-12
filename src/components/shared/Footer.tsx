import { cn } from "@/lib/utils";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex flex-col justify-center items-center bg-tertiary gap-[14px] py-[100px]">
      <div className="flex gap-[22.5px]">
        <IconButton href="#">
          <FaWhatsapp className="w-full h-full" />
        </IconButton>
        <IconButton href="#">
          <FaInstagram className="w-full h-full" />
        </IconButton>
        <IconButton href="#">
          <FiYoutube className="w-full h-full" />
        </IconButton>
        <IconButton href="#">
          <HiOutlineEnvelope className="w-full h-full" />
        </IconButton>
      </div>
      <p className="text-sm text-center lg:text-base">
        About Us | Privacy Policy | Term of Use
      </p>
      <p className="text-sm text-center lg:text-base">
        ©{`${new Date(Date.now()).getFullYear()}`}&nbsp;Mulai Hidup. Built with
        Heart and passion
      </p>
    </footer>
  );
}

function IconButton({
  children,
  href,
  target,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      className={cn(
        "flex justify-center items-center px-0 py-[6px] rounded-full border-[2px] border-black h-[45.75px] w-[45.75px] md:border-[3px]",
        className
      )}
    >
      {children}
    </a>
  );
}
