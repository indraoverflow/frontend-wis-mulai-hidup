"use client";

import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import {
  useAddGuestMessageMutation,
  useGetGuestByUniqueIdQuery,
} from "@/store/features/message/message-slice";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSpinner } from "react-icons/fa";

interface FeedbackCardProps {
  title: string;
  nameLabel: string;
  messageLabel: string;
  attendanceLabel: string;
  buttonText: string;
  uniqueId?: string;
  to: string | null;
  isTemplate?: boolean;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  title,
  nameLabel,
  messageLabel,
  attendanceLabel,
  buttonText,
  uniqueId,
  to,
  isTemplate = false,
}) => {
  const [addMessage, { isLoading }] = useAddGuestMessageMutation();
  const { data } = useGetGuestByUniqueIdQuery(to);

  const messageScheme = z.object({
    message: z.string().min(1, "Message can't be empty"),
    status: z.union([z.literal("YES"), z.literal("MAYBE"), z.literal("NO")]),
    name: z.string().min(1, "Name can't be empty"),
    guestUniqueId: z.string(),
  });

  type MessageType = z.infer<typeof messageScheme>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<MessageType>({
    resolver: zodResolver(messageScheme),
  });

  useEffect(() => {
    if (data?.data) {
      setValue("name", data?.data?.name ?? "");
    }
  }, [data?.data, setValue]);

  useEffect(() => {
    setValue("guestUniqueId", to ?? "");
  }, [setValue, to]);

  const onSubmit: SubmitHandler<MessageType> = async (data) => {
    try {
      const mutationData = {
        message: data.message,
        status: data.status as string,
        name: data.name,
        guestUniqueId: data.guestUniqueId,
      };
      addMessage(mutationData);
      setValue("message", "");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-black text-center">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              <span className="text-red-500">*</span>
              {nameLabel}
            </Label>
            <Input
              id="name"
              className="border-platinum bg-cultured disabled:cursor-pointer disabled:opacity-100"
              disabled={!to}
              {...register("name")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              <span className="text-red-500">*</span>
              {messageLabel}
            </Label>
            <Textarea
              id="message"
              className="resize-none border-platinum bg-cultured disabled:cursor-pointer disabled:opacity-100"
              rows={4}
              disabled={!to}
              {...register("message")}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              <span className="text-red-500">*</span>
              {attendanceLabel}
            </Label>
            <RadioGroup
              defaultValue="YES"
              className="flex gap-0 rounded-[20px] overflow-hidden shadow-sm border border-platinum w-fit p-0 disabled:cursor-pointer disabled:opacity-100"
              disabled={!to}
              {...register("status")}
            >
              <div className="flex items-center ">
                <RadioGroupItem value="YES" id="yes" className="peer hidden " />
                <Label
                  htmlFor="yes"
                  className="peer-data-[state=checked]:bg-fuchsia-500 peer-data-[state=checked]:text-white peer-data-[state=checked]:bg-opacity-70 px-6 py-4 bg-cultured "
                >
                  Yes
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem
                  value="MAYBE"
                  id="maybe"
                  className="peer hidden"
                />
                <Label
                  htmlFor="maybe"
                  className="peer-data-[state=checked]:bg-fuchsia-500 peer-data-[state=checked]:text-white peer-data-[state=checked]:bg-opacity-70 px-6 py-4 bg-cultured"
                >
                  Maybe
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="NO" id="no" className="peer hidden" />
                <Label
                  htmlFor="no"
                  className="peer-data-[state=checked]:bg-fuchsia-500 peer-data-[state=checked]:text-white peer-data-[state=checked]:bg-opacity-70 px-6 py-4 bg-cultured"
                >
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button
            variant="dark"
            size="lg"
            className="mx-auto rounded-2xl"
            disabled={!data}
          >
            {isLoading ? (
              <>
                <FaSpinner className="w-4 h-4 mr-2 animate-spin" /> Sending...
              </>
            ) : (
              buttonText
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default FeedbackCard;
