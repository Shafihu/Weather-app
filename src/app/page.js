"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loadings, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
      setLoading(false);
    });
    setCity("");
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[10]"></div>
      <Image
        src="/bg.jpg"
        layout="fill"
        alt="Background pic"
        className="object-cover"
      />
      <div className="flex relative justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <form className="flex justify-between items-center w-full m-auto bg-transparent border p-3 border-gray-300 text-white rounded-2xl">
          <div>
            <input
              type="text"
              placeholder="Search City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-2xl"
            />
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
