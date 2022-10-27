import React from "react";

const WeatherCard = ({ name, temp, country, weather }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <li className="city">
      <h2 className="city-name">
        <span>{name}</span>
        <sup>{country}</sup>
      </h2>
      <div className="city-temp">
        {Math.round(temp)}
        <sup>°C</sup>
      </div>
      <figure>
        <img className="city-icon" src={iconUrl} alt="city-icon" />
        <figcaption>{weather[0].description}</figcaption>
      </figure>
    </li>
  );
};

export default WeatherCard;
