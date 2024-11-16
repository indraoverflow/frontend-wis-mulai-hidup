"use client";
import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FiCopy } from "react-icons/fi";
import { useToast } from "@/lib/hooks/use-toast";

interface AccountInfo {
  name: string;
  bankLogo?: string;
  number: string;
  bank: string;
}

interface DigitalWalletCardProps {
  title: string;
  note: string;
  accounts: (AccountInfo | undefined)[];
}

const DigitalWalletCard: React.FC<DigitalWalletCardProps> = ({
  title,
  note,
  accounts,
}) => {
  const { toast } = useToast();
  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    toast({
      description: "Bank Account Number Copied",
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray text-3xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-vampire-black text-sm font-light mb-2">{note}</p>
        {accounts.map((account, index) =>
          account ? (
            <div key={index} className="space-y-2">
              <p className="text-black font-bold flex items-center gap-2">
                {account?.name}
                <Image
                  src="/images/logo/bni.png"
                  alt="Bank Logo"
                  width={50}
                  height={50}
                  className="inline-block"
                />
              </p>
              <div className="relative">
                <Input
                  value={account?.number}
                  readOnly
                  className="pr-10 border-0 bg-white shadow-light-carmine-pink shadow-sm"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                >
                  <FiCopy
                    className="h-4 w-4"
                    onClick={() => handleCopy(account?.number)}
                  />
                </Button>
              </div>
            </div>
          ) : null
        )}
      </CardContent>
    </Card>
  );
};

export default DigitalWalletCard;
