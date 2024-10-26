"use client";

import SubmitButton from "@/components/button/submit";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/lib/axios/axios";
import { useEditPasswordMutation } from "@/store/features/user/password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RxCrossCircled } from "react-icons/rx";
import { z } from "zod";

const formPasswordSchema = z.object({
  password: z.string().min(6, "Kata sandi minimal 6 karakter"),
});

export default function EditPasswordPage() {
  const { data: session } = useSession();

  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const form = useForm({
    resolver: zodResolver(formPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const [editPassword, editPasswordResult] = useEditPasswordMutation();

  async function onSubmit(values: z.infer<typeof formPasswordSchema>) {
    try {
      const res = await editPassword({
        token: session?.user?.accessToken as string,
        data: {
          password: values.password,
        },
      });

      if (!res.error) {
        setAlert({
          type: "success",
          message: "Kata sandi berhasil diubah",
        });
        form.reset();
      }
    } catch (error) {
      setAlert({
        type: "error",
        message: "Terjadi kesalahan, silahkan coba lagi",
      });
      // console.log(error);
    }
  }

  return (
    <div className="bg-surface min-h-screen flex flex-col items-center px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h3 className="text-2xl font-bold text-[#B3B3B3]">Kata Sandi</h3>
        <hr className="my-3" />
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Edit Kata Sandi</CardTitle>
            <hr className="border-primary" />
          </CardHeader>
          <CardContent>
            {alert && (
              <Alert
                variant={alert.type === "success" ? "primary" : "destructive"}
                className="mb-6 flex justify-between items-center"
              >
                <AlertDescription>
                  <AlertTitle>
                    {alert.type === "success" ? "Berhasil" : "Gagal"}
                  </AlertTitle>
                  {alert.message}
                </AlertDescription>
                <span onClick={() => setAlert(null)} className="cursor-pointer">
                  <RxCrossCircled className="h-5 w-5" />
                </span>
              </Alert>
            )}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SubmitButton isSubmitting={form.formState.isSubmitting} />
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
