import { Link } from "react-router";
import { weatherApi } from "../api/weatherApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { Units } from "./Units";
import { useDispatch, useSelector } from "react-redux";
import { weatherSlice } from "../store/weather.slice";

interface WeatherCardProps {
  cityName: string;
}

export function WeatherCard({ cityName }: WeatherCardProps) {
  const units = useSelector(weatherSlice.selectors.selectUnits);
  const cityList = useSelector(weatherSlice.selectors.selectFavouriteCityList);

  const dispatch = useDispatch();
  const { data } = weatherApi.useGetCurrentWeatherQuery(
    cityName
      ? {
          q: cityName,
          units: units,
        }
      : skipToken
  );

  if (!data) return "Loading...";

  const city = data.name;
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="flex flex-col gap-4 p-4 bg-black/5 dark:bg-[#234248]/50 rounded-xl text-center items-center transition-shadow hover:shadow-lg">
      <div className="flex flex-col">
        <p className="text-black dark:text-white text-lg font-bold leading-normal">
          {city}, {data.sys.country}
        </p>
      </div>
      <div className="w-24 h-24 flex items-center justify-center text-yellow-400">
        <img src={icon} />
      </div>
      <div>
        <p className="text-black dark:text-white text-2xl font-bold leading-tight mb-2">
          {Math.round(data.main.temp_max)}°<Units /> /{" "}
          {Math.round(data.main.temp_min)}°<Units />
        </p>
        <p className="text-gray-500 dark:text-[#92c0c9] text-base font-normal leading-normal min-h-12 flex items-center">
          {data.weather[0].description}
        </p>
      </div>
      <div className="flex gap-4 items-center mt-6">
        <Link to={`/details/${city}`}>
          <button className=" bg-black/5 dark:bg-[#234248] text-black dark:text-white transition-colors">
            Szczegóły
          </button>
        </Link>
        <span
          onClick={() => dispatch(weatherSlice.actions.toggleFavourite(city))}
          className="material-symbols-outlined text-primary text-xl"
          style={{
            "font-variation-settings": `"FILL" ${
              cityList.includes(city) ? 1 : 0
            }`,
          }}
        >
          favorite
        </span>
      </div>
    </div>
  );
}
