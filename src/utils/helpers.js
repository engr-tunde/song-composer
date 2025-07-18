import { toast } from "react-toastify";

export const successNotification = (message) => toast.success(message);
export const errorNotification = (message) => toast.error(message);
export const infoNotification = (message) => toast.info(message);

export const formatter = (amount) => {
  const fm = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return fm.format(amount);
};

export const dateFormatter = (date) => {
  var dateString = new Date(date).toString();
  // console.log({ dateString });
  var splittedDateString = dateString.split(" ");
  var day = splittedDateString[0];
  var day2 = splittedDateString[1];
  var month = splittedDateString[2];
  var year = splittedDateString[3];
  var formatttedDate = `${day}, ${day2} ${month}, ${year}`;
  return formatttedDate;
};

export const shuffleArray = (array) => {
  if (array) {
    const newArr = array.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  } else {
    return [];
  }
};
