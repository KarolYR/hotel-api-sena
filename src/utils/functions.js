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



export const daysBetweenDates = (startDate, endDate) => {
  const startDay = new Date(startDate);
  const endDay = new Date(endDate);
  return (endDay - startDay) / (1000 * 60 * 60 * 24);
}
