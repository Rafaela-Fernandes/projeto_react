import React, { Component } from 'react';


export default class ConteudoCentralDetalhes extends Component{
     render(){
        return(
            <div className="conteudo_geral_mais_info" style="background: #f2f2f2;">
            <div className="conteudo_mais_info">
                <div className="conteudo_mais_info_header">
                    <h2>Thor:Ragnarok</h2>
                    <span class="conteudo_mais_info_data">25/10/2017</span>
                </div>
                <div class="conteudo_geral_detalhes">
                    <h4>Sinopse</h4>
                    <hr/>
                    <p>O filme registra o show gravado na Terra Santa, em um palco de mais de mil metros quadrados no Sultan´s Poll (Piscina do Sultão), próximo ao Monte Sião, junto às muralhas da Cidade Velha de Jerusalém. Com uma plateia de 5500 pessoas,
                        a apresentação tem músicas como 'Além do Horizonte', 'Como É Grande O Meu Amor Por Você' e 'Jesus Cristo', além de canções especiais como 'Detalhes' cantada em 4 idiomas e 'Jerusalém Toda de Ouro' interpretada em hebraico junto
                        com um coral de 30 brasileiros que vivem em Israel. O filme ainda conta com cenas da viagem de Roberto Carlos à</p>

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
                            <p>$853.977.000.00</p>
                        </div>
                    </div>
                </div>


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
            </div>
        </div>
        )
     }
}