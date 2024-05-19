// components/Weather.js
import React from "react";

const Weather = ({ data }) => {
  const { temp, feels_like, humidity } = data.main;
  const windSpeed = data.wind.speed;

  return (
    <div className="mt-8  p-6 rounded-2xl shadow-lg w-full max-w-md flex flex-col  items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Weather in {data.name}</h2>
      <div className="text-6xl font-bold mb-4">{temp.toFixed(0)}°C</div>
      <div className="text-2xl mb-2">Feels Like: {feels_like.toFixed(0)}°C</div>
      <div className="text-2xl mb-2">Humidity: {humidity}%</div>
      <div className="text-2xl">Wind Speed: {windSpeed} m/s</div>
    </div>
  );
};

export default Weather;
