import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import NoFound from './pages/NoFound';
import Temperature from './pages/Temperature';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="temperature" element={ <Temperature/> } />
        <Route path="*" element={ <NoFound /> } />
      </Routes>
    );
  }
};

export default App;
