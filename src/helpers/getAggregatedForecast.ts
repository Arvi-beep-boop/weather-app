import type { Forecast3hResponse } from "../types/Forecast3hResponse";
import type {
  ForecastWeatherResponse,
  WeatherItem,
} from "../types/ForecastWeatherResponse";

const getWhetherAt = (forecast3h: Forecast3hResponse, dt_txt: string) => {
  return forecast3h.list.find((item) => item.dt_txt === dt_txt);
};

export const getAggregatedForecast = (
  forecast3h: Forecast3hResponse
): ForecastWeatherResponse => {
  const weatherItemList: WeatherItem[] = [];

  const days = 4;

  const currentDate = new Date().toISOString().split("T")[0];

  const startIdx = forecast3h.list.findIndex((value) =>
    value.dt_txt.startsWith(currentDate)
  );

  for (let i = startIdx; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    const dateStr = date.toISOString().split("T")[0];
    const dayData = getWhetherAt(forecast3h, `${dateStr} 12:00:00`);
    const nightData = getWhetherAt(forecast3h, `${dateStr} 00:00:00`);

    if (!dayData || !nightData) throw new Error("Data not found");

    weatherItemList.push({
      dt: nightData.dt,
      clouds: dayData.clouds.all,
      deg: dayData.wind.deg,
      gust: dayData.wind.gust,
      speed: dayData.wind.speed,
      humidity: dayData.main.humidity,
      pop: dayData.pop,
      pressure: dayData.main.pressure,
      rain: dayData.rain?.["3h"],
      temp: {
        day: dayData.main.temp,
        night: nightData.main.temp,
      },
      weather: dayData.weather,
    });
  }

  return {
    city: forecast3h.city,
    list: weatherItemList,
  };
};
