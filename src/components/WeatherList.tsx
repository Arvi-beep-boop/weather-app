import { useSelector } from "react-redux";
import { WeatherCard } from "./WeatherCard";
import { weatherSlice } from "../store/weather.slice";

interface WeatherListProps {
  title: string;
  cityList: string[];
}

export function WeatherList({ title, cityList }: WeatherListProps) {
  return (
    <main className="flex-grow w-full max-w-7xl min-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl/7 mb-4">{title}</h2>
      {cityList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cityList.map((cityName) => (
            <WeatherCard cityName={cityName} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-black/5 dark:bg-[#234248]/50 rounded-xl transition-shadow hover:shadow-lg">
          Brak ulubionych
        </div>
      )}
    </main>
  );
}
