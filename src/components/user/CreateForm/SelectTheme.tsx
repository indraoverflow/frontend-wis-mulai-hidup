import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { CreateInvitationType } from "@/types/invitation-types";
import Image from "next/image";
import Link from "next/link";
import { UseFormReturn } from "react-hook-form";

export default function SelectTheme({
  form,
}: {
  form: UseFormReturn<CreateInvitationType, any, undefined>;
}) {
  return (
    <div className="bg-white flex flex-col items-center px-4 py-8">
      <div className="container mx-auto max-w-5xl">
        <FormField
          control={form.control}
          name="themeId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <Card
                      className={cn(
                        "border-0 shadow-none",
                        field.value === i
                          ? "shadow-md border border-primary"
                          : ""
                      )}
                      key={i}
                    >
                      <CardContent className="p-3 border rounded-md">
                        <Image
                          src={`/images/template/template-${i}.png`}
                          alt={`template ${i}`}
                          width={262}
                          height={370}
                        />
                      </CardContent>
                      <CardFooter className="flex justify-center items-center gap-1 py-6">
                        <Button
                          size="sm"
                          onClick={() => {
                            field.onChange(i);
                          }}
                        >
                          Pilih Tema
                        </Button>
                        <Link
                          className={cn(
                            "text-primary",
                            buttonVariants({ variant: "ghost", size: "sm" })
                          )}
                          href={`/theme/${i > 4 ? 1 : i}`}
                        >
                          Preview
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
