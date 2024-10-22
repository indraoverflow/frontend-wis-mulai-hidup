export const getStringDate = (date?: Date) => {
  console.log(date);
  console.log(
    `${date?.getDate() ?? 1}-${(date?.getMonth() ?? 0) + 1}-${
      date?.getFullYear() ?? 1970
    }`
  );

  return `${date?.getFullYear() ?? 1970}-${(date?.getMonth() ?? 0) + 1}-${
    date?.getDate() ?? 1
  }`;
};

export const getStringTime = (hour?: number, minute?: number) =>
  `${hour ? (hour.toString().length === 1 ? `0${hour}` : hour) : "00"}:${
    minute ? (minute.toString().length === 1 ? `0${minute}` : minute) : "00"
  }`;
