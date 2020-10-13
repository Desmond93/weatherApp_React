import * as axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

const apiKey = '&appid=04ed37566c368210af5101118d6c2388';

export const apiGetWeather = (cityName) => axios.get(baseURL + cityName + apiKey).then(response => {
    return response.data;
})