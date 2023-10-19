function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function getNewsEndpointForLastMonth(keyword, apiKey) {
  const currentDate = new Date();
  const lastMonthDate = new Date();
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);

  const fromDate = formatDate(lastMonthDate);
  const toDate = formatDate(currentDate);

  const apiUrl = `https://newsapi.org/v2/everything?q=${keyword}&from=${fromDate}&to=${toDate}&apiKey=${apiKey}`;

  return apiUrl;
}

function formatDateNews(inputDateString) {
  const inputDate = new Date(inputDateString);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(inputDate);
  return formattedDate;
}

export { getNewsEndpointForLastMonth, formatDateNews };
