export interface CurrentWeatherResponse {
    weather: Weather;
    main: Main;
    wind: Wind;
    clouds: {all: number} // cloudiness %
    rain: {'1h': number}
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string
}

interface Main {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

interface Wind {
    speed: number; 
    deg: number; // direction
}