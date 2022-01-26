import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './Temperature.css';

class Temperature extends Component {
  constructor() {
    super();

    this.state = {
      temperatureInput: '',
      temperatureSelect: 'fahrenheit',
      numPharse: '',
      convertedTemp: '',
      pharse: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.convertButton = this.convertButton.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.pharseShow = this.pharseShow.bind(this);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeSelect(e) {
    this.setState({
      [e.target.name]: e.target.value,
      convertTemp: '',
      numPharse: '',
      pharse: false,
    });
  };

  convertButton() {

    const { temperatureSelect, temperatureInput } = this.state;

    if(temperatureSelect === 'fahrenheit') {
      const calc = (Number(temperatureInput) - 32) / 1.8;
      const fixed = calc.toFixed(2);
      return this.setState({
        numPharse: Number(temperatureInput),
        convertedTemp: fixed,
        temperatureInput: '',
        pharse: true,
      });
      
    } else if (temperatureSelect === 'celsius') {
      const calc = (Number(temperatureInput) * 1.8) + 32;
      const fixed = calc.toFixed(2);
      return this.setState({
        numPharse: Number(temperatureInput),
        convertedTemp: fixed,
        temperatureInput: '',
        pharse: true,
      });
    }
  };

  pharseShow() {
    const { pharse, temperatureSelect, numPharse, convertedTemp } = this.state;

    if(pharse === true && temperatureSelect === 'celsius') {
      return `${numPharse}°C equivalem à ${convertedTemp} °F`
    } else if(pharse === true && temperatureSelect === 'fahrenheit') {
      return `${numPharse}°F equivalem à ${convertedTemp}°C`
    }
  };
  
  render() {
    const { temperatureInput, temperatureSelect } = this.state;

    return(
      <body>
        <section>
          <div className="temperature-title-box">
            <strong className='temperature-title'>
              Temperature
            </strong>
          </div>
          <div className="temperature-dinamic-pharse">
            <span className="temperature-pharse">
              { this.pharseShow() }
            </span>
          </div>
          <div className="input-box">
            <label htmlFor="temperatureSelect">
              <select
                name="temperatureSelect"
                id="temperatureSelect"
                className='temperature-select'
                value={ temperatureSelect }
                onChange={ this.handleChangeSelect }
                >
                <option value="celsius">Celsisus</option>
                <option value="fahrenheit">Fahrenheit</option>
              </select>
            </label>
            <label htmlFor="temperatureInput">
              <input
                type="number"
                name="temperatureInput"
                placeholder='Insira um valor'
                className='temperature-input'
                id="temperatureInput"
                value={ temperatureInput }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div className="temperature-buttons-box">
            <button
              className='temperature-convert-button'
              type='button'
              onClick={ this.convertButton }
              disabled={temperatureInput === '' ? true : false}

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

export default Temperature;
