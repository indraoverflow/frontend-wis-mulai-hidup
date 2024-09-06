import { z } from "zod";

export const userRegisterSchema = z
  .object({
    name: z.string().min(1, "Nama tidak boleh kosong"),
    phoneNumber: z.string().min(1, "Nomor handphone tidak boleh kosong"),
    email: z.string().email("Format email tidak valid"),
    password: z.string().min(6, "Kata sandi minimal 6 karakter"),
    passwordConfirm: z
      .string()
      .min(6, "Konfirmasi Kata sandi minimal 6 karakter"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Konfirmasi Kata sandi tidak sama",
    path: ["passwordConfirm"],
  });

export type UserRegisterType = z.infer<typeof userRegisterSchema>;
