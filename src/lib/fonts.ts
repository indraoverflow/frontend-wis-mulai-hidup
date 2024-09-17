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
