"use client";

import React from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  userRegisterSchema,
  UserRegisterType,
} from "@/types/user-register-type";
import ErrorMessage from "@/components/auth/ErrorMessage";
import { registerUser } from "@/actions/registerUser";
import { RxReload } from "react-icons/rx";
import { FaSpinner } from "react-icons/fa";

type Props = {};

export default function RegisterForm({}: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<UserRegisterType>({
    resolver: zodResolver(userRegisterSchema),
  });

  const onSubmit: SubmitHandler<UserRegisterType> = async (data) => {
    await registerUser(data);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <CardContent className="p-0">
        <div className="grid items-center w-full gap-4">
          <div className="flex flex-col space-y-1.5">
            <Input
              type="text"
              id="name"
              placeholder="Nama"
              {...register("name")}
            />
            {errors.name && <ErrorMessage error={errors.name.message} />}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Input
              type="number"
              id="phone_number"
              placeholder="Nomor Handphone"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <ErrorMessage error={errors.phoneNumber.message} />
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <ErrorMessage error={errors.email.message} />}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Input
              type="password"
              id="password"
              placeholder="Kata Sandi"
              {...register("password")}
            />
            {errors.password && (
              <ErrorMessage error={errors.password.message} />
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Input
              type="password"
              id="password_confirm"
              placeholder="Konfirmasi Kata Sandi"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm && (
              <ErrorMessage error={errors.passwordConfirm.message} />
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center gap-4 p-0">
        <Button
          className="px-6 rounded"
          type="submit"
          aria-disabled={isSubmitting}
        >
          {isSubmitting || isLoading ? (
            <>
              <FaSpinner className="w-4 h-4 mr-2 animate-spin" /> Loading...
            </>
          ) : (
            "Buat Akun"
          )}
        </Button>
        <p className="flex gap-2 text-sm text-foreground">
          Sudah punya akun?{" "}
          <span className="text-primary">
            <Link href="/login">Login</Link>
          </span>
        </p>
      </CardFooter>
    </form>
  );
}
