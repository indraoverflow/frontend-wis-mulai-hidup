import SubmitButton from "@/components/button/submit";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CreateInvitationType } from "@/types/invitation-types";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import BrideBiodata from "./BrideBiodata";
import InputRekening from "./InputRekening";
import { ArrowUp } from "lucide-react";

export default function BrideInformationPage({
  form,
}: {
  form: UseFormReturn<CreateInvitationType, any, undefined>;
}) {
  return (
    <div className="min-h-screen bg-surface py-8">
      <div className="bg-surface p-6">
        <div className="container mx-auto max-w-5xl">
          <p className="mb-3 text-sm md:text-base font-semibold">
            Mempelai Pria
          </p>
          <BrideBiodata form={form} type="man" />
          <hr className="border-primary my-6" />
          <p className="mb-3 text-sm md:text-base font-semibold">
            Mempelai Wanita
          </p>
          <BrideBiodata form={form} type="woman" />
          <hr className="border-primary my-6" />
          <InputRekening form={form} type="man" />
          <InputRekening form={form} type="woman" />
        </div>
      </div>
    </div>
  );
}
