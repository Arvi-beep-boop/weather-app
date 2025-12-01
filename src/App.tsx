import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { geocodingApi } from "./api/geocodingApi";
import { weatherApi } from "./api/weatherApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { WeatherCard } from "./components/WeatherCard";
import { Dashboard } from "./components/Dashboard";
import { Route, Routes } from "react-router";
import { WeatherDetails } from "./components/WeatherDetails";

function App() {
  const [count, setCount] = useState(0);
  // const {data: geocoding} = geocodingApi.useGetGeocodingQuery("Wrocław")
  // const {data: weather} = weatherApi.useGetCurrentWeatherQuery(geocoding ? {lat: geocoding[0]?.lat, lon: geocoding[0]?.lon, units: 'metric'} : skipToken)
  // console.log(geocoding)
  // console.log(weather)

  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="details/:city" element={<WeatherDetails />} />
    </Routes>
  );
}

export default App;
