import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateInvitationType } from "@/types/invitation-types";
import { SelectLabel } from "@radix-ui/react-select";
import { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<CreateInvitationType, any, undefined>;
  type: "man" | "woman";
};

export default function InputRekening({ form, type }: Props) {
  const fieldName: {
    accountName?: "accoutBank.0.name" | "accoutBank.1.name";
    accountNumber?: "accoutBank.0.number" | "accoutBank.1.number";
    bank?: "accoutBank.0.bank" | "accoutBank.1.bank";
  } = {};

  switch (type) {
    case "man":
      fieldName.accountName = "accoutBank.0.name";
      fieldName.accountNumber = "accoutBank.0.number";
      fieldName.bank = "accoutBank.0.bank";
      break;

    case "woman":
      fieldName.accountName = "accoutBank.1.name";
      fieldName.accountNumber = "accoutBank.1.number";
      fieldName.bank = "accoutBank.1.bank";
      break;
  }
  return (
    <>
      <p className="mb-2 text-philippine-silver text-sm">
        Rekening Mempelai {type === "man" ? "Pria" : "Wanita"}
      </p>
      <div className="flex gap-4 mb-6">
        <FormField
          control={form.control}
          name={fieldName.bank}
          render={({ field }) => (
            <FormItem className=" flex flex-col gap-3 ">
              {/* <FormLabel className="hidden md:block">Pilih Bank</FormLabel> */}
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full bg-white justify-between h-full">
                    <SelectValue
                      placeholder={
                        field.value?.length > 0 ? (
                          field.value
                        ) : (
                          <span className="text-philippine-silver">Bank</span>
                        )
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Bank</SelectLabel> */}
                      <SelectItem value="bca">BCA</SelectItem>
                      <SelectItem value="bri">BRI</SelectItem>
                      <SelectItem value="bni">BNI</SelectItem>
                      <SelectItem value="mandiri">Bank Mandiri</SelectItem>
                      <SelectItem value="bsi">BSI</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={fieldName.accountName}
          render={({ field }) => (
            <FormItem className=" flex-1">
              <FormControl>
                <Input
                  type="text"
                  className="bg-white placeholder:text-philippine-silver"
                  placeholder="Atas Nama"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={fieldName.accountNumber}
          render={({ field }) => (
            <FormItem className=" flex-1">
              <FormControl>
                <Input
                  type="text"
                  className="bg-white placeholder:text-philippine-silver"
                  placeholder="No. Rekening"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
