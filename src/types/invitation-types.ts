import { vi } from "date-fns/locale";
import { z } from "zod";

export const formBrideScheme = z.object({
  mr: z.string().default(""),
  mrName: z.string().default(""),
  mrTitle: z.string().default(""),
  mrProfile: z.string().default(""),
  mrs: z.string().default(""),
  mrsName: z.string().default(""),
  mrsTitle: z.string().default(""),
  mrsProfile: z.string().default(""),
  startDate: z.date().optional(),
  startHour: z.number().min(0).max(23).default(0),
  startMinute: z.number().min(0).max(59).default(0),
  timeZone: z.string().default(""),
  location: z.string().default(""),
  address: z.string().default(""),
  groomImage: z.string().default(""),
  brideImage: z.string().default(""),
  cover: z.string().default(""),
  gallery: z.array(z.string()).default([]),
  video: z.string().default(""),
  music: z.string().default(""),
});

export type CreateInvitationType = z.infer<typeof formBrideScheme>;

export const formBrideLabels = {
  mr: "Mr.",
  mrName: "Mr. Name",
  mrTitle: "Mr. Title",
  mrProfile: "Mr. Profile",
  mrs: "Mrs.",
  mrsName: "Mrs. Name",
  mrsTitle: "Mrs. Title",
  mrsProfile: "Mrs. Profile",
  startDate: "Start Date",
  startHour: "Start Hour",
  startMinute: "Start Minute",
  timeZone: "Time Zone",
  location: "Location",
  address: "Address",
  groomImage: "Mempelai Pria",
  brideImage: "Mempelai Wanita",
  cover: "Foto Cover",
  gallery: "Foto Galeri",
  video: "Video",
  music: "Musik Background",
};

// Additional Information
export const formAdditionalInformationScheme = formBrideScheme.pick({
  groomImage: true,
  brideImage: true,
  cover: true,
  gallery: true,
  video: true,
  music: true,
});

export type AdditionalInformationType = z.infer<typeof formAdditionalInformationScheme>;