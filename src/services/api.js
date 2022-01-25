const awesomeApiALL = async () => {
  const fetchALL = await fetch('https://economia.awesomeapi.com.br/json/all');
  const jsonResponse = await fetchALL.json();
  return Object.values(jsonResponse);
};

export default awesomeApiALL;
