import React from "react";
import MeteorologicalElements from './MeteorologicalElements';
import { connect } from 'react-redux';

const isShowMeteorologicalElements = (props) => {
  return (
  <div>
    {props.showWeatherParams ? 
    <MeteorologicalElements 
    cityName={props.cityName}
    country={props.country}
    weatherParams={props.weatherParams}/> :
    <></>}
  </div>
  );
}

let mapStateToProps = (state) => {
  return {
    cityName: state.weatherState.cityName,
    country: state.weatherState.country,
    weatherParams: state.weatherState.weatherParams,
    showWeatherParams: state.weatherState.showWeatherParams
  }
}


const MeteorologicalElementsContainer = connect(mapStateToProps)(isShowMeteorologicalElements);

export default MeteorologicalElementsContainer;
