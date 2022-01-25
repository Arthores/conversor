import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Mass.css';

class Mass extends Component {
  constructor() {
    super();

    this.state = { 
      massInput: '',
      massSelect: 'pounds',
      convertedMass: '',
      numPharse: '',
      pharse: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.massConvertBtn = this.massConvertBtn.bind(this);
    this.pharseShow = this.pharseShow.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeSelect(e) {
    this.setState({
      [e.target.name]: e.target.value,
      convertedMass: '',
      numPharse: '',
      pharse: false,
    });
  };

  massConvertBtn() {
    const { massSelect, massInput } = this.state;

    if(massSelect === 'pounds') {
      const saveNum = Number(massInput);
      const calcPound = saveNum * 0.453592;
      const fixed = calcPound.toFixed(2);
      return this.setState({
        convertedMass: fixed,
        numPharse: saveNum,
        massInput: '',
        pharse: true,
      });
      
    } else if(massSelect === 'kilogram') {
      const saveNum = Number(massInput);
      const calcKilo = saveNum * 2.20462;
      const fixed = calcKilo.toFixed(2);
      return this.setState({
        convertedMass: fixed,
        numPharse: saveNum,
        massInput: '',
        pharse: true,
      });
    }
  };

  pharseShow() {
    const { pharse, massSelect, numPharse, convertedMass } = this.state;

    if(pharse === true && massSelect === 'pounds') {
      return `${numPharse}lb equivalem à ${convertedMass}Kg`
    } else if(pharse === true && massSelect === 'kilogram') {
      return `${numPharse}Kg equivalem à ${convertedMass}lb `
    }
  };

  render() {
    const { massSelect, massInput } = this.state;
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
              { this.pharseShow() }
            </span>
          </div>
          <div className="input-box">
            <label htmlFor="massSelect">
              <select
                name="massSelect"
                id="massSelect"
                className='mass-select'
                value={ massSelect }
                onChange={ this.handleChangeSelect }
              >
                <option value="kilogram">Quilogramas</option>
                <option value="pounds">Libras</option>
              </select>
            </label>
            <label htmlFor="massInput">
              <input
                type="number"
                name="massInput"
                id="massInput"
                className="mass-input"
                value={ massInput }
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
