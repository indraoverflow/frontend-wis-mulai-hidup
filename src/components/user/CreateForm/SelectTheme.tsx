import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils/tailwind-util";
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
    <div className="bg-surface flex flex-col items-center px-4 py-8">
      <div className="container mx-auto max-w-5xl">
        <FormField
          control={form.control}
          name="themeId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card
                      className={cn(
                        "border-0 shadow-none bg-surface",
                        field.value === i
                          ? "shadow-md border border-primary"
                          : ""
                      )}
                      key={i}
                    >
                      <CardContent className="flex justify-center">
                        <div className="w-fit border rounded-md flex justify-center bg-white p-2">
                          <Image
                            src={`/images/template/template-${i}.png`}
                            alt={`template ${i}`}
                            width={262}
                            height={370}
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-center items-center gap-1 pb-3">
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            form.setValue("themeId", i);
                          }}
                        >
                          Pilih Tema
                        </Button>
                        <Link
                          className={cn(
                            "text-primary",
                            buttonVariants({ variant: "ghost", size: "sm" })
                          )}
                          href={`/theme/${i > 6 ? 1 : i}`}
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
