export const getNow = () => {
  const now = new Date();

  // dia actual
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  // tiempo actual
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};


<<<<<<< HEAD

=======
>>>>>>> 3aa1628f6daa4de6f36479f4a8f0ef3a1b996a9d
export const daysBetweenDates = (startDate, endDate) => {
  const startDay = new Date(startDate);
  const endDay = new Date(endDate);
  return (endDay - startDay) / (1000 * 60 * 60 * 24);
}
