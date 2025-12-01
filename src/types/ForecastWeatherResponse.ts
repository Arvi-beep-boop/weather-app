import type { Weather } from "./Weather";

export interface ForecastWeatherResponse {
    city: City;
    list: WeatherItem[];
}

interface City {
    name: string
    country: string
}

interface WeatherItem {
    dt: number
    sunrise: number
    sunset: number
    temp: Temp
    pressure: number
    humidity: number
    weather: Weather[]
    speed: number
    deg: number
    gust: number
    clouds: number
    pop: number
    rain: number
}

export interface Temp {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
  }