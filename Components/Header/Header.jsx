import React from "react";
import styles from "./Header.module.css";

const Header = (props) => { 

  let apiGetWeather = () => {
    props.apiGetWeatherContainer();
  };

  const setNewCityName = (event) => {
    props.setCityName(event.target.value);
  };

  return (
    <div>
      <h1 className={styles.heading}>Weather app</h1>
      <input
        className={styles.weatherInputField}
        onChange={setNewCityName}
        placeholder="Enter the name of the city"
        value={props.cityName}
      ></input>
      <div>
        <button
          className={styles.showWeather}
          disabled={props.weatherIsFetching}
          onClick={apiGetWeather}
        >
          Show weather
        </button>
      </div>
    </div>
  );
};

export default Header;
