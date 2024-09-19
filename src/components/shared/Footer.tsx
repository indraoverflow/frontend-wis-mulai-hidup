import { cn } from "@/lib/utils";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";

type Props = {
  variant?: "default" | "dark";
};

export default function Footer({ variant = "default" }: Props) {
  return (
    <footer
      className={cn(
        "flex flex-col justify-center items-center  gap-[14px] py-9 md:py-[100px]",
        variant === "dark"
          ? "text-white bg-[#242424]"
          : "text-[#242424] bg-tertiary"
      )}
    >
      <div className="flex gap-3 md:gap-[22.5px]">
        <IconButton href="#" variant={variant}>
          <FaWhatsapp className="w-full h-full" />
        </IconButton>
        <IconButton href="#" variant={variant}>
          <FaInstagram className="w-full h-full" />
        </IconButton>
        <IconButton href="#" variant={variant}>
          <FiYoutube className="w-full h-full" />
        </IconButton>
        <IconButton href="#" variant={variant}>
          <HiOutlineEnvelope className="w-full h-full" />
        </IconButton>
      </div>
      <p className="text-xs text-center md:text-base">
        About Us | Privacy Policy | Term of Use
      </p>
      <p className="text-xs text-center md:text-base">
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
  variant = "default",
}: {
  children: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
  variant?: "default" | "dark";
}) {
  return (
    <a
      href={href}
      target={target}
      className={cn(
        "flex justify-center items-center px-0 py-1 md:py-[6px] rounded-full border-[1.6px] border-[#242424]  w-7 h-7 md:h-[45.75px] md:w-[45.75px] md:border-[3px]",
        className,
        variant === "dark" ? "border-white" : "border-[#242424]"
      )}
    >
      {children}
    </a>
  );
}
