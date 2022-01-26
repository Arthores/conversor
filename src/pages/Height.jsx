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
      pharse: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.convertLogic = this.convertLogic.bind(this);
    this.pharseShow = this.pharseShow.bind(this);
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
      pharse: false,
    });
  }

  convertLogic() {
    const { heightInput, heightSelect } = this.state;
    
    if(heightSelect === 'feets') {
      const feetCalc = Number(heightInput) * 0.3048;
      const fixedResult = feetCalc.toFixed(2);
      this.setState({
        pharseNum: heightInput,
        convertedNum: fixedResult,
        heightInput: '',
        pharse: true,
      })
    } else if(heightSelect === 'meters') {
      const metersCalc = Number(heightInput) * 3.28084;
      const fixedResult = metersCalc.toFixed(2);
      this.setState({
        pharseNum: heightInput,
        convertedNum: fixedResult,
        heightInput: '',
        pharse: true,
      })
    }
  }
  
  pharseShow() {
    const { pharse, heightSelect, pharseNum, convertedNum } = this.state;

    if(pharse === true && heightSelect === 'feets') {
      return `${pharseNum}Ft equivalem à ${convertedNum}m `
    } else if(pharse === true && heightSelect === 'meters') {
      return `${pharseNum}m equivalem à ${convertedNum}Ft `
    }
  }

  render() {
    const { heightSelect, heightInput } = this.state;
    return (
      <body>
        <section>
        <div className="height-title-box">
            <strong className='height-title'>
              Altura
            </strong>
          </div>
          <div className="height-dinamic-pharse">
            <span className="height-pharse">
              { this.pharseShow() }
            </span>
          </div>
          <div className="input-box">
            <label htmlFor="heightSelect">
              <select
                name="heightSelect"
                id="heightSelect"
                className="height-select"
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
                className="height-input"
                value={ heightInput }
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div className="height-buttons-box">
            <button
              className='height-convert-button'
              type='button'
              onClick={ this.convertLogic }
              disabled={heightInput === '' ? true : false}
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

export default Height;
