import { Comfortaa, Allura, Playfair_Display, Inter } from "next/font/google";
import localFont from "next/font/local";

export const elza = localFont({
  src: [
    {
      path: "../../public/fonts/Elza/Elza_Text_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Elza/Elza_Text_Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Elza/Elza_Text_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Elza/Elza_Text.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
});

export const minervaModern = localFont({
  src: [
    {
      path: "../../public/fonts/MinervaModern/MinervaModern_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MinervaModern/MinervaModern_Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
});

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});
export const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  preload: true,
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});
