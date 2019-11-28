import React, { Component } from 'react';
import Header from './componentes/componentesPrincipais/Header';
import Footer from './componentes/componentesPrincipais/Footer';
import Main from './componentes/componentesPrincipais/Main';

class App extends Component {
  // colocar aqui somente atributos referente ao componente, setar variaveis
  constructor() {
    super();
    // variavel state guarda os dados dos compenentes
    this.state = "teste" 
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