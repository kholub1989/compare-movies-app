const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '1b89a364',
      s: 'avengers'
    }
  });
  console.log(response.data);
};

fetchData();