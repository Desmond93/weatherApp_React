import React from "react";
import styles from "./MeteorologicalElements.module.css";

const MeteorologicalElements = (props) => {
  return (
    <div>
      <div className={styles.meteorologicalElements}>
        <h2 className={styles.weatherInCityName}>Weather in {props.cityName}, {props.country} </h2>
        <div className={styles.wrapper}>
          <div className={styles.wrapperItem}>
            Temp:
            <div>{Math.round(props.weatherParams.temp - 273.15)}°</div>
          </div>
          <div className={styles.wrapperItem}>
            Temp min:
            <div>{Math.round(props.weatherParams.temp_min - 273.15)}°</div>
          </div>
          <div className={styles.wrapperItem}>
            Temp max:
            <div>{Math.round(props.weatherParams.temp_max - 273.15)}°</div>
          </div>
          <div className={styles.wrapperItem}>
            Feels like:
            <div>{Math.round(props.weatherParams.feels_like - 273.15)}°</div>
          </div>
          <div className={styles.wrapperItem}>
            Pressure:
            <div>{props.weatherParams.pressure}	Pa</div>
          </div>
          <div className={styles.wrapperItem}>
            Humidity:
            <div>{props.weatherParams.humidity}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeteorologicalElements;
