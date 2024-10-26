"use client";

import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axios/axios";
import { useAddInvitationMutation } from "@/store/features/invitation/wedding-reception-slice";
import {
  createInvitationRequestScheme,
  formBrideScheme,
} from "@/types/invitation-types";

import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

export default function CreateInvitation({}: Props) {
  const [addInvitation, addInvitationResult] = useAddInvitationMutation();
  const session = useSession();
  const createInvitation = async () => {
    try {
      let data = createInvitationRequestScheme.parse({
        title_reception: "Reception 3",
        name_man: "Andi Budiman",
        nickname_man: "Budiman",
        birthdate_man: "2000-12-12",
        prefix_man: "Mr.",
        title_man: "S.H.",
        father_man: "Budiman",
        mother_man: "Ayu",
        description_man: "ini desc 1",
        name_woman: "Melati Sukma",
        nickname_woman: "Melati",
        birthdate_woman: "2000-12-12",
        prefix_woman: "Mrs.",
        title_woman: "S.E.",
        mother_woman: "Lala",
        father_woman: "Agus",
        description_woman: "ini desc 2",
        start_date: "2024-12-12",
        end_date: "2024-12-20",
        start_time: "13:00",
        end_time: "15:00",
        time_zone: "WIB",
        location: "Jakarta",
        address: "Matraman",
        theme_id: 1,
        wedding_ceremony: {
          title_ceremony: "Akad Nikah",
          start_time: "08:00",
          end_time: "09:00",
          start_date: "2024-12-10",
          end_date: "2024-12-10",
          location: "Jakarta",
          address: "Condet",
        },
        account_bank: [
          {
            name: "Andi Budiman",
            number: "112121212",
            bank: "MANDIRI",
          },
          {
            name: "Sukma Melati",
            number: "9999222",
            bank: "BCA",
          },
        ],
      });

      // console.log(data);

      let res = await addInvitation(data);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={createInvitation}>Create Invitation</Button>;
}
