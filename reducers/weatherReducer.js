import { apiGetWeather } from './../api/api';
const SET_CITY_NAME = 'SET-CITY-NAME';
const SET_WEATHER_FETCHING = 'SET-WEATHER-FETCHING';
const SET_WEATHER_PARAMS = 'SET-WEATHER-PARAMS';
const SET_ERROR_TEXT = 'SET-ERROR-TEXT';

const initialsState = {
    weatherParams: {
        temp: 0,
        temp_min: 0,
        temp_max: 0,
        feels_like: 0,
        pressure: 0,
        humidity: 0
    },
    cityName: "",
    country: "",
    weatherIsFetching: false,
    showWeatherParams: false,
    errorText: ""

}

const weatherReducer = (state = initialsState, action) => {
    switch (action.type) {
        case SET_CITY_NAME:
            return {
                ...state,
                cityName: action.newCityName,
                showWeatherParams: false,
                errorText: ""
            }
        case SET_WEATHER_FETCHING:
            return {
                ...state,
                weatherIsFetching: action.isFetching
            }
        case SET_WEATHER_PARAMS:
            return {
                ...state,
                weatherParams: action.newWeatherParams,
                country: action.country,
                showWeatherParams: true
            };
        case SET_ERROR_TEXT:
            return {
                ...state,
                errorText: action.errorText
            }
        default:
            return state;
    }
}

export default weatherReducer;

export const setCityNameAC = (newCityName) => {
    return { type: SET_CITY_NAME, newCityName }
}

export const setWeatherFetchingAC = (isFetching) => {
    return { type: SET_WEATHER_FETCHING, isFetching }
}

export const setWeatherParamsAC = (newWeatherParams, country) => {
    return { type: SET_WEATHER_PARAMS, newWeatherParams, country }
}

export const setErrorTextAC = (errorText) => {
    return { type: SET_ERROR_TEXT, errorText }
}

export const getParams = (cityName) => {
    return (dispatch) => {
        dispatch(setWeatherFetchingAC(true));
        apiGetWeather(cityName).then((response) => {
            dispatch(setWeatherParamsAC(response.main, response.sys.country));
            dispatch(setWeatherFetchingAC(false));
        })
        .catch(err => { 
            if (err.response.status === 404) {
                dispatch(setErrorTextAC("City not found. Enter the correct city name"));
                dispatch(setWeatherFetchingAC(false));
            }
            else if (err.response.status === 400) {
                dispatch(setErrorTextAC("Yoy should to enter the city name"));
                dispatch(setWeatherFetchingAC(false));
            }
        })
    }
}