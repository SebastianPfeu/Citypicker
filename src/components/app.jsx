import React from 'react';
import ActiveCity from '../containers/ActiveCity';
import CityList from '../containers/CityList';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
