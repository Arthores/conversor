import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Height.css';

class Height extends Component {
  render() {
    return (
      <body>
        <section>
        <div className="height-title-box">
            <strong>
              Altura
            </strong>
          </div>
          <div className="input-box">
            <label htmlFor="heightSelect">
              <select name="heightSelect" id="heightSelect" className="heightSelect">
                <option value="meters">Metros</option>
                <option value="feets">Pés</option>
              </select>
            </label>
          </div>
          <div className="height-buttons-box">
            <button
              type='button'
            >
              Converter
            </button>
          </div>
          <div className="height-dinamic-pharse">
            <span className="height-pharse">
              Lógica sem implementação
            </span>
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

export default Height;
