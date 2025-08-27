const axios = require("axios");
// console.log(axios);

async function fetch() {
  const response = await axios.get(
    "http://www.omdbapi.com/?i=tt3896198&apikey=e0b64ccb"
  );
  console.log(response.data);
}

fetch();