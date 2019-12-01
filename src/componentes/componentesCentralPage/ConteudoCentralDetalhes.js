import React, { Component } from 'react';
import imgTeste from '../../img/filmes/3022.jpg';
import Buttons from '../componentes_Basicos/Buttons';
import Pontuacao from '../componentes_Basicos/Pontuacao';
import DataFilme from '../componentes_Basicos/DataFilme';
import {Link} from 'react-router';

export default class ConteudoCentralDetalhes extends Component{
     render(){
        return(

            
            <div>
            
             <Link  className="link-return" href="/filmes"> <img src="https://img.icons8.com/ultraviolet/40/000000/return.png"/> Home</Link>
            <div className="conteudo_geral_mais_info">

            <div className="conteudo_mais_info">
                <div className="conteudo_mais_info_header">
                    <h2>Thor:Ragnarok</h2> 
                      <DataFilme className="conteudo_mais_info_data"></DataFilme>
                </div>
                <div className="conteudo_geral_detalhes">
                    <h4>Sinopse</h4>
                    <hr/>
                    <p>O filme registra o show gravado na Terra Santa, em um palco de mais de mil metros quadrados no Sultan´s Poll (Piscina do Sultão), próximo ao Monte Sião, junto às muralhas da Cidade Velha de Jerusalém. Com uma plateia de 5500 pessoas,
                        a apresentação tem músicas como 'Além do Horizonte', 'Como É Grande O Meu Amor Por Você' e 'Jesus Cristo', além de canções especiais como 'Detalhes' cantada em 4 idiomas e 'Jerusalém Toda de Ouro' interpretada em hebraico junto
                        com um coral de 30 brasileiros que vivem em Israel. O filme ainda conta com cenas da viagem de Roberto Carlos à</p>

                    <h4 className="m-top">Informações</h4>
                    <hr/>
                    <div className="conteudo_mais_detalhes">
                        <div>
                            <p className="paragrafo_detalhes">Situação</p>
                            <p>Locação</p>
                        </div>
                        <div>
                            <p className="paragrafo_detalhes">Idioma</p>
                            <p>Inglês</p>
                        </div>
                        <div>
                            <p className="paragrafo_detalhes">Duração</p>
                            <p>2h 10min</p>
                        </div>
                        <div>
                            <p className="paragrafo_detalhes">Orçamento</p>
                            <p>$180.000.000.00</p>
                        </div>
                        <div>
                            <p className="paragrafo_detalhes">Receita</p>
                            <p>$853.977.000.00</p>
                        </div>
                        <div>
                            <p className="paragrafo_detalhes">Lucro</p>
                            <p>$853.977.000.00</p>
                        </div>
                    </div>
                </div>
                <Buttons className="conteudo_mais_info_btn"></Buttons>
              <Pontuacao className="conteudo_detalhes_valor"></Pontuacao>
            </div>
            <div className="conteudo_box_img">
                <img src={imgTeste} alt=""/>
            </div>
        </div>
            </div>
        )
     }
}