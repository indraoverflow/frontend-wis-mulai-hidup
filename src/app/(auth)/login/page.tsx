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
import LoginForm from "../../../components/auth/LoginForm";

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
        <LoginForm />
      </Card>
    </>
  );
}
