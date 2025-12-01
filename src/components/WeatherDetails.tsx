import { useParams } from "react-router";

export function WeatherDetails() {
  const { city } = useParams();
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-10">
      <div className="flex flex-wrap justify-between gap-4 items-center mb-10">
        <div className="flex min-w-72 flex-col gap-1">
          <p className="text-black dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            New York, USA
          </p>
          <p className="text-gray-500 dark:text-[#92c0c9] text-base font-normal leading-normal">
            Monday, October 26, 10:30 AM
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="flex flex-col gap-4 p-4 bg-black/5 dark:bg-[#234248]/50 rounded-xl text-center items-center transition-shadow hover:shadow-lg">
          <div className="flex flex-col">
            <p className="text-black dark:text-white text-lg font-bold leading-normal">
              Tuesday
            </p>
            <p className="text-gray-500 dark:text-[#92c0c9] text-sm font-normal leading-normal">
              Oct 27
            </p>
          </div>
          <div className="w-24 h-24 flex items-center justify-center text-yellow-400">
            <span
              className="material-symbols-outlined text-8xl"
            >
              sunny
            </span>
          </div>
          <div>
            <p className="text-black dark:text-white text-2xl font-bold leading-tight">
              22° / 15°
            </p>
            <p className="text-gray-500 dark:text-[#92c0c9] text-base font-normal leading-normal">
              Sunny
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 bg-black/5 dark:bg-[#234248]/50 rounded-xl text-center items-center transition-shadow hover:shadow-lg">
          <div className="flex flex-col">
            <p className="text-black dark:text-white text-lg font-bold leading-normal">
              Wednesday
            </p>
            <p className="text-gray-500 dark:text-[#92c0c9] text-sm font-normal leading-normal">
              Oct 28
            </p>
          </div>
          <div className="w-24 h-24 flex items-center justify-center text-cyan-200">
            <span
              className="material-symbols-outlined text-8xl"
            >
              partly_cloudy_day
            </span>
          </div>
          <div>
            <p className="text-black dark:text-white text-2xl font-bold leading-tight">
              20° / 14°
            </p>
            <p className="text-gray-500 dark:text-[#92c0c9] text-base font-normal leading-normal">
              Partly Cloudy
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 bg-black/5 dark:bg-[#234248]/50 rounded-xl text-center items-center transition-shadow hover:shadow-lg">
          <div className="flex flex-col">
            <p className="text-black dark:text-white text-lg font-bold leading-normal">
              Thursday
            </p>
            <p className="text-gray-500 dark:text-[#92c0c9] text-sm font-normal leading-normal">
              Oct 29
            </p>
          </div>
          <div className="w-24 h-24 flex items-center justify-center text-blue-300">
            <span
              className="material-symbols-outlined text-8xl"
            >
              rainy
            </span>
          </div>
          <div>
            <p className="text-black dark:text-white text-2xl font-bold leading-tight">
              19° / 12°
            </p>
            <p className="text-gray-500 dark:text-[#92c0c9] text-base font-normal leading-normal">
              Showers
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 bg-black/5 dark:bg-[#234248]/50 rounded-xl text-center items-center transition-shadow hover:shadow-lg">
          <div className="flex flex-col">
            <p className="text-black dark:text-white text-lg font-bold leading-normal">
              Friday
            </p>
            <p className="text-gray-500 dark:text-[#92c0c9] text-sm font-normal leading-normal">
              Oct 30
            </p>
          </div>
          <div className="w-24 h-24 flex items-center justify-center text-yellow-400">
            <span
              className="material-symbols-outlined text-8xl"
            >
              sunny
            </span>
          </div>
          <div>
            <p className="text-black dark:text-white text-2xl font-bold leading-tight">
              23° / 16°
            </p>
            <p className="text-gray-500 dark:text-[#92c0c9] text-base font-normal leading-normal">
              Mostly Sunny
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 bg-black/5 dark:bg-[#234248]/50 rounded-xl text-center items-center transition-shadow hover:shadow-lg">
          <div className="flex flex-col">
            <p className="text-black dark:text-white text-lg font-bold leading-normal">
              Saturday
            </p>
            <p className="text-gray-500 dark:text-[#92c0c9] text-sm font-normal leading-normal">
              Oct 31
            </p>
          </div>
          <div className="w-24 h-24 flex items-center justify-center text-gray-400">
            <span
              className="material-symbols-outlined text-8xl"
            >
              cloudy
            </span>
          </div>
          <div>
            <p className="text-black dark:text-white text-2xl font-bold leading-tight">
              21° / 15°
            </p>
            <p className="text-gray-500 dark:text-[#92c0c9] text-base font-normal leading-normal">
              Cloudy
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
