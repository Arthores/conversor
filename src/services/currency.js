export const awesomeApiCurrency = async () => {
  const fetchALL = await fetch('https://economia.awesomeapi.com.br/json/all');
  const jsonResponse = await fetchALL.json();
  const objetcJson = Object.keys(jsonResponse);
  return objetcJson;
};
