"use client";
import ThemeEight from "@/components/theme/template/ThemeEight";
import ThemeFive from "@/components/theme/template/ThemeFive";
import ThemeFour from "@/components/theme/template/ThemeFour";
import ThemeOne from "@/components/theme/template/ThemeOne";
import ThemeSeven from "@/components/theme/template/ThemeSeven";
import ThemeSix from "@/components/theme/template/ThemeSix";
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

    case 5:
      return <ThemeFive data={data.data} uniqueId={uniqueId} to={to} />;

    case 6:
      return <ThemeSix data={data.data} uniqueId={uniqueId} to={to} />;

    case 7:
      return <ThemeSeven data={data.data} uniqueId={uniqueId} to={to} />;

    case 8:
      return <ThemeEight data={data.data} uniqueId={uniqueId} to={to} />;

    default:
      // router.push("/");
      break;
  }
}
