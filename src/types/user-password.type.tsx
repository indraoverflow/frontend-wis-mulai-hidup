import { z } from "zod";

export interface userPassword{
    password: string;
}

export const formUserPasswordScheme = z.object({
    password: z.string().min(6, "Kata sandi minimal 6 karakter"),  
});

export type EditPasswordType = z.infer<typeof formUserPasswordScheme>;