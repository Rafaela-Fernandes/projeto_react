import React, { Component } from 'react';

export default class Input extends Component{
 render(){

    return(

    <div className="box_input">
        <input type="text" placeholder="Busque um filme por nome, ano ou gênero.."/>
       </div>
    )
 }
}