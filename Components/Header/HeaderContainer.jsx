import React from "react";
import Header from './Header';
import { setCityNameAC, getParams } from "../../reducers/weatherReducer";
import { connect } from "react-redux";

const HeaderContainer = (props) => {

  let apiGetWeatherContainer = () => {
    props.getParams(props.cityName);
  };

  return (
  <Header 
    cityName={props.cityName}
    weatherIsFetching={props.weatherIsFetching}
    setCityName={props.setCityName}
    apiGetWeatherContainer={apiGetWeatherContainer} />
  )
}

let mapStateToProps = (state) => {
  return {
    cityName: state.weatherState.cityName,
    weatherIsFetching: state.weatherState.weatherIsFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setCityName: (cityName) => dispatch(setCityNameAC(cityName)),
    getParams: (cityName) => dispatch(getParams(cityName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
