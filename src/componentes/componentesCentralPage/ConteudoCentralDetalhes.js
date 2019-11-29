import React, { Component } from 'react';
<<<<<<< HEAD
import imgTeste from '../../img/teste.png';
import Buttons from '../componentes_Basicos/Buttons';
import Pontuacao from '../componentes_Basicos/Pontuacao';
import DataFilme from '../componentes_Basicos/DataFilme';
=======
>>>>>>> 178bf87074f36bf6166d09ebfdd6cc1dbb2eb798


export default class ConteudoCentralDetalhes extends Component{
     render(){
        return(
<<<<<<< HEAD
            <div className="conteudo_geral_mais_info">
            <div className="conteudo_mais_info">
                <div className="conteudo_mais_info_header">
                    <h2>Thor:Ragnarok</h2> 
                      <DataFilme className="conteudo_mais_info_data"></DataFilme>
                </div>
                <div className="conteudo_geral_detalhes">
=======
            <div className="conteudo_geral_mais_info" style="background: #f2f2f2;">
            <div className="conteudo_mais_info">
                <div className="conteudo_mais_info_header">
                    <h2>Thor:Ragnarok</h2>
                    <span class="conteudo_mais_info_data">25/10/2017</span>
                </div>
                <div class="conteudo_geral_detalhes">
>>>>>>> 178bf87074f36bf6166d09ebfdd6cc1dbb2eb798
                    <h4>Sinopse</h4>
                    <hr/>
                    <p>O filme registra o show gravado na Terra Santa, em um palco de mais de mil metros quadrados no Sultan´s Poll (Piscina do Sultão), próximo ao Monte Sião, junto às muralhas da Cidade Velha de Jerusalém. Com uma plateia de 5500 pessoas,
                        a apresentação tem músicas como 'Além do Horizonte', 'Como É Grande O Meu Amor Por Você' e 'Jesus Cristo', além de canções especiais como 'Detalhes' cantada em 4 idiomas e 'Jerusalém Toda de Ouro' interpretada em hebraico junto
                        com um coral de 30 brasileiros que vivem em Israel. O filme ainda conta com cenas da viagem de Roberto Carlos à</p>

<<<<<<< HEAD
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
=======
                    <h4 class="m-top">Informações</h4>
                    <hr/>
                    <div class="conteudo_mais_detalhes">
                        <div>
                            <p class="paragrafo_detalhes">Situação</p>
                            <p>Locação</p>
                        </div>
                        <div>
                            <p class="paragrafo_detalhes">Idioma</p>
                            <p>Inglês</p>
                        </div>
                        <div>
                            <p class="paragrafo_detalhes">Duração</p>
                            <p>2h 10min</p>
                        </div>
                        <div>
                            <p class="paragrafo_detalhes">Orçamento</p>
                            <p>$180.000.000.00</p>
                        </div>
                        <div>
                            <p class="paragrafo_detalhes">Receita</p>
                            <p>$853.977.000.00</p>
                        </div>
                        <div>
                            <p class="paragrafo_detalhes">Lucro</p>
>>>>>>> 178bf87074f36bf6166d09ebfdd6cc1dbb2eb798
                            <p>$853.977.000.00</p>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <Buttons className="conteudo_mais_info_btn"></Buttons>
              <Pontuacao className="conteudo_detalhes_valor"></Pontuacao>
            </div>
            <div className="conteudo_box_img">
                <img src={imgTeste} alt=""/>
=======


                <div className="conteudo_info_btn p-mais-info">
                    <button>Ação</button>
                    <button>Aventura</button>
                    <button>Fantasia</button>
                </div>



                <div className="conteudo_detalhes_valor">
                    <div>
                        <span>75%</span>
                    </div>
                </div>

            </div>


            <div className="conteudo_box_img">
                <img src="img/teste.png" alt=""/>
>>>>>>> 178bf87074f36bf6166d09ebfdd6cc1dbb2eb798
            </div>
        </div>
        )
     }
}