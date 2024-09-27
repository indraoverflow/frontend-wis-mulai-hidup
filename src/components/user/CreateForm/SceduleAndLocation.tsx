import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreateInvitationType } from "@/types/invitation-types";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { DatePicker } from "./DatePicker";
import { Textarea } from "@/components/ui/textarea";
import TimePicker from "./TimePicker";
import TimezoneSelector from "./TimezoneSelector";

export default function ScheduleAndLocation({
  form,
}: {
  form: UseFormReturn<CreateInvitationType, any, undefined>;
}) {
  return (
    <div className="min-h-screen bg-surface py-8">
      <div className="bg-white p-6">
        <div className="container mx-auto max-w-5xl">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="mb-6 flex flex-col gap-3">
                <FormLabel>Pilih Tanggal</FormLabel>
                <DatePicker field={field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <TimePicker form={form} />
          <TimezoneSelector form={form} />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="mb-6 flex flex-col gap-3">
                <FormLabel className="hidden md:block">Lokasi</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white placeholder:text-philippine-silver"
                    placeholder="Lokasi"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="mb-6 flex flex-col gap-3">
                <FormLabel className="hidden md:block">Alamat</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-white placeholder:text-philippine-silver"
                    placeholder="Alamat"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
