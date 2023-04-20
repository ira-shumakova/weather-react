export interface IDescription {
    description: string,
    icon: string,
    main: string
}

export interface IMainWeather {
    temp: number,
    feels_like: number,
    humidity: number,
    pressure: number,
    sunrise: number,
    sunset: number,
    wind_speed: number,
    dt: number,
    weather: IDescription[]
}

export interface ITemperature {
    max: number,
    min: number,
}

export interface IDaysWeather {
    temp: ITemperature,
    feels_like: number,
    humidity: number,
    pressure: number,
    sunrise: number,
    sunset: number,
    wind_speed: number,
    dt: number,
    weather: IDescription[]
}

export interface IWeather {
    current: IMainWeather,
    daily: IDaysWeather[]
}

export interface ICoord {
    lat: number,
    lon: number,
    name: string
}