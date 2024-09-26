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
});

export type CreateInvitationType = z.infer<typeof formBrideScheme>;
