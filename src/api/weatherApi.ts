import {
  createApi,
} from "@reduxjs/toolkit/query/react";
import type { CurrentWeatherResponse } from "../types/CurrentWeatherResponse";
import type { WeatherQuery } from "../types/WeatherQuery";
import { openWeatherMapBaseQuery } from "./openWeatherMapBaseQuery";
import type { Forecast3hResponse } from "../types/Forecast3hResponse";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: openWeatherMapBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (build) => ({
    getCurrentWeather: build.query<CurrentWeatherResponse, WeatherQuery>({
      query: (params) => ({
        url: "weather",
        params:{
          ...params,
          lang: 'PL'
        },
      }),
    }),
    getForecastWeather: build.query<Forecast3hResponse, WeatherQuery>({
      query: (params) => ({
        url: "forecast",
        params:{
          ...params,
          lang: 'PL',
        },
      }),
    }),
  }),
});
