const fetchData = async (serachTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '1b89a364',
      s: serachTerm
    }
  });
  console.log(response.data);
};

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
  fetchData(event.target.value);
});