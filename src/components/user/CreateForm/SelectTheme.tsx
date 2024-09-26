import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { UseFormReturn } from "react-hook-form";

export default function SelectTheme({
  form,
}: {
  form: UseFormReturn<
    {
      mr: string;
      mrName: string;
      mrTitle: string;
      mrProfile: string;
      mrs: string;
      mrsName: string;
      mrsTitle: string;
      mrsProfile: string;
    },
    any,
    undefined
  >;
}) {
  return (
    <div className="bg-white flex flex-col items-center px-4 py-8">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[0, 1, 2, 3].map((i) => (
            <Card className="border-0 shadow-none" key={i}>
              <CardContent className="p-3 border rounded-md">
                <Image
                  src="/template-placeholder.png"
                  alt="template"
                  width={262}
                  height={370}
                />
              </CardContent>
              <CardFooter className="flex justify-center items-center gap-1 py-6">
                <Button size="sm">Pilih Tema</Button>
                <Button size="sm" variant="ghost" className="text-primary">
                  Preview
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
