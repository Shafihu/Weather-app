"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "../../components/Weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
    setLoading(false);
    setCity("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white p-4 gap-10">
      <h1 className="text-4xl font-bold mb-4">Weather App</h1>
      <form
        onSubmit={fetchWeather}
        className="flex items-center w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-grow p-2 rounded-l-lg text-black"
        />
        <button
          type="submit"
          className="p-2 bg-blue-700 rounded-r-lg hover:bg-blue-800 transition"
        >
          <BsSearch size={24} />
        </button>
      </form>
      {loading && <p className="mt-4">Loading...</p>}
      {weather && <Weather data={weather} />}
    </div>
  );
}
