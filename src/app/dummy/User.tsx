"use client";
import { minervaModern } from "@/lib/fonts";
import { cn } from "@/lib/utils/tailwind-util";
import { useGetUserQuery } from "@/store/features/dummy/api/apiSlice";
import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

export default function User({}: Props) {
  // const { data: user, isLoading } = useGetUserQuery("1");
  const { data: session } = useSession();

  // console.log(session);

  return (
    <div
      className={cn(
        "w-10/12 max-w-[500px] mx-auto  break-words",
        minervaModern.className
      )}
    >
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
