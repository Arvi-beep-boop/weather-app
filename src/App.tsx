import "./App.css";

import { WeatherList } from "./components/WeatherList";
import { Link, Route, Routes } from "react-router";
import { WeatherDetails } from "./components/WeatherDetails";
import { useDispatch, useSelector } from "react-redux";
import { weatherSlice } from "./store/weather.slice";
import { SearchField } from "./components/SearchField";

const DASHBOARD_CITY_LIST = [
  "Wrocław",
  "Kraków",
  "Warszawa",
  "Gdańsk",
  "Zakopane",
];

function App() {
  const favouriteCityList = useSelector(
    weatherSlice.selectors.selectFavouriteCityList
  );
  const dispatch = useDispatch();
  const units = useSelector(weatherSlice.selectors.selectUnits);

  return (
    <div className="relative flex ite h-auto min-h-screen w-full flex-col dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-24 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 dark:border-b-[#234248] px-4 sm:px-10 py-3">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="size-6 text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      partly_cloudy_day
                    </span>
                  </div>
                  <h2 className="text-black dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                    Prognoza pogody Chmurka
                  </h2>
                </div>
                <div className="hidden md:flex items-center gap-9">
                  <Link
                    className="text-black dark:text-white text-sm font-medium leading-normal"
                    to="/"
                  >
                    Stona główna
                  </Link>
                </div>
                <div className="hidden md:flex items-center gap-9">
                  <Link
                    className="text-black dark:text-white text-sm font-medium leading-normal"
                    to="/favourites"
                  >
                    Ulubione
                  </Link>
                </div>
              </div>
              <div className="flex items-center  gap-4 sm:gap-8">
                <label className="flex items-center me-5 cursor-pointer">
                  <span className="select-none mr-3 font-medium text-2xl text-heading">
                    °F
                  </span>
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={units === 'metric'}
                    onClick={() => dispatch(weatherSlice.actions.toggleUnits())}
                  />
                  <div className="relative w-9 h-5 bg-neutral-quaternary rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600 dark:peer-checked:bg-teal-600"></div>
                  <span className="select-none ms-3 text-2xl font-medium text-heading">
                    °C
                  </span>
                </label>
                <SearchField />
              </div>
            </header>
            <Routes>
              <Route
                index
                element={
                  <WeatherList
                    title="Deska rozdzielcza"
                    cityList={DASHBOARD_CITY_LIST}
                  />
                }
              />
              <Route
                path="favourites"
                element={
                  <WeatherList title="Ulubione" cityList={favouriteCityList} />
                }
              />
              <Route path="details/:city" element={<WeatherDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
