import Image from "next/image";

export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
