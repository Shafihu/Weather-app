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

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      setLoading(false);
    });
    setCity("");
  };

  return (
    <>
      <div>
        <div className="grid place-items-center absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[10]"></div>
        <Image
          src="/bg.jpg"
          fill
          alt="Background pic"
          className="object-cover"
        />
        <div className="">
          <div className="flex flex-col relative justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
            <form
              onSubmit={fetchWeather}
              className="flex justify-between items-center m-auto bg-transparent border p-3 border-gray-300 text-white rounded-2xl"
            >
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
            {weather && <Weather data={weather} loading={loading} />}
          </div>
        </div>
      </div>
    </>
  );
}
