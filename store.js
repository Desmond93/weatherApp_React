import weatherReducer from "./reducers/weatherReducer";

const SET_CITY_NAME = 'SET-CITY-NAME';
const SET_WEATHER_FETCHING = 'SET-WEATHER-FETCHING';
const SET_WEATHER_PARAMS = 'SET-WEATHER-PARAMS';

let store = {
    state: {
      weatherParams: {
        temp: 0,
        temp_min: 0,
        temp_max: 0,
        feels_like: 0,
        pressure: 0,
        humidity: 0
      },
      cityName: "",
      weatherIsFetching: false,
      showWeatherParameters: false
    },
    subscribe(observer) {
      this.rerenderEntireTree = observer;
    },
    rerenderEntireTree() {

    },
    dispatch(action) {
        this.state = weatherReducer( this.state, action );
        this.rerenderEntireTree();
       
    }
  };

  export const setCityName = (newCityName) => {
    return {type: SET_CITY_NAME, newCityName}
  }

  export const setWeatherFetching = (isFetching) => {
    return {type: SET_WEATHER_FETCHING, isFetching}
  }

  export const setWeatherParams = (newWeatherParams) => {
    return {type: SET_WEATHER_PARAMS, newWeatherParams}
  }
  
  export default store;
  