import { z } from "zod";

export interface UserProfile {
    email: string;
    name: string;
    phone_number: string;
    birth_date?: Date;
    gender?: string;
}

export const formUserProfileScheme = z.object({
    email: z.string().email().optional(),
    name: z.string().default(""),
    phone_number: z.string().default(""),
    // birth_date: z.date().optional().nullable(),
    gender: z.string().optional(),
});

export type EditProfileType = z.infer<typeof formUserProfileScheme>;