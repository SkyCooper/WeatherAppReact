import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const Main = () => {
  const [searchText, setSearchText] = useState("istanbul");
  const [info, setInfo] = useState([]);
  const [error, setError] = useState("Enter a city name");
  const [cityname, setCityname] = useState([]);
  let apiKey = process.env.REACT_APP_API_KEY;
  let units = "metric";
  let lang = "tr";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;

  useEffect(() => {
    getCity();
    setSearchText("");
    // eslint-disable-next-line
  }, []);

  const getCity = async () => {
    try {
      if (searchText) {
        const { data } = await axios(url);
        console.log(data);
        const {
          name,
          main: { temp },
          sys: { country },
          weather,
        } = data;
        setInfo([{ name, temp, country, weather }, ...info]);
      }
    } catch (error) {
      setError("İnvalid city name, try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setError("Please Enter a city");
    } else {
      if (cityname.includes(searchText)) {
        setError(`You already search for ${searchText.toUpperCase()}`);
      } else {
        getCity();
        setCityname([...cityname, searchText]);
      }
      setSearchText("");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  return (
    <section className="main">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          type="text"
          placeholder="Search for a city"
          autoFocus
        />
        <button type="submit">SUBMIT</button>
        <span className="msg">{error}</span>
      </form>
      <div className="container">
        <ul className="cities">
          {info.map((item, index) => {
            return <WeatherCard key={index} {...item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Main;
