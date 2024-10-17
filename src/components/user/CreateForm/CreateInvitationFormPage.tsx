"use client";

import SelectTheme from "@/components/user/CreateForm/SelectTheme";
import MenuInvitation from "@/components/user/MenuInvitation/MenuIvitation";
import {
  createInvitationRequestScheme,
  CreateInvitationType,
  formBrideScheme,
  uploadMediaScheme,
} from "@/types/invitation-types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import BrideInformationPage from "./BrideInformationPage";
import ScheduleAndLocation from "./SceduleAndLocation";
import AdditonalInformationForm from "./AdditionalInformationForm";
import {
  useAddInvitationMediaMutation,
  useAddInvitationMutation,
} from "@/store/features/invitation/wedding-reception-slice";
import { useSession } from "next-auth/react";
import axiosInstance from "@/lib/axios/axios";
import config from "@/lib/config";
import { dataUrlToFile } from "@/lib/utils/file-util";
import { createInvitationFormToRequest } from "@/lib/utils/create-invitation-util";

export default function CreateInvitationFormPage() {
  const [addInvitation, addInvitationResult] = useAddInvitationMutation();
  const [addMedia, addMediaResult] = useAddInvitationMediaMutation();
  const session = useSession();

  const [formIndex, setFormIndex] = React.useState(0);
  const form = useForm({
    resolver: zodResolver(formBrideScheme),
    defaultValues: formBrideScheme.parse({}),
  });

  const onSubmit: SubmitHandler<CreateInvitationType> = async (values) => {
    try {
      console.log(values);

      const data = createInvitationFormToRequest(values);

      let media = uploadMediaScheme.parse({
        man_media: dataUrlToFile(values.groomImage, "man_media"),
        woman_media: dataUrlToFile(values.brideImage, "woman_media"),
        our_story_man: dataUrlToFile(values.brideImage, "our_story_man"),
        our_story_woman: dataUrlToFile(values.brideImage, "our_story_woman"),
        wedding_media: values.gallery.map((url, index) =>
          dataUrlToFile(url, `weddings_media_${index}`)
        ),
      });

      console.log(media);

      const res = await addInvitation(data);
      const receptionId = res.data.receptionId;

      const response = await addMedia({
        receptionId: receptionId,
        media: media,
      });

      // console.log(res, response);
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
