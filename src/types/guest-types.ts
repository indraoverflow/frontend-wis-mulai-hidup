import { z } from "zod";

export interface Guest{    
    wedding_unique_id: string;
    name: string;
    phone_number: string;
    status?: string;
    unique_id?: string;
    share_link?: string;
}

export const formGuestScheme = z.object({
    wedding_unique_id: z.string().default(""),
    name: z.string().default(""),
    phone_number: z.string().default(""),
    status: z.string().optional(),
    unique_id: z.string().optional(),
    share_link: z.string().optional(),
});

export type GuestType = z.infer<typeof formGuestScheme>;

// ambil hanya weeding_unique_id, name, phone_number
export const formCreateGuestScheme = formGuestScheme.pick({
    wedding_unique_id: true,
    name: true,
    phone_number: true,
});

export type CreateGuestType = z.infer<typeof formCreateGuestScheme>;