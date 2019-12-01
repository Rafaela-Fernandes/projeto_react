import React, { Component } from 'react';

export default class Buttons extends Component{

    render(){
        return(
        <div className={this.props.className}>
            <button>{this.props.g1}</button>
            <button>{this.props.g2}</button>
            <button>{this.props.g3}</button>
        </div>
        )
    }
}