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
import { useAddInvitationMutation } from "@/store/features/invitation/wedding-reception-slice";
import { useSession } from "next-auth/react";
import axiosInstance from "@/lib/axios/axios";
import config from "@/lib/config";
import { get } from "http";

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

      const getStringDate = (date?: Date) =>
        `${date?.getFullYear() ?? 1970}-${date?.getMonth() ?? 1}-${
          date?.getDay() ?? 1
        }`;

      const getStringTime = (hour?: number, minute?: number) =>
        `${hour ? hour : 0}:${minute ? minute : 0}`;

      const data = createInvitationRequestScheme.parse({
        title_reception: "Resepsi",
        name_man: values.mrName,
        nickname_man: values.mrNickname,
        birthdate_man: "01-01-2000",
        prefix_man: values.mr,
        title_man: values.mrTitle,
        father_man: values.mrFather,
        mother_man: values.mrMother,
        description_man: values.mrProfile,
        name_woman: values.mrsName,
        nickname_woman: values.mrsNickname,
        birthdate_woman: "01-01-2000",
        prefix_woman: values.mrs,
        title_woman: values.mrsTitle,
        father_woman: values.mrsFather,
        mother_woman: values.mrsMother,
        description_woman: values.mrsProfile,
        start_date: getStringDate(values.startDate),
        end_date: getStringDate(values.endDate),
        start_time: getStringTime(values.startHour, values.startMinute),
        end_time: getStringTime(values.endHour, values.endMinute),
        time_zone: values.timeZone.toUpperCase(),
        location: values.location,
        address: values.address,
        theme_id: values.themeId,
        wedding_ceremony: {
          title_ceremony: "Akad",
          start_time: getStringTime(
            values.weddingCeremony.startHour,
            values.weddingCeremony.startMinute
          ),
          end_time: getStringTime(
            values.weddingCeremony.endHour,
            values.weddingCeremony.endMinute
          ),
          start_date: getStringDate(values.weddingCeremony.startDate),
          end_date: getStringDate(values.weddingCeremony.endDate),
          location: values.weddingCeremony.location,
          address: values.weddingCeremony.address,
        },
        account_bank: [
          {
            name: values.accoutBank.at(0)?.name,
            number: values.accoutBank.at(0)?.number,
            bank: values.accoutBank.at(0)?.bank,
          },
          {
            name: values.accoutBank.at(1)?.name,
            number: values.accoutBank.at(1)?.number,
            bank: values.accoutBank.at(1)?.bank,
          },
        ],
      });

      const manMedia: File = (await fetch(values.groomImage).then((res) =>
        res.blob()
      )) as File;
      const womanMedia: File = (await fetch(values.brideImage).then((res) =>
        res.blob()
      )) as File;
      const cover: File = (await fetch(values.cover).then((res) =>
        res.blob()
      )) as File;

      console.log(manMedia, womanMedia, cover);

      let media = uploadMediaScheme.parse({
        man_media: manMedia.type.includes("text/html")
          ? undefined
          : new File([manMedia], `man_media.${manMedia.type.split("/")[1]}`, {
              type: manMedia.type,
            }),
        woman_media: womanMedia.type.includes("text/html")
          ? undefined
          : new File(
              [womanMedia],
              `woman_media.${manMedia.type.split("/")[1]}`,
              {
                type: womanMedia.type,
              }
            ),
        wedding_media: cover.type.includes("text/html")
          ? undefined
          : new File([cover], `wedding_media.${manMedia.type.split("/")[1]}`, {
              type: cover.type,
            }),
      });

      console.log(media);

      let res = await addInvitation(data);

      let response = await axiosInstance.post(
        `${config.apiUrl}/receptions/upload_media/2`,
        media,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res, response);
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
