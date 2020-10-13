import React from "react";
import { connect } from 'react-redux';
import Error from './Error';

const isShowErrorContainer = (props) => {
  return (
  <div>
    {props.errorText ? 
    <Error 
    errorText={props.errorText}/> :
    <></>}
  </div>
  );
}

let mapStateToProps = (state) => {
  return {
    errorText: state.weatherState.errorText
  }
}


const ErrorContainer = connect(mapStateToProps)(isShowErrorContainer);

export default ErrorContainer;
