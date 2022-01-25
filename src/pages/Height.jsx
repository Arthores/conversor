import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Height.css';

class Height extends Component {
  constructor() {
    super();
  
    this.state = {
      heightSelect: 'feets',
      heightInput: '',
      convertedNum: '',
      pharseNum: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.convertLogic = this.convertLogic.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeSelect(e) {
    this.setState({
      [e.target.name]: e.target.value,
      heightInput: '',
      pharseNum: '',
      convertedNum: '',
    });
  }

  convertLogic() {
    const { heightInput, heightSelect } = this.state;

    if(heightSelect === 'feets') {
      const saveNum = Number(heightInput);
      const feetCalc = saveNum * 0.3048;
      const fixedResult = feetCalc.toFixed(2);
      this.setState({
        pharseNum: heightInput,
        convertedNum: fixedResult,
        heightInput: '',
      })
    } else if(heightSelect === 'meters') {
      const saveNum = Number(heightInput);
      const metersCalc = saveNum * 3.28084;
      const fixedResult = metersCalc.toFixed(2);
      this.setState({
        pharseNum: heightInput,
        convertedNum: fixedResult,
        heightInput: '',
      })
    }
  }

  render() {
    const { heightSelect, heightInput, convertedNum } = this.state;
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
              <select
                name="heightSelect"
                id="heightSelect"
                className="heightSelect"
                value={ heightSelect }
                onChange={ this.handleChangeSelect }
              >
                <option value="feets">Pés</option>
                <option value="meters">Metros</option>
              </select>
            </label>
            <label htmlFor="heightInput">
              <input 
                type="number"
                name="heightInput"
                id="heightInput"
                className="heightInput"
                value={ heightInput }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div className="height-buttons-box">
            <button
              type='button'
              onClick={ this.convertLogic }
            >
              Converter
            </button>
          </div>
          <div className="height-dinamic-pharse">
            <span className="height-pharse">
              { convertedNum }
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
