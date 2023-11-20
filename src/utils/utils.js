export const getToday = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();

  const currentWeekDay = date.getDay();
  const currentDate = date.toLocaleDateString();

  return { weekday: days[currentWeekDay], date: currentDate };
};

export const getCurrentWeek = () => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const days = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((days + 1) / 7);

  return weekNumber;
};

export const getCurrentYear = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear;
};
