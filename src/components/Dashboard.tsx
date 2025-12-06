import { useSelector } from "react-redux";
import { WeatherCard } from "./WeatherCard";
import { weatherSlice } from "../store/weather.slice";

export function Dashboard() {
  const cityList = useSelector(weatherSlice.selectors.selectFavouriteCityList);

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cityList.map((cityName) => (
          <WeatherCard cityName={cityName} />
        ))}
      </div>
    </main>
  );
}
