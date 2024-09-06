import { z } from "zod";

export const userLoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email tidak boleh kosong")
    .email("Format email tidak valid"),
  password: z.string().min(6, "Kata sandi minimal 6 karakter"),
});

export type UserLoginType = z.infer<typeof userLoginSchema>;
