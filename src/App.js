import React, { Component } from 'react';
import Header from './componentes/componentesEstruturalHtml/Header';





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
        
      <div className="app">
         <Header></Header>

         <main className="conteudo">
              
           <div className="conteudo_box_central">
           
            {this.props.children}
            
           </div>
         </main>

      </div>
         
    );
  }
}
export default App;