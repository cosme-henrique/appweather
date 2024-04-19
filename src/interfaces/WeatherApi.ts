export interface Weather {
  main: string;
  description: string;
}

export interface Main {
  temp: number;
  humidity: number
  feels_like: number
}

export interface Wind {
  speed: number;
}

export interface WeatherApi {
  name: string;
  weather: Weather[];
  main: Main;
  wind: Wind;
}