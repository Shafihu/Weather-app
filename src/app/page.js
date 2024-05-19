"use client";

import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bi";

export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
