import React, { Component } from 'react';

export default class Footer extends Component{

render(){

    return(
        
    <footer className="footer">
    <div className="conteudo_paginacao">
       
    <button type="button"  value={this.props.valor} onClick={this.props.Onclick}>
        {this.props.nome}
    </button>

    </div>
  </footer>
    )
}

}