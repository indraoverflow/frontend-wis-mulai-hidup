import React from "react";
import MenuItem from "./MenuItem";
import { cn } from "@/lib/utils/tailwind-util";
import { elza } from "@/lib/fonts";

const MenuInvitation = ({
  formIndex,
  setFormIndex,
}: {
  formIndex: number;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-4 lg:grid-cols-5 gap-2 md:gap-6 lg:gap-16 bg-surface",
        elza.className
      )}
    >
      <MenuItem
        icon={
          formIndex === 0
            ? "/images/icon/idea-theme-active.svg"
            : "/images/icon/idea-theme.svg"
        }
        title="Pilih Tema"
        formIndex={0}
        setFormIndex={setFormIndex}
      />
      <MenuItem
        icon={
          formIndex === 1
            ? "/images/icon/couple-2-active.svg"
            : "/images/icon/couple-2.svg"
        }
        title="Informasi Mempelai"
        formIndex={1}
        setFormIndex={setFormIndex}
      />
      <MenuItem
        icon={
          formIndex === 2
            ? "/images/icon/calendar-time-and-date-active.svg"
            : "/images/icon/calendar-time-and-date.svg"
        }
        title="Jadwal dan Lokasi Pernikahan"
        formIndex={2}
        setFormIndex={setFormIndex}
      />
      <MenuItem
        icon={
          formIndex === 3
            ? "/images/icon/additional-info-active.svg"
            : "/images/icon/additional-info.svg"
        }
        title="Informasi Tambahan Mempelai"
        formIndex={3}
        setFormIndex={setFormIndex}
      />
    </div>
  );
};

export default MenuInvitation;
