import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateInvitationType } from "@/types/invitation-types";
import { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<CreateInvitationType, any, undefined>;
  name: "timeZone" | "weddingCeremony.timeZone";
};
export default function TimezoneSelector({ form, name }: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-6 flex flex-col gap-3">
          <FormLabel className="hidden md:block">Pilih Zona Waktu</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-full bg-white justify-between ">
                <SelectValue
                  placeholder={
                    field.value?.length > 0 ? (
                      field.value
                    ) : (
                      <span className="text-philippine-silver">Zona Waktu</span>
                    )
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Pilih Zona Waktu</SelectLabel>
                  <SelectItem value="wib">WIB</SelectItem>
                  <SelectItem value="wita">WITA</SelectItem>
                  <SelectItem value="wit">WIT</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
