import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import awesomeApiAll from '../services/api';
import {awesomeApiCurrency} from '../services/currency';
import './Coin.css';

class Coin extends Component {
  constructor() {
    super();

    this.state = {
      coinInput: '',
      currencySelect: 'USD',
      apiCallback: [],
      currency: [],
    };

    this.selectRenderizer = this.selectRenderizer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  componentDidMount = async () => {
  const currency = await awesomeApiCurrency() 
  const api = await awesomeApiAll();
  this.setState({
    apiCallback: api,
    currency,
  });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeSelect(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  selectRenderizer() {
    const { currency } = this.state;
      return currency.map((elemt) => (
        elemt !== 'USDT' &&
        <option
          value={ elemt }
          key={ elemt }
        >
          { elemt }
        </option>
      ));
  }

  render() {
    const { coinInput } = this.state;
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
            <label htmlFor="currencySelect">
              <select
              name="currencySelect"
              id="currencySelect"
              className='currency-select'
              onChange={ this.handleChangeSelect }
              >
                { this.selectRenderizer() }
              </select>
            </label>
            <label htmlFor="coinInput">
              <input
                type="number"
                name="coinInput"
                id="coinInput"
                className="coin-input"
                value={ coinInput }
                onChange={ this.handleChange }
              />
            </label>
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
