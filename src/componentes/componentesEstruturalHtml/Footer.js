import React, { Component } from 'react';

export default class Footer extends Component{

render(){

    return(
        
    <footer className="footer">
    <div className="conteudo_paginacao">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="" className="active">4</a>
        <a href="">5</a>
        <a href="">6</a>
        <a href="">7</a>

    </div>
  </footer>
    )
}

}