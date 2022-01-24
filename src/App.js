import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Mass from './pages/Mass';
import NoFound from './pages/NoFound';
import Temperature from './pages/Temperature';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="temperature" element={ <Temperature /> } />
        <Route path="mass" element={ <Mass /> } />
        <Route path="*" element={ <NoFound /> } />
      </Routes>
    );
  }
};

export default App;
