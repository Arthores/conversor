import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import awesomeApiAll from '../services/api';
import './Coin.css';

class Coin extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      apiCallback: awesomeApiAll(),
    }
  }

  componentDidMount() {
    awesomeApiAll();
  }

  render() {
    return (
      <body>
        <section>
        <div className="coin-title-box">
            <strong>
              Moedas
            </strong>
          </div>
          <div className="coin-dinamic-pharse">
            <span className="coin-pharse">
              Lógica sem implementação
            </span>
          </div>
          <div className="input-box">
            Area de busca
          </div>
          <div className="coin-buttons-box">
            <button
              type="button"
            >
              Converter
            </button>
          </div>
          <div className="home-footer">
            <Link to="/" className='home-link'>
              Home
            </Link>
          </div>
        </section>
      </body>
    );
  }
}

export default Coin;
