import FacebookButton from "@/components/auth/FacebookButton";
import GoogleButton from "@/components/auth/GoogleButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Card className="flex flex-col gap-6 w-full max-w-[404px] bg-surface border-none">
        <CardHeader className="flex gap-4 p-0">
          <Image
            src="/images/logo.png"
            alt="mulai hidup logo"
            width={120}
            height={120}
            className="mx-auto"
          />
          <CardDescription className="text-center font-normal  text-sm text-foreground">
            Buat undangan digital anda sekarang dan bagikan momen bahagia anda
            kepada tamu dan rekan spesial.
          </CardDescription>

          <div className="flex justify-between gap-4 md:gap-10">
            <FacebookButton />
            <GoogleButton />
          </div>
          <p className="text-center text-sm">atau</p>
        </CardHeader>
        <CardContent className="p-0">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input type="text" id="nama" placeholder="Nama" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  type="number"
                  id="phone_number"
                  placeholder="Nomor Handphone"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input type="password" id="password" placeholder="Kata Sandi" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  type="password"
                  id="re_password"
                  placeholder="Konfirmasi Kata Sandi"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4 justify-center p-0">
          <Button className="px-6">Buat Akun</Button>
          <p className="text-foreground text-sm">
            Sudah punya akun?{" "}
            <span className="text-primary">
              <Link href="/login">Login</Link>
            </span>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
