"use client";
import { useGetUserQuery } from "@/store/features/dummy/api/apiSlice";
import React from "react";

type Props = {};

export default function User({}: Props) {
  const { data: user, isLoading } = useGetUserQuery("1");

  console.log(user);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="w-10/12 max-w-[500px] mx-auto  break-words ">
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
