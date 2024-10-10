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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
                  {/* <FormLabel className="hidden md:block">Mr</FormLabel> */}
                  <FormControl>
                    <Input
                      type="text"
                      className="bg-white placeholder:text-philippine-silver"
                      placeholder="Mr."
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
                    {/* <FormLabel className="hidden md:block">Nama Anda</FormLabel> */}
                    <FormControl>
                      <Input
                        type="text"
                        className="bg-white placeholder:text-philippine-silver"
                        placeholder="Masukan Nama Mempelai Pria"
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
            name="mrNickname"
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
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="mrFather"
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
              name="mrMother"
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
            name="mrProfile"
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

          <hr className="border-primary my-6" />

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="mrs"
              render={({ field }) => (
                <FormItem className="mb-6">
                  {/* <FormLabel className="hidden md:block">Mrs</FormLabel> */}
                  <FormControl>
                    <Input
                      type="text"
                      className="bg-white placeholder:text-philippine-silver"
                      placeholder="Mrs."
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
                    {/* <FormLabel className="hidden md:block">
                      Nama Pasangan
                    </FormLabel> */}
                    <FormControl>
                      <Input
                        type="text"
                        className="bg-white placeholder:text-philippine-silver"
                        placeholder="Masukan Nama Mempelai Wanita"
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
            name="mrsNickname"
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
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="mrsFather"
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
              name="mrsMother"
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
            name="mrsProfile"
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
          <hr className="border-primary my-6" />
          <p className="mb-2 text-philippine-silver text-sm">
            Rekening Mempelai Pria
          </p>
          <div className="flex gap-4 mb-6">
            <FormField
              control={form.control}
              name="accoutBank.0.bank"
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
                            field.value.length > 0 ? (
                              field.value
                            ) : (
                              <span className="text-philippine-silver">
                                Bank
                              </span>
                            )
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Bank</SelectLabel>
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
              name="accoutBank.0.name"
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
              name="accoutBank.0.number"
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

          <p className="mb-2 text-philippine-silver text-sm">
            Rekening Mempelai Wanita
          </p>
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="accoutBank.1.bank"
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
                            field.value.length > 0 ? (
                              field.value
                            ) : (
                              <span className="text-philippine-silver">
                                Bank
                              </span>
                            )
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Bank</SelectLabel>
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
              name="accoutBank.1.name"
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
              name="accoutBank.1.number"
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
        </div>
      </div>
    </div>
  );
}
