import React from 'react';
import Routes from '../../routes';
import logo from '../../assets/logo.svg';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <img src={logo} alt="AirCnC" />
        <div className="content">
          <Routes />
        </div>
      </div>
    </div>
  );
};

export default App;
