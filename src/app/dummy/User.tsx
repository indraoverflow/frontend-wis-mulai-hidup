"use client";
import { minervaModern } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useGetUserQuery } from "@/store/features/dummy/api/apiSlice";
import React from "react";

type Props = {};

export default function User({}: Props) {
  const { data: user, isLoading } = useGetUserQuery("1");

  console.log(user);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div
      className={cn(
        "w-10/12 max-w-[500px] mx-auto  break-words",
        minervaModern.className
      )}
    >
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
