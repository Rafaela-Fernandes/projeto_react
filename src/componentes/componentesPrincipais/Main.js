import React, { Component } from 'react';
import imgTeste from '../../img/teste.png';
import Buttons from '../componentes_Basicos/Buttons';
import Input from '../componentes_Basicos/Input';

export  default class Main extends Component{

    render(){

        return(

        <main className="conteudo">
        <div className="conteudo_box_central">
              <Input></Input>
            <div className="conteudo_geral" >
                <div className="conteudo_box_img">
                    <img src={imgTeste} alt=""/>
                </div>
                <div className="conteudo_info_geral">
                    <div className="conteudo_info_header">
                       
                        <h2>Thor:Ragnarok</h2>
                    </div>
                    <div className="conteudo_info_data">
                        <span>25/10/2019</span>
                    </div>

                    <div className="conteudo_info_paragrafo">
                        <p>É dividida, consensualmente e para fins didáticos, em três períodos principais: Período Colonial, Período Imperial e Período Republicano. ... Essa nomenclatura faz referência a Pedro Álvares Cabral, É dividida, consensualmente
                            e para fins didáticos, em três períodos principais: Período Colonial, Período Imperial e Período Republicano. ... Essa nomenclatura faz referência a Pedro Álvares Cabral,


                        </p>
                    </div>
                    <Buttons></Buttons>
                </div>

               
            </div>
        </div>
    </main>
        )
    }
}