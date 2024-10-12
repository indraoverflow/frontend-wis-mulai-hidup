export const getStringDate = (date?: Date) =>
  `${date?.getFullYear() ?? 1970}-${date?.getMonth() ?? 1}-${
    date?.getDay() ?? 1
  }`;

export const getStringTime = (hour?: number, minute?: number) =>
  `${hour ? hour : 0}:${minute ? minute : 0}`;
