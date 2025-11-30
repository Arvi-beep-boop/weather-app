import { createApi } from "@reduxjs/toolkit/query/react";
import { openWeatherMapBaseQuery } from "./openWeatherMapBaseQuery";
import type { GeocodingResponse } from "../types/GeocodingResponse";

export const geocodingApi = createApi({
    reducerPath: "geocodingApi",
    baseQuery: openWeatherMapBaseQuery({baseUrl: 'http://api.openweathermap.org/geo/1.0/'}),
    endpoints: (build) => ({
      getCurrentWeather: build.query<GeocodingResponse, string>({
        query: (params) => ({
          url: "direct",
          params: {q: params, limit: 1},
        }),
      }),
    }),
  });