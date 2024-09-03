import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

export default function GoogleButton() {
  return (
    <Button variant="outline" className="flex gap-2 text-2xl flex-1">
      <FcGoogle width={24} height={24} />
      <span className="text-sm">Google</span>
    </Button>
  );
}