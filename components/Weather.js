import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  return (
    <div>
      <div>
        <div>
          <Image src="/cloud.png" alt="/" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Weather;
