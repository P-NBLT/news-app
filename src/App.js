import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout/SharedLayout";
import Home from "./Pages/Home";
import Health from "./Pages/Health";
import Economics from "./Pages/Economics";
import Sport from "./Pages/Sport";
import Tech from "./Pages/Tech";
import Error from "./Error";
import Article from "./Components/Article/Article";
import Search from "./Pages/Search";

//Open weather credential
const endPointWeather = "https://api.openweathermap.org/geo/1.0/";

//News Api credential
const endPointHeadlines = "https://newsapi.org/v2/top-headlines?";
const endPointEverything = "https://newsapi.org/v2/everything?";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [country, setCountry] = useState("");
  const [headlineData, setHeadlineData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [category, setCategory] = useState("general");
  const [keyword, setKeyword] = useState();
  // netlify

  const [getApiKey, setGetApiKey] = useState("");
  const [getApiKeyNews, setGetApiKeyNews] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTodo() {
      const url = `/.netlify/functions/getData`;
      try {
        setLoading(true);
        const getData = await fetch(url).then((res) => {
          if (res.status !== 200) {
            throw new Error(
              `There was an error with status code ${res.status}`
            );
          }
          return res.json();
        });
        setGetApiKey(getData.weather);
        setGetApiKeyNews(getData.news);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchTodo();
  }, []);
  console.log(getApiKey);
  const handleClick = (value) => {
    setCategory(value.toLowerCase());
  };

  const getKeyword = (query) => {
    setKeyword(query);
  };

  const getSearchData = (getData) => {
    setSearchData(getData);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  } else {
    setCountry("fr");
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!country && lat) {
        const fetchData = await fetch(
          `${endPointWeather}reverse?lat=${lat}&lon=${lon}&limit=5&appid=${getApiKey}`
        );
        const findData = await fetchData.json();

        setCountry(findData[0].country.toLowerCase());
      }

      if (country) {
        const fetchDataHeadline = await fetch(
          `${endPointHeadlines}country=${country}&category=${category}&apiKey=${getApiKeyNews}`
        );
        const findDataHeadline = await fetchDataHeadline.json();
        setHeadlineData(
          findDataHeadline.articles.filter((el) => el.content !== null)
        );
      }
    };
    fetchData();
  }, [lat, country, category]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              action={handleClick}
              getKeyword={getKeyword}
              keyword={keyword}
            />
          }
        >
          {headlineData.length != 0 ? (
            <Route index element={<Home data={headlineData} />} />
          ) : null}
          <Route
            path="article/:articleId"
            element={<Article data={headlineData} />}
          />

          <Route path="health" element={<Health data={headlineData} />} />
          <Route
            path="health/article/:articleId"
            element={<Article data={headlineData} />}
          />
          <Route path="economics" element={<Economics data={headlineData} />} />
          <Route
            path="economics/article/:articleId"
            element={<Article data={headlineData} />}
          />
          <Route path="sport" element={<Sport data={headlineData} />} />
          <Route
            path="sport/article/:articleId"
            element={<Article data={headlineData} />}
          />
          <Route path="tech" element={<Tech data={headlineData} />} />
          <Route
            path="tech/article/:articleId"
            element={<Article data={headlineData} />}
          />
          <Route
            path="search"
            element={
              <Search
                endpoint={endPointEverything}
                apiKey={getApiKeyNews}
                keyword={keyword}
                retrieveData={getSearchData}
              />
            }
          />
          <Route
            path="search/article/:articleId"
            element={<Article data={searchData} />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
