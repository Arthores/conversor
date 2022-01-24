import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <body>
        <div>
          <Link to='temperature' >
            <button type="button">
              Temeperatura
            </button>
          </Link>
        </div>
        <div>
          <Link to='mass' >
            <button type="button">
              Massa
            </button>
          </Link>
        </div>
      </body>
    );
  }
}

export default Home;
