import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionWrapper from "@/components/auth/SessionWrapper";

import StoreProvider from "@/store/StoreProvider";
import "./../styles/globals.css";
import { elza, minervaModern } from "@/lib/fonts";
import { Suspense } from "react";
import Loading from "@/components/shared/Loading";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mulai Hidup",
  description:
    "Wedding invitation service, mulai hudup, undangan syar'i, undangan pernikahan, undangan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${elza.className} min-h-dvh flex flex-col`}>
        <Suspense fallback={<Loading />}>
          <StoreProvider>
            <SessionWrapper>{children}</SessionWrapper>
          </StoreProvider>
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
