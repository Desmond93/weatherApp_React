import React from "react";
import ReactDOM from "react-dom";
import store from './reduxSrore';
import { Provider } from 'react-redux';
import App from './App';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);