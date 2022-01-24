const awesoneApiALL = async () => {
  const fetchALL = await fetch('https://economia.awesomeapi.com.br/json/all');
  const jsonResponse = await fetchALL.json();
  return Object.entries(jsonResponse);
};

export default awesoneApiALL;
