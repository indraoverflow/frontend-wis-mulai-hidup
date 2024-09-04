import FacebookButton from "@/components/auth/FacebookButton";
import GoogleButton from "@/components/auth/GoogleButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Card className="flex flex-col gap-6 w-full max-w-[404px] bg-surface border-none shadow-none">
        <CardHeader className="flex gap-4 p-0">
          <Image
            src="/images/logo.png"
            alt="mulai hidup logo"
            width={120}
            height={120}
            className="mx-auto"
          />
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
                <Input 
                  type="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  type="password"
                  id="password"
                  placeholder="Kata Sandi"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 justify-center">
          <Button>Login</Button>
          <p className="text-sm">
            <span className="text-primary">
              <Link href="">Lupa Kata Sandi</Link>
            </span>
            {" or "}
            <span className="text-primary">
              <Link href="/register">Buat Akun</Link>
            </span>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
