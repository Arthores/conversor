import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Mass.css';

export class Mass extends Component {
  constructor() {
    super();

    this.state = { 
      input: '',
      select: 'pounds',
      convertMass: '',
      numPharse: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.massConvertBtn = this.massConvertBtn.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeSelect(e) {
    this.setState({
      [e.target.name]: e.target.value,
      convertMass: '',
      numPharse: '',
    });
  }

  massConvertBtn() {
    const { select, input } = this.state;

    if(select === 'pounds') {
      const saveNum = Number(input);
      const calcPound = saveNum * 0.453592;
      const fixed = calcPound.toFixed(2);
      return this.setState({
        convertMass: fixed,
        numPharse: saveNum,
        input: '',
      });

    } else if(select === 'kilogram') {
      const saveNum = Number(input);
      const calcKilo = saveNum * 2.20462;
      const fixed = calcKilo.toFixed(2);
      return this.setState({
        convertMass: fixed,
        numPharse: saveNum,
        input: '',
      });

    }
  }

  render() {
    const { select, input, numPharse, convertMass } = this.state;
    return (
      <body>
        <section>
        <div className="mass-title-box">
            <strong>
              Mass
            </strong>
          </div>
          <div className="mass-dinamic-pharse">
            <span className="mass-pharse">
              {select === 'pounds' ?
              `${numPharse}lb equivalem à ${convertMass}Kg *(valor aproximado)*` :
              `${numPharse}Kg equivalem à ${convertMass}lb *(valor aproximado!)*`
              }
            </span>
          </div>
          <div className="input-box">
            <label htmlFor="select">
              <select
                name="select"
                id="select"
                className='mass-select'
                value={ select }
                onChange={ this.handleChangeSelect }
              >
                <option value="kilogram">Quilogramas</option>
                <option value="pounds">Libras</option>
              </select>
            </label>
            <label htmlFor="input">
              <input
                type="number"
                name="input"
                id="input"
                className="mass-input"
                value={ input }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div className="mass-buttons-box">
            <button
              type="button"
              onClick={ this.massConvertBtn }
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

export default Mass;
