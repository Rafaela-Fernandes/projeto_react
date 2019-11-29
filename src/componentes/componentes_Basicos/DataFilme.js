import React, { Component } from 'react';



export default class DataFilme extends Component{
  constructor(){
      super()

  }

    render(){

        return(
         <div className={this.props.className}>
            <span>25/10/2019</span>
        </div>
        )
    }
}