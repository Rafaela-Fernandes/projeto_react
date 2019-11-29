import React, { Component } from 'react';
import imgTeste from '../../img/teste.png';
import Buttons from '../componentes_Basicos/Buttons';
import Input from '../componentes_Basicos/Input';
import Pontuacao from '../componentes_Basicos/Pontuacao';
import DataFilme from '../componentes_Basicos/DataFilme';
import ButtonDetalhes from '../componentes_Basicos/ButtonDetalhes';

export default class ConteudoCentral extends Component {

    render(){

        return(

       <div>
           
           <Input></Input>
          <div className="conteudo_geral" >
              <div className="conteudo_box_img">
                  <img src={imgTeste} alt=""/>
              </div>
              <div className="conteudo_info_geral">
                  <div className="conteudo_info_header">
                       <Pontuacao className="conteudo_info_valor"></Pontuacao>
                      <h2>Thor:Ragnarok</h2>
                  </div>
                    <DataFilme className="conteudo_info_data"></DataFilme>

                  <div className="conteudo_info_paragrafo">
                      <p>É dividida, consensualmente e para fins didáticos, em três períodos principais: Período Colonial, Período Imperial e Período Republicano. ... Essa nomenclatura faz referência a Pedro Álvares Cabral, É dividida, consensualmente
                          e para fins didáticos, em três períodos principais: Período Colonial, Período Imperial e Período Republicano. ... Essa nomenclatura faz referência a Pedro Álvares Cabral,


                      </p>
                  </div>
                  <Buttons className="conteudo_info_btn"></Buttons>

                  <ButtonDetalhes></ButtonDetalhes>
              </div>  
          </div>
       </div>
      
        )
    }
}