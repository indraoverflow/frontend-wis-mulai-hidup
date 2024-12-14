import UpdateInvitationFormPage from "@/components/user/CreateForm/UpdateInvitationFormPage";
import React from "react";

export default function page({ params }: { params: { uniqueid: string } }) {
  const uniqueId = params.uniqueid;
  return (
    <>
      <UpdateInvitationFormPage uniqueId={uniqueId} />
    </>
  );
}
