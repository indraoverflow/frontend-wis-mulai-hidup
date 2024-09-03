import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Button } from "../ui/button";

export default function FacebookButton() {
  return (
    <Button variant="outline" className="flex gap-2 text-2xl flex-1">
      <FaFacebook width={24} height={24} color="#0866ff" />
      <span className="text-sm">Facebook</span>
    </Button>
  );
}
