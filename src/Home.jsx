import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <body>
        <section>
          <div className="home-title-box">
            <strong className="home-title">
              Conversor
            </strong>
          </div>
          <div className="home-links-box">          
            <Link to='temperature' >
              <button type="button" className='temperature-link' >
                Temperatura
              </button>
            </Link>
            <Link to='mass' >
              <button type="button" className='mass-link' >
                Massa
              </button>
            </Link>
            <Link to='' >
              <button
                type="button"
                className='coin-link'
                onClick={() => alert('Ops! Estamos com um pequeno problema neste conversor. Me desculpe.') }
              >
                Moedas
              </button>
            </Link>
            <Link to='height' >
              <button type="button" className='height-link' >
                Altura
              </button>
            </Link>
          </div>
          <div className="about-footer">
            <Link to="/about" className='about-link'>
              About
            </Link>
          </div>
        </section>
      </body>
    );
  }
}

export default Home;
