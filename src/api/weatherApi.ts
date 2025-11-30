import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
} from "@reduxjs/toolkit/query/react";
import type { CurrentWeatherResponse } from "../types/CurrentWeatherResponse";
import type { WeatherQuery } from "../types/WeatherQuery";
import type { FetchArgs } from "@reduxjs/toolkit/query";
import { openWeatherMapBaseQuery } from "./openWeatherMapBaseQuery";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: openWeatherMapBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (build) => ({
    getCurrentWeather: build.query<CurrentWeatherResponse, WeatherQuery>({
      query: (params) => ({
        url: "weather",
        params,
      }),
    }),
  }),
});
