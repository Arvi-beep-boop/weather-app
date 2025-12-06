import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  favouriteCityList: string[];
}

const initialState: WeatherState = {
  favouriteCityList: ["Wrocław", "Kraków", "Warszawa", "Gdańsk", "Zakopane"],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addFavourite: (state, { payload: cityName }: PayloadAction<string>) => {
      state.favouriteCityList.push(cityName);
    },
    removeFavourite: (state, { payload: cityName }: PayloadAction<string>) => {
      state.favouriteCityList = state.favouriteCityList.filter(
        (item) => item !== cityName
      );
    },
    toggleFavourite: (state, { payload: cityName }: PayloadAction<string>) => {
      if (state.favouriteCityList.includes(cityName)) {
        state.favouriteCityList = state.favouriteCityList.filter(
          (item) => item !== cityName
        );
      } else {
        state.favouriteCityList.push(cityName);
      }
    },
  },
  selectors: {
    selectFavouriteCityList: (state) => state.favouriteCityList,
  },
});
