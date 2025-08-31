const express = require("express");
const axios = require("axios");

const path = require("path");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
//   getNationality();
});

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`The server has been started on port ${port}.`);
});
let answer;
app.post("/submit-name", async (req, res) => {
  const name = req.body.username;
    const Nationality = await axios.get(
      "https://api.nationalize.io/?name=" + name
    );
    // console.log(Nationality.data.country[0].country_id);
    try{
    let ansArray = [];
    for(let i = 0;i<3;i++){
        const answer = await countryCodeToCountry(Nationality.data.country[i].country_id)
        ansArray.push(answer);
    }
    res.send(`The most probable countries are: ${ansArray[0]},  ${ansArray[1]},  ${ansArray[2]}`);
}catch(err){
    console.log(err);
    res.send("Looks like you are out of this world.");
};
    
});

async function countryCodeToCountry(code) {
  const country = await axios.get(
    "https://restcountries.com/v3.1/alpha/" + code
  );
  return country.data[0].name.official;
//   console.log();
}
