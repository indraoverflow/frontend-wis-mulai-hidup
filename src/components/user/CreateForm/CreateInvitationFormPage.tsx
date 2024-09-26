"use client";

import SelectTheme from "@/components/user/CreateForm/SelectTheme";
import MenuInvitation from "@/components/user/MenuInvitation/MenuIvitation";
import {
  CreateInvitationType,
  formBrideScheme,
} from "@/types/invitation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Form, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import BrideInformationPage from "./BrideInformationPage";
import ScheduleAndLocation from "./SceduleAndLocation";

export default function CreateInvitationFormPage() {
  const [formIndex, setFormIndex] = React.useState(0);
  const form = useForm({
    resolver: zodResolver(formBrideScheme),
    defaultValues: formBrideScheme.parse({}),
  });

  const onSubmit: SubmitHandler<CreateInvitationType> = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-surface py-24">
      <div className="flex flex-col items-center px-4 py-8">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl font-semibold text-philippine-silver">
            Buat undangan
          </h3>
          <hr className="my-3 border-primary" />
        </div>
      </div>
      <div className="bg-white flex flex-col items-center px-4 py-8 mb-12">
        <div className="container mx-auto max-w-5xl">
          <MenuInvitation setFormIndex={setFormIndex} formIndex={formIndex} />
        </div>
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {formIndex === 0 && <SelectTheme form={form} />}
          {formIndex === 1 && <BrideInformationPage form={form} />}
          {formIndex === 2 && <ScheduleAndLocation form={form} />}
        </form>
      </FormProvider>
    </div>
  );
}
