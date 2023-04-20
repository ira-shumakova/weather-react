import axios from "axios";

const getWeatherByCoords = async(lat: number, long: number) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    return response.data;
}

export default getWeatherByCoords;