const PORT = 8000;
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
///
const apiKey = "935340b7b9dbc8074e8d5b2224a29c27";
const endPointWeather = "https://api.openweathermap.org/geo/1.0/";

//News Api credential
const apiKeyNews = "111a82fd95ee4c96bb8a895db9549a61";
const endPointHeadlines = "https://newsapi.org/v2/top-headlines?";
const endPointEverything = "https://newsapi.org/v2/everything?";

// let lat,
//   lon,
//   country,
//   category = "";

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition((position) => {
//     lat = position.coords.latitude;
//     lon = position.coords.longitude;
//   });
// } else {
//   country = "fr";
// }

// console.log(country);

// const fetchData = async () => {
//   if (!country && lat) {
//     const fetchData = await fetch(
//       `${endPointWeather}reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`
//     );
//     const findData = await fetchData.json();
//     setCountry(findData[0].country.toLowerCase());
//   }

//   if (country) {
//     const fetchDataHeadline = await fetch(
//       `${endPointHeadlines}country=${country}&category=${category}&apiKey=${apiKeyNews}`
//     );
//     const findDataHeadline = await fetchDataHeadline.json();
//     console.log(findDataHeadline);
//     setHeadlineData(
//       findDataHeadline.articles.filter((el) => el.content !== null)
//     );
//   }

//   fetchData();
// };

// ///
app.get("/", (req, res) => {
  res.json("hello");
});
app.get("/geolocation", (req, res) => {
  res.json("some data here");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
