"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useAppDispatch } from "@/lib/hooks";
import { cn } from "@/lib/utils/tailwind-util";
import { useGetInvitationByUserIdQuery } from "@/store/features/invitation/wedding-reception-slice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function MyInvitationPage() {
  const dispatch = useAppDispatch();
  const session = useSession();
  const { data } = useGetInvitationByUserIdQuery(
    session.data?.user?.id as string
  );

  useEffect(() => {
    dispatch({ type: "reset" });
  }, [data]);

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
                <Card className={cn("border-0 shadow max-w-80")} key={i + 1}>
                  <CardContent className="p-3 border-md flex justify-center shadow-none">
                    <Image
                      src={`/images/template/template-${invitation.theme_id}.png`}
                      alt={`template ${invitation.theme_id}`}
                      width={262}
                      height={370}
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col justify-center items-stretch gap-2 py-3">
                    <Link
                      href={`/my-invitation/guest/${invitation.unique_id}`}
                      className={cn(
                        "flex-1 text-center min-h-7",
                        buttonVariants({ size: "sm" })
                      )}
                    >
                      Kelola Tamu
                    </Link>

                    <Link
                      className={cn(
                        "text-primary flex-1 text-center min-h-7",
                        buttonVariants({ variant: "outline", size: "sm" })
                      )}
                      href={`/${invitation.unique_id}`}
                    >
                      Preview
                    </Link>
                    <hr className="border-primary mt-2" />
                    <Link
                      href={`/my-invitation/edit/${session.data?.user?.id}/${invitation.unique_id}`}
                      className={cn(
                        "text-primary flex-1 text-center min-h-7",
                        buttonVariants({ size: "sm", variant: "outline" })
                      )}
                    >
                      Edit Undangan
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
