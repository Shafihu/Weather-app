"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bi";

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
    </>
  );
}
