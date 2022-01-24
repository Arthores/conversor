import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './Temperature.css';

class Temperature extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      numPharse: '',
      select: 'fahrenheit',
      convertTemp: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.convertButton = this.convertButton.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeSelect(e) {
    this.setState({
      [e.target.name]: e.target.value,
      convertTemp: '',
      numPharse: '',
    });
  }

  convertButton() {

    const { select, input } = this.state;

    if(select === 'fahrenheit') {
      const saveNum = Number(input);
      const calc = (saveNum - 32) / 1.8;
      const fixed = calc.toFixed(2);
      return this.setState({
        numPharse: saveNum,
        convertTemp: fixed,
        input: '',
      });
      // alert('ok')
    } else if (select === 'celsius') {
      const saveNum = Number(input);
      const calc = (saveNum * 1.8) + 32;
      const fixed = calc.toFixed(2);
      return this.setState({
        numPharse: saveNum,
        convertTemp: fixed,
        input: '',
      });
    }
  };

  render() {
    const { input, select, convertTemp, numPharse } = this.state;

    return(
      <body>
        <section>
          <div className="temperature-title-box">
            <strong>
              Temperature
            </strong>
          </div>
          <div className="temeperature-dinamic-pharse">
            <span className="temperature-pharse">
              { select === 'celsius' ? 
              `${numPharse}°C equivalem à ${convertTemp} °F` : `${numPharse}°F equivalem à ${convertTemp}°C`
                }
            </span>
          </div>
          <div className="input-box">
            <label htmlFor="select">
              <select
                name="select"
                id="select"
                className='temeperature-select'
                value={ select }
                onChange={ this.handleChangeSelect }
              >
                <option value="celsius">Celsisus</option>
                <option value="fahrenheit">Fahrenheit</option>
              </select>
            </label>
            <label htmlFor="temperature-input">
              <input
                type="number"
                name="temperature-input"
                className='temeperature-input'
                id="temperature-input"
                value={ input }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div className="temeperature-buttons-box">
            <button
              className='temeperature-convert-button'
              type='button'
              onClick={ this.convertButton }
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
