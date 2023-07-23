export const calculateHoursPassed = (inputTime) => {
  const inputDate = new Date(inputTime);
  const currentDate = new Date();

  const timeDifferenceInMillisecs = currentDate - inputDate;
  const timeDifferenceInMinutes = timeDifferenceInMillisecs / (1000 * 60);
  const timeDifferenceInHours = timeDifferenceInMinutes / 60;

  if (timeDifferenceInHours < 1) {
    // If less than 1 hour, return the time difference in minutes
    return Math.round(timeDifferenceInMinutes) + " mins";
  } else {
    // Otherwise, return the time difference in hours
    return Math.round(timeDifferenceInHours) + " hrs";
  }
};

export const calculateDiscount = (price, percentage) => {
  // Convert the percentage to a decimal value
  const decimalPercentage = percentage / 100;

  // Calculate the discount value
  const discount = price * decimalPercentage;

  return discount;
};

export const splitStringByComma = (str) => {
  if (str === "" || str === "null" || str === null || !str) return "";
  const substrings = str.split(",");

  return substrings;
};
