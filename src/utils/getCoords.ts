import axios from "axios";

const getCoordsByCity = async(city: string) => {
    const response = await axios.get(`${process.env.REACT_APP_GEO}?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    return response.data[0]
}

export default getCoordsByCity;
