"use client";
import ThemeFour from "@/components/theme/template/ThemeFour";
import ThemeOne from "@/components/theme/template/ThemeOne";
import ThemeThree from "@/components/theme/template/ThemeThree";
import ThemeTwo from "@/components/theme/template/ThemeTwo";
import { useGetInvitationByUniqueIdQuery } from "@/store/features/invitation/wedding-reception-slice";

import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { uniqueid: string } }) {
  const uniqueId = params.uniqueid;
  const { data } = useGetInvitationByUniqueIdQuery(uniqueId);
  const { theme_id: themeId } = data?.data || {};
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  switch (Number(themeId)) {
    case 1:
      return <ThemeOne data={data.data} uniqueId={uniqueId} to={to} />;

    case 2:
      return <ThemeTwo data={data.data} uniqueId={uniqueId} to={to} />;

    case 3:
      return <ThemeThree data={data.data} uniqueId={uniqueId} to={to} />;

    case 4:
      return <ThemeFour data={data.data} uniqueId={uniqueId} to={to} />;

    default:
      // router.push("/");
      break;
  }
}
