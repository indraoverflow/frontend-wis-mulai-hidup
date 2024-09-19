import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type Props = {};

export default function TestimoniCard({}: Props) {
  return (
    <Card>
      <CardContent className="p-12">
        <h1 className="text-5xl font-semibold mb-12">“Quote”</h1>
        <div className="flex items-center gap-6">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="rounded-full"
              width={80}
              height={80}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardContent>
            <h4 className="text-xl">Title</h4>
            <p className="text-xl">Description</p>
          </CardContent>
        </div>
      </CardContent>
    </Card>
  );
}
