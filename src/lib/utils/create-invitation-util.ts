import {
  createInvitationRequestScheme,
  CreateInvitationType,
  formBrideScheme,
} from "@/types/invitation-types";
import { getStringDate, getStringTime } from "./date-time-util";

export const createInvitationFormToRequest = (values: CreateInvitationType) => {
  const bankAccount1 = {
    name: values.accountBank.at(0)?.name ?? values.mrName,
    number: values.accountBank.at(0)?.number ?? "",
    bank: values.accountBank.at(0)?.bank ?? "",
  };

  const bankAccount2 =
    values.accountBank.at(1)?.name ||
    values.accountBank.at(1)?.bank ||
    values.accountBank.at(1)?.number
      ? {
          name: values.accountBank.at(1)?.name ?? values.mrsName,
          number: values.accountBank.at(1)?.number ?? "0000",
          bank: values.accountBank.at(1)?.bank ?? "Lainnya",
        }
      : null;
  return createInvitationRequestScheme.parse({
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
    time_zone:
      values.timeZone.length > 0 ? values.timeZone.toUpperCase() : "WIB",
    location: values.location,
    address: values.address,
    theme_id: values.themeId > 0 ? values.themeId : 1,
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
    account_bank: bankAccount2 ? [bankAccount1, bankAccount2] : [bankAccount1],
  });
};

export const invitationResponseToForm = (values: any): CreateInvitationType => {
  const bankAccount1 = {
    name: values?.account_bank.at(0)?.name ?? "-",
    number: values?.account_bank.at(0)?.number ?? "-",
    bank: values?.account_bank.at(0)?.bank ?? "-",
  };

  const bankAccount2 =
    !!values?.account_bank.at(1)?.name ||
    !!values?.account_bank.at(1)?.bank ||
    !!values?.account_bank.at(1)?.number
      ? {
          name: values?.account_bank.at(1)?.name ?? "",
          number: values?.account_bank.at(1)?.number ?? "",
          bank: values?.account_bank.at(1)?.bank ?? "",
        }
      : null;

  const [startHour, startMinute] = values?.start_time?.split(":") ?? [
    "00",
    "00",
  ];
  const [endHour, endMinute] = values?.end_time?.split(":") ?? ["00", "00"];

  const [weddingStartHour, weddingStartMinute] =
    values?.wedding_ceremony?.start_time?.split(":") ?? ["00", "00"];
  const [weddingEndHour, weddingEndMinute] =
    values?.wedding_ceremony?.end_time?.split(":") ?? ["00", "00"];

  return formBrideScheme.parse({
    mr: values?.prefix_man ?? "",
    mrName: values?.name_man ?? "-",
    mrTitle: values?.title_man ?? "",
    mrNickname: values?.nickname_man ?? "-",
    mrFather: values?.father_man ?? "",
    mrMother: values?.mother_man ?? "",
    mrProfile: values?.description_man ?? "",
    mrsPrefix: values?.prefix_woman ?? "",

    mrs: values?.prefix_woman ?? "",
    mrsName: values?.name_woman ?? "-",
    mrsTitle: values?.title_woman ?? "",
    mrsNickname: values?.nickname_woman ?? "-",
    mrsFather: values?.father_woman ?? "",
    mrsMother: values?.mother_woman ?? "",
    mrsProfile: values?.description_woman ?? "",

    startDate: new Date(values?.start_date ?? "2000-01-01"),
    endDate: new Date(values?.end_date ?? "2000-01-01"),
    startHour: Number(startHour),
    startMinute: Number(startMinute),
    endHour: Number(endHour),
    endMinute: Number(endMinute),
    timeZone: values?.time_zone ?? "WIB",
    location: values?.location ?? "",
    address: values?.address ?? "",
    themeId: Number(values?.theme_id ?? 1),
    weddingCeremony: {
      startHour: Number(weddingStartHour),
      startMinute: Number(weddingStartMinute),
      endHour: Number(weddingEndHour),
      endMinute: Number(weddingEndMinute),
      startDate: new Date(values?.wedding_ceremony?.start_date ?? "2000-01-01"),
      endDate: new Date(values?.wedding_ceremony?.end_date ?? "2000-01-01"),
      timeZone: values?.time_zone ?? "WIB",
      location: values?.wedding_ceremony?.location ?? "",
      address: values?.wedding_ceremony?.address ?? "",
    },
    accountBank: bankAccount2 ? [bankAccount1, bankAccount2] : [bankAccount1],
  });
};
