import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { geocodingApi } from "./api/geocodingApi";
import { weatherApi } from "./api/weatherApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { WeatherCard } from "./components/WeatherCard";

function App() {
  const [count, setCount] = useState(0);
  // const {data: geocoding} = geocodingApi.useGetGeocodingQuery("Wrocław")
  // const {data: weather} = weatherApi.useGetCurrentWeatherQuery(geocoding ? {lat: geocoding[0]?.lat, lon: geocoding[0]?.lon, units: 'metric'} : skipToken)
  // console.log(geocoding)
  // console.log(weather)

  return (
    <>
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />

        </div>
      </main>
    </>
  );
}

export default App;
