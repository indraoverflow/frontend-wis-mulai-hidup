"use client";

import { Button } from "@/components/ui/button";
import { minervaModern } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <h1
        className={cn(
          "text-7xl font-bold text-blue-400",
          minervaModern.className
        )}
      >
        Mulai Hidup
      </h1>
      <p className={cn("text-3xl ", minervaModern.className)}>
        Wedding Invitation Service
      </p>
      {session && (
        <p className="text-base font-semibold text-center text-blue-400 bg-blue-100 p-2 rounded-md">
          Welcome, {session.user?.name} !
        </p>
      )}
      <div className="flex gap-4">
        {session ? (
          <Button onClick={() => signOut()}>Log Out</Button>
        ) : (
          <>
            <Link href="/register">
              <Button variant="outline" size="lg">
                Buat Akun
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg">Masuk</Button>
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
