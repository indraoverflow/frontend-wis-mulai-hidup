import { z } from "zod";

export const formBrideScheme = z.object({
  themeId: z.number().default(0),
  mr: z.string().default(""),
  mrName: z.string().default(""),
  mrNickname: z.string().default(""),
  mrBirthDate: z.string().default(""),
  mrTitle: z.string().default(""),
  mrFather: z.string().default(""),
  mrMother: z.string().default(""),
  mrProfile: z.string().default(""),
  mrs: z.string().default(""),
  mrsName: z.string().default(""),
  mrsNickname: z.string().default(""),
  mrsBirthDate: z.string().default(""),
  mrsTitle: z.string().default(""),
  mrsFather: z.string().default(""),
  mrsMother: z.string().default(""),
  mrsProfile: z.string().default(""),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  startHour: z.number().min(0).max(23).default(0),
  startMinute: z.number().min(0).max(59).default(0),
  endHour: z.number().min(0).max(23).default(0),
  endMinute: z.number().min(0).max(59).default(0),
  timeZone: z.string().default(""),
  location: z.string().default(""),
  address: z.string().default(""),
  weddingCeremony: z
    .object({
      title: z.string().default(""),
      startHour: z.number().min(0).max(23).default(0),
      startMinute: z.number().min(0).max(59).default(0),
      endHour: z.number().min(0).max(23).default(0),
      endMinute: z.number().min(0).max(59).default(0),
      location: z.string().default(""),
      address: z.string().default(""),
    })
    .default({}),
  accoutBank: z
    .array(z.object({ name: z.string(), number: z.string(), bank: z.string() }))
    .default([]),
  groomImage: z.string().default(""),
  brideImage: z.string().default(""),
  cover: z.string().default(""),
  gallery: z.array(z.string()).default([]),
  video: z.string().default(""),
  music: z.string().default(""),
});

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

export const createInvitationRequestScheme = z.object({
  title_reception: z.string().optional().default(""),
  name_man: z.string().default(""),
  nickname_man: z.string().default(""),
  birthdate_man: z.string().default(""),
  prefix_man: z.string().default(""),
  title_man: z.string().default(""),
  father_man: z.string().default(""),
  mother_man: z.string().default(""),
  description_man: z.string().default(""),
  name_woman: z.string().default(""),
  nickname_woman: z.string().default(""),
  birthdate_woman: z.string().default(""),
  prefix_woman: z.string().default(""),
  title_woman: z.string().default(""),
  father_woman: z.string().default(""),
  mother_woman: z.string().default(""),
  description_woman: z.string().default(""),
  start_date: z.string().default(""),
  end_date: z.string().optional(),
  start_time: z.string().default(""),
  end_time: z.string().default(""),
  time_zone: z.string().default(""),
  location: z.string().default(""),
  address: z.string().default(""),
  theme_id: z.number().optional().default(0),
  wedding_ceremony: z
    .object({
      title_ceremony: z.string().default(""),
      start_time: z.string().default(""),
      end_time: z.string().default(""),
      start_date: z.string().default(""),
      end_date: z.string().default(""),
      location: z.string().default(""),
      address: z.string().default(""),
    })
    .optional(),
  account_bank: z
    .array(z.object({ name: z.string(), number: z.string(), bank: z.string() }))
    .default([]),
});

export type CreateInvitationType = z.infer<typeof formBrideScheme>;
export type AdditionalInformationType = z.infer<
  typeof formAdditionalInformationScheme
>;
export type CreateInvitationRequest = z.infer<
  typeof createInvitationRequestScheme
>;
