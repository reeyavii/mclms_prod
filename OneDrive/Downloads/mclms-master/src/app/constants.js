export const API_URL = "https://localhost:7057/";

// export const toMoney = (num) => {
//   return `₱${num
//     ?.toFixed(2)
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
// };
export const FormatDate = (date) => {
  let datetime = new Date(date);
  var newDate = new Date(datetime).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return newDate;
};
