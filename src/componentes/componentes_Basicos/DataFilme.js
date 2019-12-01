import React, { Component } from 'react';



export default class DataFilme extends Component{


    render(){

        return(
         <div className={this.props.className}>
            <span>{this.props.data}</span>
        </div>
        )
    }
}