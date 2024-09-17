"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ErrorMessage from "@/components/auth/ErrorMessage";
import { userLoginSchema, UserLoginType } from "@/types/user-login-type";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import { Alert, AlertDescription } from "../ui/alert";
import { RxCrossCircled } from "react-icons/rx";
import { errorMapper } from "@/lib/error-mapper";

type Props = {};

export default function LoginForm({}: Props) {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserLoginType>({
    resolver: zodResolver(userLoginSchema),
  });
  const [serverError, setServerError] = useState<string[]>([]);

  const onSubmit: SubmitHandler<UserLoginType> = async (data) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      });
      setServerError([]);
      if (!res?.error) {
        push("/");
      } else {
        throw new Error(res.error);
      }
    } catch (error) {
      setServerError([errorMapper(`${(error as Error).message}`)]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {serverError.length > 0 && (
        <Alert variant="destructive">
          <AlertDescription className="flex items-center justify-between">
            {serverError}{" "}
            <span onClick={() => setServerError([])} className="cursor-pointer">
              <RxCrossCircled className="h-5 w-5" />
            </span>
          </AlertDescription>
        </Alert>
      )}
      <CardContent className="p-0">
        <fieldset disabled={isSubmitting}>
          <div className="grid items-center w-full gap-4">
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
        </fieldset>
      </CardContent>
      <CardFooter className="flex flex-col justify-center gap-4">
        <Button className="px-6 rounded">
          {isSubmitting ? (
            <>
              <FaSpinner className="w-4 h-4 mr-2 animate-spin" /> Loading...
            </>
          ) : (
            "Login"
          )}
        </Button>
        <p className="flex gap-2 text-sm">
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
