import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="text-white font-bold flex bg-green-400 flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 z-[99]">
        <div className="flex flex-col items-center">
          <Image src="/cloud.png" alt="cloud image" width={60} height={60} />
          <p className="text-9xl">{data && data.weather[0].main}</p>
        </div>
      </div>
      <p className="text-6xl">{data && data.main.temp.toFixed(0)}&#176;</p>
      <div className="text-center mt-4 text-white bg-black">
        <p className="text-2xl font-semibold">Weather in {data && data.name}</p>
        <div className="flex justify-around mt-4 text-xl">
          <div>
            <p>{data && data.main.feels_like.toFixed(0)}&#176;</p>
            <p>Feels Like</p>
          </div>
          <div>
            <p>{data && data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div>
            <p>{data && data.wind.speed.toFixed(0)} km/h</p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
