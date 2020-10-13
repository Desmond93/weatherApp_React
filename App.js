import React from 'react';
import './styles.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import MeteorologicalElementsContainer 
  from './Components/MeteorologicalElements/MeteorologicalElementsContainer';
import ErrorContainer from './Components/Error/ErrorContainer';

const App = () => {
  return (
    <div className='app'>
      <div className='appContainer'>
        <HeaderContainer />
        <MeteorologicalElementsContainer />
        <ErrorContainer />
      </div>
    </div>
  );
};

export default App;