import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './Componentes/Navbar/Navbar'
import Banner from './Componentes/Banner/Banner'
import Curiosidades from './Componentes/Curiosidades/Curiosidades'
import Secao from './Componentes/Secao/Secao'
import Recicle from './Componentes/Recicle/Recicle'
import Materias from './Componentes/Materias/Materias'
import Busca from './Componentes/Busca/Busca'
import gatinho from './gatinho.jpg'
import Footer from './Componentes/Footer/Footer'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
                <App />
        </ParallaxProvider>

        <Navbar />
        
        <Banner />
        
        <Curiosidades />
        
        <Secao
          imagem={gatinho}
          texto={
            <p>
              O Sustencicla foi idealizado pela estudante de Desenvolvimento Front-End Karina, como apresentação do projeto
              final para a conclusão do curso oferecido pela Reprograma. Desenvolver este projeto foi uma experiência incrível!<br />
              Pensar em sustentabilidade, reciclagem e consumismo hoje é mais que pensar além do presente, é um ato
              de empatia. Atualmente no mundo bilhões de toneladas de lixo são meramente descartados no planeta, sem preocupação
              e sem investimento em ideias que auxiliem em concientização e melhorias Apesar de ser um tema atual, ainda
              se faz muito pouco. Pensando nisso, aqui apresentamos ideias simples que podem ajudar a fazer a diferença.
              Vamos juntxs!
            </p>   
          }
        />
        
        <Recicle />
        
        <Materias />
        
        <Busca />

        <Footer />
      </div>
    );
  }
}

export default App;
