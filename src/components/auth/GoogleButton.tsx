"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

export default function GoogleButton() {
  const [loading, setLoading] = React.useState(false);
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await signIn("google");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      variant="outline"
      className="flex flex-1 gap-2 text-2xl bg-white"
      onClick={signInWithGoogle}
    >
      <FcGoogle width={24} height={24} />
      <span className="text-sm">{loading ? "Loading..." : "Google"}</span>
    </Button>
  );
}
