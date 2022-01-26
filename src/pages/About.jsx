import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css'

class About extends Component {
  render() {
    return (
      <body>
        <section>
          <div className="explication-text-box">
            <p className='explication'>
              Olá, tudo bem? Me chamo, Arthur. <br/><br/>

              O projeto de Conversor foi pensado com uma idéia de ser um aplicativo que reunia 
              tanto algumas medidas mais buscadas no google para se converter, mais um conversor de moedas selecionadas
              para o BRL(real Brasileiro).<br/>

              Usando o FrameWork React, com puro javaScript, CSS3 e um pouco de HTML
              foi possível dar forma a esta aplicação de forma na qual ficasse fluida e responsiva em aparelhos mobile*. <br/><br/><br/>

              *Responsivo completamente em aparelhos com resolução igual ou parecida com Iphones 6, 7, 8(Normal e suas versões Plus)e X. (Resolução aproximada de 1334x750);
              <br/>
              *Tela de Conversão de moedas se encontra inativa por problemas com a API e o cálculo feito na hora de converter;
              <br/>
              Disponibilizarei o link do repositório do projeto para consulta do código e alterações de quem se sentir na vontade. {':)'}
              <br/>
              <br/>
              <a href="https://github.com/Arthores/conversor" className='conversor-link'> Conversor Repositorio</a>
            </p>
          </div>
          <div className='links-box'>
            Como me achar:
            <div className="cointainer-links">
              <a href="https://github.com/Arthores" ><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Logo" className='img-link'/></a>
              <a href="mailto:arthurolis41@gmail.com" ><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail Link" className='img-link'/></a>
              <a href="https://www.linkedin.com/in/arthur-oliver/" ><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin Logo" className='img-link'/></a>
              <a href="https://instagram.com/harthuroli" ><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram Logo" className='img-link'/></a>
            </div>
          </div>
          <div className='home-footer'>
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
