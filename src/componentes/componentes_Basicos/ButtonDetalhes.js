import React, { Component } from 'react';
import {Link} from 'react-router';
export default class ButtonDetalhes  extends Component{
    render(){
         return(

        <div className="box_btn_detalhes">
           <Link href="/detalhes" >Mais detalhes</Link>
        </div>
         )
    }
}