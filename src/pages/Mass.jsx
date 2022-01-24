import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Mass.css';

export class Mass extends Component {
  constructor() {
    super();

    this.state = { 
      input: '',
      select: '',
      convertMass: '',
      numPharse: '',
    };

    this.handleChange = this.handleChange.bind(this);
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
      convertMass: '',
      numPharse: '',
    });
  }

  render() {
    const { select, input } = this.state;
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
              Ainda sem lógica
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
                <option value="kilogram">Kilograms</option>
                <option value="pounds">Pounds</option>
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
