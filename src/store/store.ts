import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { geocodingApi } from "../api/geocodingApi";
import { weatherApi } from "../api/weatherApi";
import { weatherSlice } from "./weather.slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [weatherSlice.reducerPath],
};
const rootReducer = combineReducers({
  [geocodingApi.reducerPath]: geocodingApi.reducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
  [weatherSlice.reducerPath]: weatherSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(geocodingApi.middleware)
      .concat(weatherApi.middleware),
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
