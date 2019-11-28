import React, { Component } from 'react';
import Header from './componentes/componentesEstruturalHtml/Header';
import Main from './componentes/componentesEstruturalHtml/Main';
import Footer from './componentes/componentesEstruturalHtml/Footer';

class App extends Component {
  // colocar aqui somente atributos referente ao componente, setar variaveis
  constructor() {
    super();
    // variavel state guarda os dados dos compenentes
  
  }

  // funçao que atualiza o estado do componente renderizado depois que o metodo render é invocado. 
  // componentDidMount() {
   

  // }


  render() {
    return (
        
      <div>
         <Header></Header>

          <Main></Main>

         <Footer></Footer>
      </div>
         
    );
  }
}
export default App;