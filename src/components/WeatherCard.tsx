import type { CurrentWeatherResponse } from "../types/CurrentWeatherResponse";
import wro1Day from "../mocks/wro_1_day.json";
import { Link } from "react-router";

const data = wro1Day as unknown as CurrentWeatherResponse;

export function WeatherCard() {
  const city = data.name;
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="bg-white dark:bg-slate-900/70 p-6 rounded-xl shadow-md dark:shadow-blak/20 flex flex-col items-center text-center transition-transform hover:scale-105">
      <h2 className="text-2xl font-semibold">
        {city}, {data.sys.country}
      </h2>
      <div className="my-4 text-amber-400">
        <img src={icon} />
      </div>
      <p className="text-5xl font-bold tracking-tighter">
        {Math.round(data.main.temp)}
        <span className="align-top text-2xl font-medium">°C</span>
      </p>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        {data.weather[0].main}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
        Min:{Math.round(data.main.temp_max)}°C Max:
        {Math.round(data.main.temp_min)}°C
      </p>
      <Link
        className="mt-6 bg-primary/20 text-primary font-semibold py-2 px-4 rounded-full text-sm hover:bg-primary/30 transition-colors"
        to={`details/${city}`}
      >
        Szczegóły
      </Link>
    </div>
  );
}
