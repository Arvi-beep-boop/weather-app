import type { City } from "./City";
import type { Weather } from "./Weather";

export interface ForecastWeatherResponse {
  city: City;
  list: WeatherItem[];
}

export interface WeatherItem {
  dt: number;
  temp: Temp;
  pressure: number;
  humidity: number;
  weather: Weather[];
  speed: number;
  deg: number;
  gust: number;
  clouds: number;
  pop: number;
  rain?: number;
}

export interface Temp {
  day: number;
  min?: number;
  max?: number;
  night: number;
  eve?: number;
  morn?: number;
}
