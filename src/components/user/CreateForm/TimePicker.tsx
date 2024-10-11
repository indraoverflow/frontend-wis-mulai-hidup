import { cn } from "@/lib/utils";
import { roboto } from "@/lib/fonts";
import { WiTime4 } from "react-icons/wi";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { CreateInvitationType } from "@/types/invitation-types";

type Props = {
  form: UseFormReturn<CreateInvitationType, any, undefined>;
  hour:
    | "startHour"
    | "endHour"
    | "weddingCeremony.startHour"
    | "weddingCeremony.endHour";
  minute:
    | "startMinute"
    | "endMinute"
    | "weddingCeremony.startMinute"
    | "weddingCeremony.endMinute";
};

export default function TimePicker({ form, hour, minute }: Props) {
  const { setValue } = form;
  return (
    <div>
      <FormLabel className="hidden md:block mb-6">Pilih Waktu</FormLabel>

      <p className="text-xs px-6 mb-1">Enter time</p>
      <div className="flex  max-w-72 px-6 gap-1">
        <FormField
          control={form.control}
          name={hour}
          render={({ field }) => (
            <FormItem className="mb-2 flex flex-col ">
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  max={23}
                  maxLength={2}
                  className={cn(
                    "bg-white min-w-4  pl-5 pr-1 h-[72px] text-[45px] appearance-none text-center -mr-2 border-dark-lavender border-2 focus-visible:outline-0 ",
                    roboto.className
                  )}
                  placeholder="00"
                  {...field}
                  onChange={(e) => {
                    let value =
                      Number(e.target.value) < 24 ? e.target.value : "00";
                    setValue(hour, Number(value));
                  }}
                />
              </FormControl>
              <FormLabel
                className={cn("text-xs p-0 font-normal m-0", roboto.className)}
              >
                Hour
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <span className={cn("text-[57px] -mt-3", roboto.className)}>:</span>
        <FormField
          control={form.control}
          name={minute}
          render={({ field }) => (
            <FormItem className="mb-2 flex flex-col ">
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  max={59}
                  maxLength={2}
                  className={cn(
                    "bg-white min-w-4  pl-5 pr-1 h-[72px] text-[45px] appearance-none text-center -mr-2 border-dark-lavender border-2 focus-visible:outline-0 ",
                    roboto.className
                  )}
                  placeholder="00"
                  {...field}
                  onChange={(e) => {
                    let value =
                      Number(e.target.value) < 60 ? e.target.value : "00";
                    setValue(minute, Number(value));
                  }}
                />
              </FormControl>
              <FormLabel
                className={cn("text-xs p-0 font-normal m-0", roboto.className)}
              >
                Hour
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex justify-between items-center w-full max-w-72 px-6 pb-9">
        <WiTime4 className="h-5 w-5" color="#65558F" />
        <div
          className={cn(
            "flex gap-3 text-sm text-primary font-medium",
            roboto.className
          )}
        >
          <p>Cancel</p>
          <p>Ok</p>
        </div>
      </div>
    </div>
  );
}
