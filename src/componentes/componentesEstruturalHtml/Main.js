import React, { Component } from 'react';
import ConteudoCentral from '../componentesCentralPage/ConteudoCentral';


export default class Main extends Component {

  render() {

    return (

      <main className="conteudo">

        <div className="conteudo_box_central">
          <ConteudoCentral></ConteudoCentral>
        </div>
      </main>
    )
  }
}