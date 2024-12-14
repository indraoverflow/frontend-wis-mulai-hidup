import SubmitButton from "@/components/button/submit";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  AdditionalInformationType,
  CreateInvitationType,
  formAdditionalInformationScheme,
  formBrideLabels,
} from "@/types/invitation-types";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { UseFormReturn } from "react-hook-form";

export default function AdditonalInformationForm({
  form,
  isUpdate = false,
}: {
  form: UseFormReturn<CreateInvitationType, any, undefined>;
  isUpdate?: boolean;
}) {
  const onSubmit = (data: AdditionalInformationType) => {
    console.log(data);
    // Here you would typically send the data to your server
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof AdditionalInformationType
  ) => {
    const files = e.target.files;
    if (files) {
      if (field === "gallery") {
        handleMultipleFiles(files, field);
      } else {
        handleSingleFile(files[0], field);
      }
    }
  };

  const handleSingleFile = (
    file: File,
    field: keyof AdditionalInformationType
  ) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      form.setValue(field, result);
    };
    reader.readAsDataURL(file);
  };

  const handleMultipleFiles = (files: FileList, field: "gallery") => {
    const fileArray = Array.from(files);
    const readerPromises = fileArray.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readerPromises)
      .then((results) => {
        const gallery = form.getValues().gallery;
        const updatedGallery = Array.isArray(gallery) ? [...gallery, ...results] : [...results];
        form.setValue(field, updatedGallery);
      })
      .catch((error) => console.error("Error reading files:", error));
  };

  const removeGalleryImage = (index: number) => {
    const gallery = form.getValues().gallery;
    form.setValue(
      "gallery",
      gallery.filter((_, i) => i !== index)
    );
  };

  const renderPreview = (
    field: keyof AdditionalInformationType,
    value: string | string[]
  ) => {
    // if (field === "video") {
    //   return (
    //     <video
    //       src={value as string}
    //       className="w-full h-full object-cover rounded"
    //     />
    //   );
    // } else if (field === "music") {
    //   return (
    //     <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded">
    //       <span className="text-xs">Audio</span>
    //     </div>
    //   );
    // } else

    if (field === "gallery") {
      return (
        <ScrollArea className="h-64 w-full border border-primary rounded">
          <div className="flex gap-2 p-2">
            {(value as string[]).map((preview, index) => (
              <div key={index} className="relative w-48 h-48">
                <Image
                  src={preview}
                  alt={`Gallery preview ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-0 right-0 h-6 w-6"
                  onClick={() => removeGalleryImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      );
    } else {
      return (
        <div className="relative w-full h-64 border border-primary rounded">
          <Image
            src={value as string}
            alt={`Preview for ${field}`}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-surface py-8">
      <div className="bg-surface p-6">
        <div className="container mx-auto max-w-5xl space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {(
              Object.keys(formAdditionalInformationScheme.shape) as Array<
                keyof AdditionalInformationType
              >
            ).map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex flex-col items-center gap-4">
                        {(
                          Array.isArray(formField.value)
                            ? formField.value.length > 0
                            : formField.value
                        ) ? (
                          renderPreview(field, formField.value)
                        ) : (
                          <div className="w-full p-3 md:h-64 flex flex-col items-center justify-center gap-4 border border-primary rounded-lg">
                            <Image
                              src={`/images/icon/upload.svg`}
                              alt="Upload icon"
                              width={120}
                              height={120}
                              className="w-20 h-20"
                            />
                            <span className="text-xs">
                              {formBrideLabels[field]}
                            </span>
                          </div>
                        )}
                        <Input
                          type="file"
                          className="hidden"
                          id={field}
                          onChange={(e) => handleFileChange(e, field)}
                          accept={
                            "image/*"
                            // field === "video"
                            //   ? "video/*"
                            //   : field === "music"
                            //   ? "audio/*"
                            //   : "image/*"
                          }
                          multiple={field === "gallery"}
                        />
                        <Button asChild>
                          <label
                            htmlFor={field}
                            className="cursor-pointer flex items-center justify-center gap-2"
                          >
                            Upload Foto
                            {/* tipe upload foto/musik/video */}
                            {/* {field === "video" && " Video"}
                            {field === "music" && " Musik"}
                            {field !== "video" && field !== "music" && " Foto"} */}
                          </label>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          {/* <Button type="submit" className="w-full">Submit</Button> */}
          <div className="text-center">
            <SubmitButton isSubmitting={form.formState.isSubmitting} />
          </div>
        </div>
      </div>
    </div>
  );
}
