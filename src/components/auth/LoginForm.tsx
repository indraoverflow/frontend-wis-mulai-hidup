"use client";

import React from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ErrorMessage from "@/components/auth/ErrorMessage";
import { userLoginSchema, UserLoginType } from "@/types/user-login-type";

type Props = {};

export default function LoginForm({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginType>({
    resolver: zodResolver(userLoginSchema),
  });

  const onSubmit: SubmitHandler<UserLoginType> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <CardContent className="p-0">
        <div className="grid w-full items-center gap-4">
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
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 justify-center">
        <Button className="px-6 rounded">Login</Button>
        <p className="text-sm flex gap-2">
          <span className="text-primary">
            <Link href="">Lupa Kata Sandi</Link>
          </span>
          {" or "}
          <span className="text-primary">
            <Link href="/register">Buat Akun</Link>
          </span>
        </p>
      </CardFooter>
    </form>
  );
}
