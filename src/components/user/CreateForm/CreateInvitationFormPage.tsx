"use client";

import SelectTheme from "@/components/user/CreateForm/SelectTheme";
import MenuInvitation from "@/components/user/MenuInvitation/MenuIvitation";
import {
  createInvitationRequestScheme,
  CreateInvitationType,
  formBrideScheme,
} from "@/types/invitation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import BrideInformationPage from "./BrideInformationPage";
import ScheduleAndLocation from "./SceduleAndLocation";
import AdditonalInformationForm from "./AdditionalInformationForm";
import { useAddInvitationMutation } from "@/store/features/invitation/wedding-reception-slice";
import { useSession } from "next-auth/react";

export default function CreateInvitationFormPage() {
  const [addInvitation, addInvitationResult] = useAddInvitationMutation();
  const session = useSession();

  const [formIndex, setFormIndex] = React.useState(0);
  const form = useForm({
    resolver: zodResolver(formBrideScheme),
    defaultValues: formBrideScheme.parse({}),
  });

  const onSubmit: SubmitHandler<CreateInvitationType> = async (values) => {
    try {
      console.log(values);
      var date = `${values.startDate?.getFullYear()}-${values.startDate?.getMonth()}-${values.startDate?.getDay()}`;
      console.log(date);

      let data = createInvitationRequestScheme.parse({
        title_reception: "Reception Dari web bari",
        name_man: values.mrName,
        title_man: "Mr.",
        parent_man: "Budiman",
        description_man: values.mrProfile,
        name_woman: values.mrsName,
        title_woman: "Mrs.",
        parent_woman: "Lala",
        description_woman: values.mrsProfile,
        start_date: date,
        end_date: date,
        location: values.location,
        address: values.address,
        user_id: Number(session.data?.user.id),
        theme_id: values.themeId,
        wedding_ceremony: {
          title_ceremony: "Akad Nikah",
          start_date: date,
          end_date: date,
          location: values.location,
          address: values.address,
        },
      });

      let res = await addInvitation(data);
      console.log(res);
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
          {formIndex === 3 && <AdditonalInformationForm form={form} />}
        </form>
      </FormProvider>
    </div>
  );
}
