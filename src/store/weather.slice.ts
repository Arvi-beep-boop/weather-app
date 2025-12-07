import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  favouriteCityList: string[];
  units: 'metric' | 'imperial'
}

const initialState: WeatherState = {
  favouriteCityList: [],
  units: 'metric'
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
    toggleUnits : (state) => {
      if (state.units === 'metric') {
        state.units = 'imperial';
      } else {
        state.units = 'metric';
      }
    }
  },
  selectors: {
    selectFavouriteCityList: (state) => state.favouriteCityList,
    selectUnits: (state) => state.units,
  },
});
