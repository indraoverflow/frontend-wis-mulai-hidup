import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreateInvitationType } from "@/types/invitation-types";

import React from "react";
import { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<CreateInvitationType, any, undefined>;
  type: "man" | "woman";
};

export default function BrideBiodata({ form, type }: Props) {
  const fieldName: {
    prefix?: "mr" | "mrs";
    name?: "mrName" | "mrsName";
    nickname?: "mrNickname" | "mrsNickname";
    birthDate?: "mrBirthDate" | "mrsBirthDate";
    title?: "mrTitle" | "mrsTitle";
    father?: "mrFather" | "mrsFather";
    mother?: "mrMother" | "mrsMother";
    profile?: "mrProfile" | "mrsProfile";
  } = {};

  switch (type) {
    case "man":
      fieldName.prefix = "mr";
      fieldName.name = "mrName";
      fieldName.nickname = "mrNickname";
      fieldName.birthDate = "mrBirthDate";
      fieldName.title = "mrTitle";
      fieldName.father = "mrFather";
      fieldName.mother = "mrMother";
      fieldName.profile = "mrProfile";
      break;
    case "woman":
      fieldName.prefix = "mrs";
      fieldName.name = "mrsName";
      fieldName.nickname = "mrsNickname";
      fieldName.birthDate = "mrsBirthDate";
      fieldName.title = "mrsTitle";
      fieldName.father = "mrsFather";
      fieldName.mother = "mrsMother";
      fieldName.profile = "mrsProfile";
      break;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-4">
        <FormField
          control={form.control}
          name={fieldName.prefix}
          render={({ field }) => (
            <FormItem className="mb-6">
              {/* <FormLabel className="hidden md:block">Mr</FormLabel> */}
              <FormControl>
                <Input
                  type="text"
                  className="bg-white placeholder:text-philippine-silver"
                  placeholder={
                    type == "man" ? "Isi Gelar Depan" : "Isi Gelar Depan"
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grow">
          <FormField
            control={form.control}
            name={fieldName.name}
            render={({ field }) => (
              <FormItem className="mb-6">
                {/* <FormLabel className="hidden md:block">Nama Anda</FormLabel> */}
                <FormControl>
                  <Input
                    type="text"
                    className="bg-white placeholder:text-philippine-silver"
                    placeholder={`Masukan Nama Mempelai ${
                      type == "man" ? "Pria" : "Wanita"
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name={fieldName.title}
          render={({ field }) => (
            <FormItem className="mb-6">
              {/* <FormLabel className="hidden md:block">Gelar</FormLabel> */}
              <FormControl>
                <Input
                  type="text"
                  className="bg-white placeholder:text-philippine-silver"
                  placeholder="Isi Gelar"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name={fieldName.nickname}
        render={({ field }) => (
          <FormItem className="mb-6">
            <FormControl>
              <Input
                type="text"
                className="bg-white placeholder:text-philippine-silver"
                placeholder="Masukan Nama Panggilan"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex flex-col md:flex-row md:gap-4">
        <FormField
          control={form.control}
          name={fieldName.father}
          render={({ field }) => (
            <FormItem className="mb-6 flex-1">
              <FormControl>
                <Input
                  type="text"
                  className="bg-white placeholder:text-philippine-silver"
                  placeholder="Masukan Nama Ayah"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={fieldName.mother}
          render={({ field }) => (
            <FormItem className="mb-6 flex-1">
              <FormControl>
                <Input
                  type="text"
                  className="bg-white placeholder:text-philippine-silver"
                  placeholder="Masukan Nama Ibu"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name={fieldName.profile}
        render={({ field }) => (
          <FormItem className="mb-6">
            {/* <FormLabel className="hidden md:block">Profil</FormLabel> */}
            <FormControl>
              <Textarea
                className="bg-white placeholder:text-philippine-silver"
                placeholder="Isi profil menarikmu"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
