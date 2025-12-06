import type { City } from "./City";
import type { Weather } from "./Weather";

export interface Forecast3hResponse {
  cod: string;
  message: number;
  cnt: number;
  list: Forecast3hListItem[];
  city: City;
}

export interface Forecast3hListItem {
  dt: number;
  main: Forecast3hMain;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
  rain?: Rain;
}

export interface Forecast3hMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Sys {
  pod: string;
}

export interface Rain {
  "3h": number;
}
