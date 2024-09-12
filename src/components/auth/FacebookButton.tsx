import React from "react";
import { Button } from "../ui/button";
import { FaFacebook } from "react-icons/fa";

export default function FacebookButton() {
  return (
    <Button variant="outline" className="flex flex-1 gap-2 text-2xl bg-white">
      <FaFacebook width={24} height={24} color="#0866ff" />
      <span className="text-sm">Facebook</span>
    </Button>
  );
}
