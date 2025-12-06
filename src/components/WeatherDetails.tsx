import { Link, useParams } from "react-router";
import { weatherApi } from "../api/weatherApi";
import { skipToken } from "@reduxjs/toolkit/query";

import { getAggregatedForecast } from "../helpers/getAggregatedForecast";
import { useDispatch, useSelector } from "react-redux";
import { weatherSlice } from "../store/weather.slice";

export function WeatherDetails() {
  const dispatch = useDispatch();
  const { city } = useParams();

  const { data: currentDayData } = weatherApi.useGetCurrentWeatherQuery(
    city ? { q: city, units: "metric" } : skipToken
  );

  const { data: forecastData } = weatherApi.useGetForecastWeatherQuery(
    city ? { q: city, units: "metric" } : skipToken,
    {
      selectFromResult: (queryState) => {
        return {
          ...queryState,
          data: queryState.data && getAggregatedForecast(queryState.data),
          currentData:
            queryState.currentData &&
            getAggregatedForecast(queryState.currentData),
        };
      },
    }
  );

  const cityList = useSelector(weatherSlice.selectors.selectFavouriteCityList);

  if (!currentDayData || !forecastData) return "Loading...";

  const date = new Date(currentDayData.dt * 1000);
  const icon = `https://openweathermap.org/img/wn/${currentDayData.weather[0].icon}@2x.png`;

  return (
    <main className="flex-1 p-4 sm:p-6 md:p-10">
      <div className="flex flex-wrap justify-between gap-4 items-center mb-6">
        <div className="flex min-w-72 flex-col gap-1">
          <div className="flex items-baseline">
            <span
              onClick={() =>
                dispatch(
                  weatherSlice.actions.toggleFavourite(forecastData.city.name)
                )
              }
              className="material-symbols-outlined text-primary text-xl mr-6"
              style={{
                "font-variation-settings": `"FILL" ${
                  cityList.includes(forecastData.city.name) ? 1 : 0
                }`,
              }}
            >
              favorite
            </span>
            <div>
              <p className="text-black dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                {forecastData.city.name}, {forecastData.city.country}
              </p>
              <p className="text-gray-500 dark:text-[#92c0c9] text-base font-normal leading-normal">
                {date.toLocaleTimeString(undefined, {
                  weekday: "long",
                  month: "long",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
        <Link to={"/"}>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-black/5 dark:bg-[#234248] text-black dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Powrót</span>
          </button>
        </Link>
      </div>
      <div className="mb-8 rounded-xl bg-black/5 dark:bg-[#234248]/50 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="text-yellow-400">
            <img src={icon} />
          </div>
          <div>
            <p className="text-gray-500 dark:text-[#92c0c9] text-lg font-medium leading-normal">
              Obecna pogoda
            </p>
            <p className="text-black dark:text-white text-6xl font-bold leading-tight">
              {Math.round(currentDayData.main.temp)}°C
            </p>
            <p className="text-black dark:text-white text-lg font-medium leading-normal">
              {currentDayData.weather[0].description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">air</span>
            <div>
              <p className="text-gray-500 dark:text-[#92c0c9]">Wiatr</p>
              <p className="text-black dark:text-white font-bold">
                {Math.round(currentDayData.wind.speed * 3.6)} km/h{" "}
                {getWindDirection(currentDayData.wind.deg)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              grain
            </span>
            <div>
              <p className="text-gray-500 dark:text-[#92c0c9]">Ilość opadów</p>
              <p className="text-black dark:text-white font-bold">
                {currentDayData.rain?.["1h"] || 0} mm/m²
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              cloud
            </span>
            <div>
              <p className="text-gray-500 dark:text-[#92c0c9]">Zachmurzenie</p>
              <p className="text-black dark:text-white font-bold">
                {currentDayData.clouds.all}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {forecastData.list.map((item) => {
          const date = new Date(item.dt * 1000);
          const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

          return (
            <div
              key={item.dt}
              className="flex flex-col md:flex-row items-center gap-4 p-4 bg-black/5 dark:bg-[#234248]/50 rounded-xl transition-shadow hover:shadow-lg"
            >
              <div className="flex w-full md:w-auto items-center gap-4">
                <div className="flex flex-col items-center min-w-30">
                  <p className="text-black dark:text-white text-lg font-bold leading-normal">
                    {date.toLocaleDateString(undefined, { weekday: "long" })}
                  </p>
                  <p className="text-gray-500 dark:text-[#92c0c9] text-sm font-normal leading-normal">
                    {date.toLocaleDateString(undefined, {
                      month: "short",
                      day: "2-digit",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center text-yellow-400">
                    <img src={icon} />
                  </div>
                  <div>
                    <p className="text-black dark:text-white text-xl font-bold leading-tight">
                      {Math.round(item.temp.day)}° /{" "}
                      {Math.round(item.temp.night)}°
                    </p>
                    <p className="text-gray-500 dark:text-[#92c0c9] text-base font-normal leading-normal">
                      {item.weather[0].description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-gray-200 dark:bg-[#234248] md:h-12 md:w-px"></div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 text-sm w-full md:max-w-xl  flex-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">
                    water_drop
                  </span>
                  <div>
                    <p className="text-gray-500 dark:text-[#92c0c9]">Opady</p>
                    <p className="text-black dark:text-white font-bold">
                      {Math.round(item.pop * 100)}%
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">
                    grain
                  </span>
                  <div>
                    <p className="text-gray-500 dark:text-[#92c0c9]">Ilość</p>
                    <p className="text-black dark:text-white font-bold">
                      {item.rain || 0} mm/m²
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">
                    air
                  </span>
                  <div>
                    <p className="text-gray-500 dark:text-[#92c0c9]">Wiatr</p>
                    <p className="text-black dark:text-white font-bold">
                      {Math.round(item.speed * 3.6)} km/h{" "}
                      {getWindDirection(item.deg)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">
                    cloud
                  </span>
                  <div>
                    <p className="text-gray-500 dark:text-[#92c0c9]">
                      Zachmurzenie
                    </p>
                    <p className="text-black dark:text-white font-bold">
                      {item.clouds}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

function getWindDirection(degrees: number) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

  return directions[Math.round(degrees / 45)];
}
