import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils/tailwind-util";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormControl } from "@/components/ui/form";
import { id } from "date-fns/locale";

export function DatePicker({ field }: { field: any }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={"outline"}
            className={cn(
              "w-full px-6 py-3 text-left font-normal h-12",
              !field.value && "text-philippine-silver"
            )}
          >
            {field.value ? (
              format(field.value, "EEEE, dd MMMM yyyy", {
                locale: id,
              })
            ) : (
              <span>Pilih Tanggal</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white shadow-lg" align="start">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={field.onChange}
          disabled={(date) =>
            date < new Date() || date > new Date("2100-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
