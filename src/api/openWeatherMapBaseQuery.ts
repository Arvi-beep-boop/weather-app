import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryArgs,
} from "@reduxjs/toolkit/query/react";

export const openWeatherMapBaseQuery = (
  initialArgs: FetchBaseQueryArgs
): BaseQueryFn => {
  const baseQuery = fetchBaseQuery(initialArgs);
  return (args, api, extraOptions) => {
    const fetchArgs: FetchArgs =
      typeof args === "string" ? { url: args } : args;
    return baseQuery(
      {
        ...fetchArgs,
        params: {
          ...(fetchArgs.params || {}),
          appid: import.meta.env.OPEN_WEATHER_APP_ID,
        },
      },
      api,
      extraOptions
    );
  };
};
