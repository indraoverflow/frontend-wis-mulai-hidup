"use client";
import ThemeFour from "@/components/theme/template/ThemeFour";
import ThemeOne from "@/components/theme/template/ThemeOne";
import ThemeThree from "@/components/theme/template/ThemeThree";
import ThemeTwo from "@/components/theme/template/ThemeTwo";
import { useGetInvitationByIdQuery } from "@/store/features/invitation/wedding-reception-slice";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useGetInvitationByIdQuery(params.id);
  const router = useRouter();

  const { theme_id: themeId } = data?.data || {};
  console.log(themeId);

  switch (Number(themeId)) {
    case 1:
      return <ThemeOne />;

    case 2:
      return <ThemeTwo />;

    case 3:
      return <ThemeThree />;

    case 4:
      return <ThemeFour />;

    default:
      // router.push("/");
      break;
  }
}