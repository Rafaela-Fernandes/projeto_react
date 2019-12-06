import React, { Component } from 'react';
import Buttons from '../componentes_Basicos/Buttons';
import Pontuacao from '../componentes_Basicos/Pontuacao';
import DataFilme from '../componentes_Basicos/DataFilme';
import {Link} from 'react-router';
import $ from 'jquery';

export default class ConteudoCentralDetalhes extends Component{

    constructor(props){
        super(props)

        this.state = {filmes:[]};
       
       
    }
 

    componentDidMount(){   
        $.ajax({

            url: ` http://localhost:3004/filmes?id=${this.props.location.query.id}`,
            dataType:'json',
            type:'GET',
            success: function(resp,status,xhr){
             
             this.setState({filmes:resp})

            }.bind(this)
        });
              
    }

     render(){
        return(

            
            <div>
            
             <Link  className="link-return" href="/filmes"> <img src="https://img.icons8.com/ultraviolet/40/000000/return.png"/> Home</Link>
                         {

                             this.state.filmes.map(function(filme){

                                   return(
                                    <div className="conteudo_geral_mais_info" key={filme.id}>

                                    <div className="conteudo_mais_info">
                                        <div className="conteudo_mais_info_header">
                                            <h2>{filme.nome}</h2> 
                                              <DataFilme className="conteudo_mais_info_data"  data={filme.data}></DataFilme>
                                        </div>
                                        <div className="conteudo_geral_detalhes">
                                            <h4>Sinopse</h4>
                                            <hr/>
                                            <p>{filme.sinopse}</p>
                        
                                            <h4 className="m-top">Informações</h4>
                                            <hr/>
                                            <div className="conteudo_mais_detalhes">
                                                <div>
                                                    <p className="paragrafo_detalhes">Situação</p>
                                                    <p>{filme.situacao}</p>
                                                </div>
                                                <div>
                                                    <p className="paragrafo_detalhes">Idioma</p>
                                                    <p>{filme.idioma}</p>
                                                </div>
                                                <div>
                                                    <p className="paragrafo_detalhes">Duração</p>
                                                    <p>{filme.duracao}</p>
                                                </div>
                                                <div>
                                                    <p className="paragrafo_detalhes">Orçamento</p>
                                                    <p>{filme.orcamento}</p>
                                                </div>
                                                <div>
                                                    <p className="paragrafo_detalhes">Receita</p>
                                                    <p>{filme.receita}</p>
                                                </div>
                                                <div>
                                                    <p className="paragrafo_detalhes">Lucro</p>
                                                    <p>{filme.lucro}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Buttons className="conteudo_mais_info_btn" g1={'Ficção Cientifica'} g2={'Aventura'} g3={'Ação'}></Buttons>
                                      <Pontuacao className="conteudo_detalhes_valor" pontuacao={filme.pontuacao}></Pontuacao>
                                    </div>
                                    <div className="conteudo_box_img">
                                        <img src={filme.url} alt=""/>
                                    </div>
                                </div>


                                   )

                             })


                         }
            </div>
        )
     }
}