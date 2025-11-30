import { configureStore } from "@reduxjs/toolkit";
import { geocodingApi } from "../api/geocodingApi";
import { weatherApi } from "../api/weatherApi";

export const store = configureStore({
  reducer: {
    [geocodingApi.reducerPath]: geocodingApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(geocodingApi.middleware)
      .concat(weatherApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
