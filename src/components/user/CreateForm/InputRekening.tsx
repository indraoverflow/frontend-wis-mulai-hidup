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
    accountName?: "accountBank.0.name" | "accountBank.1.name";
    accountNumber?: "accountBank.0.number" | "accountBank.1.number";
    bank?: "accountBank.0.bank" | "accountBank.1.bank";
  } = {};

  switch (type) {
    case "man":
      fieldName.accountName = "accountBank.0.name";
      fieldName.accountNumber = "accountBank.0.number";
      fieldName.bank = "accountBank.0.bank";
      break;

    case "woman":
      fieldName.accountName = "accountBank.1.name";
      fieldName.accountNumber = "accountBank.1.number";
      fieldName.bank = "accountBank.1.bank";
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
            <FormItem className=" flex flex-col  ">
              {/* <FormLabel className="hidden md:block">Pilih Bank</FormLabel> */}
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full bg-white justify-between h-[42] ">
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
                      <SelectItem value="BCA">BCA</SelectItem>
                      <SelectItem value="BRI">BRI</SelectItem>
                      <SelectItem value="BNI">BNI</SelectItem>
                      <SelectItem value="mandiri">Bank Mandiri</SelectItem>
                      <SelectItem value="BSI">BSI</SelectItem>
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
