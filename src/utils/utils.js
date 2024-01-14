export const convertTo12HourFormat = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  const formattedTime = `${hours12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${period}`;
  return formattedTime;
};

export const getAbbreviatedWeekday = (dateString) => {
  var date = new Date(dateString);
  var abbreviatedWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var dayOfWeek = date.getDay();
  var abbreviatedWeekday = abbreviatedWeekdays[dayOfWeek];
  return abbreviatedWeekday;
};
