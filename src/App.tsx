import "./App.css";

import { Dashboard } from "./components/Dashboard";
import { Route, Routes } from "react-router";
import { WeatherDetails } from "./components/WeatherDetails";

function App() {
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
                    WeatherApp
                  </h2>
                </div>
                <div className="hidden md:flex items-center gap-9">
                  <a
                    className="text-black dark:text-white text-sm font-medium leading-normal"
                    href="#"
                  >
                    Home
                  </a>
                </div>
              </div>
              <div className="flex flex-1 justify-end gap-4 sm:gap-8 items-center">
                <label className="flex flex-col min-w-40 !h-10 max-w-64">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-gray-400 dark:text-[#92c0c9] flex border-none bg-black/5 dark:bg-[#234248] items-center justify-center pl-4 rounded-l-lg border-r-0">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-0 border-none bg-black/5 dark:bg-[#234248] focus:border-none h-full placeholder:text-gray-400 dark:placeholder:text-[#92c0c9] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                      placeholder="Search"
                      value=""
                    />
                  </div>
                </label>
              </div>
            </header>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="details/:city" element={<WeatherDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
