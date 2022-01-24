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
              >
                <option value="kilogram">Kilograms</option>
                <option value="pounds">Pounds</option>
              </select>
            </label>
            <label htmlFor="mass-input">
              <input
                type="number"
                name="mass-input"
                id="mass-input"
                className="mass-input"
                value={ input }
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
