import SubmitButton from "@/components/button/submit";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreateInvitationType } from "@/types/invitation-types";
import React from "react";
import { UseFormReturn } from "react-hook-form";

export default function BrideInformationPage({
  form,
}: {
  form: UseFormReturn<CreateInvitationType, any, undefined>;
}) {
  return (
    <div className="min-h-screen bg-surface py-8">
      <div className="bg-white p-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="mr"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="hidden md:block">Mr</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="bg-white"
                      placeholder="Mr"
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
                name="mrName"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="hidden md:block">Nama Anda</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="bg-white"
                        placeholder="Nama Anda"
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
              name="mrTitle"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="hidden md:block">Gelar</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="bg-white"
                      placeholder="Gelar Anda"
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
            name="mrProfile"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel className="hidden md:block">Profil</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-white"
                    placeholder="Isi profil menarikmu"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <hr className="border-primary my-6" />

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="mrs"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="hidden md:block">Mrs</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="bg-white"
                      placeholder="mrs"
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
                name="mrsName"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="hidden md:block">
                      Nama Pasangan
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="bg-white"
                        placeholder="Nama Pasangan"
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
              name="mrsTitle"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="hidden md:block">Gelar</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="bg-white"
                      placeholder="Gelar Anda"
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
            name="mrsProfile"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel className="hidden md:block">Profil</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-white"
                    placeholder="Isi profil menarikmu"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-center">
            <SubmitButton isSubmitting={form.formState.isSubmitting} />
          </div>
        </div>
      </div>
    </div>
  );
}
