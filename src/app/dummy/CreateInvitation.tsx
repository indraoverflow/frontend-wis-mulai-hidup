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
        title_reception: "Reception Dari web bari",
        name_man: "Andi An",
        title_man: "Mr.",
        parent_man: "Budiman",
        description_man: "ini desc 1",
        name_woman: "Melati",
        title_woman: "Mrs.",
        parent_woman: "Lala",
        description_woman: "ini desc 2",
        start_date: "2024-12-12",
        end_date: "2024-12-20",
        location: "Jakarta",
        address: "Matraman",
        user_id: 2,
        theme_id: 1,
        wedding_ceremony: {
          title_ceremony: "Akad Nikah",
          start_date: "2024-12-10",
          end_date: "2024-12-10",
          location: "Jakarta",
          address: "Condet",
        },
      });

      console.log(data);

      // let res = await axiosInstance.post("/receptions/create", {
      //   title_reception: "Reception Dari web",
      //   name_man: "Andi",
      //   title_man: "Mr.",
      //   parent_man: "Budiman",
      //   description_man: "ini desc 1",
      //   name_woman: "Melati",
      //   title_woman: "Mrs.",
      //   parent_woman: "Lala",
      //   description_woman: "ini desc 2",
      //   start_date: "2024-12-12",
      //   end_date: "2024-12-20",
      //   location: "Jakarta",
      //   address: "Matraman",
      //   user_id: 2,
      //   theme_id: 1,
      //   wedding_ceremony: {
      //     title_ceremony: "Akad Nikah",
      //     start_date: "2024-12-10",
      //     end_date: "2024-12-10",
      //     location: "Jakarta",
      //     address: "Condet",
      //   },
      // });
      let res = await addInvitation(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={createInvitation}>Create Invitation</Button>;
}
