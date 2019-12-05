import React, { Component } from 'react';

export default class Footer extends Component{

render(){

    return(
        
    <footer className="footer">
    <div className="conteudo_paginacao">
    
     <button type="button"  onClick ={this.props.onClick} value={this.props.value}>teste</button>

    </div>
  </footer>
    )
}

}