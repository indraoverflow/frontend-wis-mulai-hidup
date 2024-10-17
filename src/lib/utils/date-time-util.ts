export const getStringDate = (date?: Date) => {
  console.log(date);
  console.log(
    `${date?.getFullYear() ?? 1970}-${(date?.getMonth() ?? 0) + 1}-${
      date?.getDate() ?? 1
    }`
  );

  return `${date?.getDate() ?? 1}-${(date?.getMonth() ?? 0) + 1}-${
    date?.getFullYear() ?? 1970
  }`;
};

export const getStringTime = (hour?: number, minute?: number) =>
  `${hour ? hour : 0}:${minute ? minute : 0}`;
