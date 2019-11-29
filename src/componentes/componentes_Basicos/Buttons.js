import React, { Component } from 'react';

export default class Buttons extends Component{

    render(){
        return(
        <div className={this.props.className}>
            <button>Ação</button>
            <button>Aventura</button>
            <button>Fantasia</button>
        </div>
        )
    }
}