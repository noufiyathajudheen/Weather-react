export const convertTo12HourFormat = (dateTimeString) => {
  // Parse the input string to create a Date object
  const dateTime = new Date(dateTimeString);

  // Get hours and minutes from the Date object
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  // Determine if it's AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const hours12 = hours % 12 || 12;

  // Format the result as "hh:mm AM/PM"
  const formattedTime = `${hours12}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${period}`;

  return formattedTime;
};
