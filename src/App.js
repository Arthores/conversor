import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Temperature from './pages/Temperature';
import Mass from './pages/Mass';
import Coin from './pages/Coin';
import Height from './pages/Height';
import About from './pages/About';
import NoFound from './pages/NoFound';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="temperature" element={ <Temperature /> } />
        <Route path="mass" element={ <Mass /> } />
        <Route path="coin" element={ <Coin /> } />
        <Route path="height" element={ <Height /> } />
        <Route path="about" element={ <About /> } />
        <Route path="*" element={ <NoFound /> } />
      </Routes>
    );
  }
};

export default App;
