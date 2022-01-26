import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class About extends Component {
  render() {
    return (
      <body>
        <section>
          <div className="explication-text">
            <p className='explication'>
              HI
            </p>
          </div>
          <div className='links-box'>
            <a href="mailto:arthurolis41@gmail.com" ><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail Link"/></a>
            <a href="https://www.linkedin.com/in/arthur-oliver/" ><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin Logo"/></a>
            <a href="https://instagram.com/harthuroli" ><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram Logo"/></a>
            <a href="https://github.com/Arthores" ><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Logo"/></a>
          </div>
          <div>
            <Link to="/" className='home-link'>
              Home
            </Link>
          </div>
        </section>
      </body>
    );
  }
}

export default About;
