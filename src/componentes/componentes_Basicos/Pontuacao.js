import React, { Component } from 'react';


export default class Pontuacao extends Component{
  
    render(){

        return(

        <div className={this.props.className}>
            <div>
                <span>{this.props.pontuacao}</span>
            </div>
        </div>
        )
    }

}