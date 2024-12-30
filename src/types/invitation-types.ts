import { z } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 10; // 10MB
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

const imageSchema = z
  .instanceof(File)
  .optional()
  .refine((file) => {
    return !file || file.size <= MAX_UPLOAD_SIZE;
  }, "File size must be less than 10MB")
  .refine((file) => {
    return (
      !file ||
      ACCEPTED_FILE_TYPES.includes(file.type) ||
      file.type.includes("text/html")
    );
  }, "File must be an image");

export const formBrideScheme = z.object({
  themeId: z.number().default(1),
  mr: z.string().default(""),
  mrName: z.string().min(1, "Nama lengkap pria tidak boleh kosong").default(""),
  mrNickname: z
    .string()
    .min(1, "Nama panggilan pria tidak boleh kosong")
    .default(""),
  mrBirthDate: z.string().default(""),
  mrTitle: z.string().default(""),
  mrFather: z.string().default(""),
  mrMother: z.string().default(""),
  mrProfile: z.string().default(""),
  mrs: z.string().default(""),
  mrsName: z
    .string()
    .min(1, "Nama lengkap wanita tidak boleh kosong")
    .default(""),
  mrsNickname: z
    .string()
    .min(1, "Nama panggilan wanita tidak boleh kosong")
    .default(""),
  mrsBirthDate: z.string().default(""),
  mrsTitle: z.string().default(""),
  mrsFather: z.string().default(""),
  mrsMother: z.string().default(""),
  mrsProfile: z.string().default(""),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  startHour: z.number().min(0).max(23).default(0),
  endHour: z.number().min(0).max(23).default(0),
  startMinute: z.number().min(0).max(59).default(0),
  endMinute: z.number().min(0).max(59).default(0),
  timeZone: z.string().default(""),
  location: z.string().default(""),
  address: z.string().default(""),
  videoUrl: z.string().url().optional().or(z.literal("")).default(""),
  weddingCeremony: z
    .object({
      title: z.string().default("Akad"),
      startDate: z.date().optional(),
      endDate: z.date().optional(),
      startHour: z.number().min(0).max(23).default(0),
      startMinute: z.number().min(0).max(59).default(0),
      endHour: z.number().min(0).max(23).default(0),
      endMinute: z.number().min(0).max(59).default(0),
      location: z.string().default(""),
      address: z.string().default(""),
      timeZone: z.string().default(""),
    })
    .default({}),
  accountBank: z
    .tuple([
      z.object({
        name: z
          .string()
          .min(1, "Nama pemilik rekening tidak boleh kosong")
          .default(""),
        number: z
          .string()
          .min(1, "Nomor rekening tidak boleh kosong")
          .default(""),
        bank: z.string().min(1, "Bank harus dipilih").default(""),
      }),
    ])
    .rest(
      z.object({
        name: z.string().default(""),
        number: z.string().default(""),
        bank: z.string().default(""),
      })
    )
    .default([{}]),
  groomImage: z.string().default(""),
  brideImage: z.string().default(""),
  groomStory: z.string().default(""),
  brideStory: z.string().default(""),
  // cover: z.string().default(""),
  gallery: z.array(z.string()).default([]),
  // video: z.string().default(""),
  // music: z.string().default(""),
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
  groomStory: "Story Mempelai Pria",
  brideStory: "Story Mempelai Wanita",
  // cover: "Foto Cover",
  gallery: "Foto Galeri",
  // video: "Video",
  // music: "Musik Background",
};

// Additional Information
export const formAdditionalInformationScheme = formBrideScheme.pick({
  groomImage: true,
  brideImage: true,
  groomStory: true,
  brideStory: true,
  // cover: true,
  // gallery: true,
  // video: true,
  // music: true,
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
  time_zone: z.string().default("WIB"),
  location: z.string().default(""),
  address: z.string().default(""),
  theme_id: z.number().optional().default(1),
  video_url: z.string().url().optional().or(z.literal("")).default(""),
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
    .array(
      z
        .object({
          name: z.string().optional(),
          number: z.string().optional(),
          bank: z.string().optional(),
        })
        .nullable()
    )
    .default([]),
});

export const uploadMediaScheme = z.object({
  man_media: imageSchema.optional(),
  woman_media: imageSchema.optional(),
  our_story_man: imageSchema.optional(),
  our_story_woman: imageSchema.optional(),
  wedding_media: z
    .array(
      z
        .instanceof(File)
        .refine((file) => {
          return !file || file.size <= MAX_UPLOAD_SIZE;
        }, "File size must be less than 10MB")
        .refine((file) => {
          return (
            !file ||
            ACCEPTED_FILE_TYPES.includes(file.type) ||
            file.type.includes("text/html")
          );
        }, "File must be an image")
    )
    .default([]),
});

export type CreateInvitationType = z.infer<typeof formBrideScheme>;
export type AdditionalInformationType = z.infer<
  typeof formAdditionalInformationScheme
>;
export type CreateInvitationRequest = z.infer<
  typeof createInvitationRequestScheme
>;

export type UploadMediaType = z.infer<typeof uploadMediaScheme>;
