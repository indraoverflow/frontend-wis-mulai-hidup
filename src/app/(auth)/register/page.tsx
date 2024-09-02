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
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <Card className="w-[480px]">
        <CardHeader>
          <CardTitle className="text-center mb-4 text-blue-400">
            Mulai Hidup
          </CardTitle>
          <CardDescription className="text-center">
            Buat undangan digital anda sekarang dan bagikan momen bahagia anda
            kepada tamu dan rekan spesial.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nama">Nama</Label>
                <Input type="text" id="nama" placeholder="Nama" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone_number">Nomor Handphone</Label>
                <Input
                  type="number"
                  id="phone_number"
                  placeholder="Nomor Handphone"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="re_password">Retype Password</Label>
                <Input
                  type="password"
                  id="re_password"
                  placeholder="Retype Password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4 justify-center">
          <Button>Buat Akun</Button>
          <p className="text-slate-800">
            Sudah punya akun?{" "}
            <span className="text-blue-600">
              <Link href="/login">Login</Link>
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
