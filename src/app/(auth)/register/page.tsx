import React from "react";
import Image from "next/image";
import FacebookButton from "@/components/auth/FacebookButton";
import GoogleButton from "@/components/auth/GoogleButton";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import RegisterForm from "../../../components/auth/RegisterForm";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Card className="flex flex-col gap-6 w-full max-w-[404px] bg-surface border-none shadow-none">
        <CardHeader className="flex gap-4 p-0">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="mulai hidup logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </Link>
          <CardDescription className="text-center font-normal  text-sm text-foreground">
            Buat undangan digital anda sekarang dan bagikan momen bahagia anda
            kepada tamu dan rekan-rekan spesial.
          </CardDescription>

          <div className="flex justify-between gap-4 md:gap-10">
            <FacebookButton />
            <GoogleButton />
          </div>
          <p className="text-center text-sm">atau</p>
        </CardHeader>
        <RegisterForm />
      </Card>
    </>
  );
}
