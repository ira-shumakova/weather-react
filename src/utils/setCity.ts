import axios from "axios";

const setCityToLocalStorage = async(lat: number, lon: number) => {
    const response = await axios.get(`${process.env.REACT_APP_CITY}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
    localStorage.setItem('city', response.data[0].name)
}

export default setCityToLocalStorage;