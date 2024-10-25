"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils/tailwind-util";
import { useGetInvitationByUserIdQuery } from "@/store/features/invitation/wedding-reception-slice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";

export default function MyInvitationPage() {
  const session = useSession();
  const { data } = useGetInvitationByUserIdQuery(
    session.data?.user?.id as string
  );
  return (
    <div className="bg-surface flex flex-col items-center px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <Link href="/my-invitation/create">
            <Button className="mb-6" size="lg">
              Buat Undangan Digital
            </Button>
          </Link>
          <p>
            Buat Undangan Digital Anda sekarang. Baik undangan pernikahan,
            undangan ulang tahun, atau undangan untuk kegiatan lain! Buat
            undangan yang memudahkan anda untuk berbagi informasi kepada tamu
            anda dan tentunya ramah lingkungan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-20">
            {data &&
              data.map((invitation: any, i: number) => (
                <Card className={cn("border-0 shadow-none")} key={i + 1}>
                  <CardContent className="p-3 border rounded-md">
                    <Image
                      src={`/images/template/template-${invitation.theme_id}.png`}
                      alt={`template ${invitation.theme_id}`}
                      width={262}
                      height={370}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-center items-center gap-1 py-6">
                    <Button size="sm" onClick={() => {}}>
                      Publish Tema
                    </Button>
                    <Link
                      className={cn(
                        "text-primary",
                        buttonVariants({ variant: "ghost", size: "sm" })
                      )}
                      href={`/invitation/${invitation.id}`}
                    >
                      Preview
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
