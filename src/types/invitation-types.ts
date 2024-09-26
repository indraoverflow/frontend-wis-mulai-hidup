import { z } from "zod";

export const formBrideScheme = z.object({
  mr: z.string(),
  mrName: z.string(),
  mrTitle: z.string(),
  mrProfile: z.string(),
  mrs: z.string(),
  mrsName: z.string(),
  mrsTitle: z.string(),
  mrsProfile: z.string(),
});
