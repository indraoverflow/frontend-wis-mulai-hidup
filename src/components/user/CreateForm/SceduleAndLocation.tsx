import { CreateInvitationType } from "@/types/invitation-types";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import ScheduleFieldGroup from "./ScheduleFieldGroup";

export default function ScheduleAndLocation({
  form,
}: {
  form: UseFormReturn<CreateInvitationType, any, undefined>;
}) {
  return (
    <div className="min-h-screen bg-surface py-8">
      <div className="bg-white p-6">
        <ScheduleFieldGroup form={form} type="akad" />
        <ScheduleFieldGroup form={form} type="resepsi" />
      </div>
    </div>
  );
}
