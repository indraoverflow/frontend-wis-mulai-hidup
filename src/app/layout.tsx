import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { userApi } from "@/store/features/dummy/api/apiSlice";
import SessionWrapper from "@/components/auth/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mulai Hidup",
  description:
    "Wedding invirtation service, mulai hudup, undangan syar'i, undangan pernikahan, undangan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <SessionWrapper>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </SessionWrapper>
    </StoreProvider>
  );
}
