import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CreateInvitationType } from "@/types/invitation-types";
import { UseFormReturn } from "react-hook-form";
import { DatePicker } from "./DatePicker";
import TimePicker from "./TimePicker";
import TimezoneSelector from "./TimezoneSelector";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  form: UseFormReturn<CreateInvitationType, any, undefined>;
  type: "akad" | "resepsi";
};

export default function ScheduleFieldGroup({ form, type }: Props) {
  const fieldName: {
    startDate?: "startDate" | "weddingCeremony.startDate";
    endDate?: "endDate" | "weddingCeremony.endDate";
    location?: "location" | "weddingCeremony.location";
    address?: "address" | "weddingCeremony.address";
    startHour?: "startHour" | "weddingCeremony.startHour";
    startMinute?: "startMinute" | "weddingCeremony.startMinute";
    endHour?: "endHour" | "weddingCeremony.endHour";
    endMinute?: "endMinute" | "weddingCeremony.endMinute";
    timeZone?: "timeZone" | "weddingCeremony.timeZone"; // TODO: in backend there's just one timezone field, need to make sure
  } = {};

  switch (type) {
    case "akad":
      fieldName.startDate = "weddingCeremony.startDate";
      fieldName.endDate = "weddingCeremony.endDate";
      fieldName.location = "weddingCeremony.location";
      fieldName.address = "weddingCeremony.address";
      fieldName.startHour = "weddingCeremony.startHour";
      fieldName.startMinute = "weddingCeremony.startMinute";
      fieldName.endHour = "weddingCeremony.endHour";
      fieldName.endMinute = "weddingCeremony.endMinute";
      fieldName.timeZone = "weddingCeremony.timeZone";
      break;
    case "resepsi":
      fieldName.startDate = "startDate";
      fieldName.endDate = "endDate";
      fieldName.location = "location";
      fieldName.address = "address";
      fieldName.startHour = "startHour";
      fieldName.startMinute = "startMinute";
      fieldName.endHour = "endHour";
      fieldName.endMinute = "endMinute";
      fieldName.timeZone = "timeZone";
      break;
  }
  return (
    <div className="container mx-auto max-w-5xl">
      <p className="mb-3">
        Jadwal & Lokasi {type === "akad" ? "Akad" : "Resepsi"}
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <FormField
            control={form.control}
            name={fieldName.startDate}
            render={({ field }) => (
              <FormItem className="mb-6 flex flex-col gap-3">
                <FormLabel>Tanggal Mulai</FormLabel>
                <DatePicker field={field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <TimePicker
            form={form}
            hour={fieldName.startHour}
            minute={fieldName.startMinute}
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name={fieldName.endDate}
            render={({ field }) => (
              <FormItem className="mb-6 flex flex-col gap-3">
                <FormLabel>Tanggal Berakhir</FormLabel>
                <DatePicker field={field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <TimePicker
            form={form}
            hour={fieldName.endHour}
            minute={fieldName.endMinute}
          />
        </div>
      </div>
      <TimezoneSelector form={form} name={fieldName.timeZone} />
      <FormField
        control={form.control}
        name={fieldName.location}
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
        name={fieldName.address}
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
  );
}
