import React, { Component } from 'react';
import Buttons from '../componentes_Basicos/Buttons';
import Input from '../componentes_Basicos/Input';
import Pontuacao from '../componentes_Basicos/Pontuacao';
import DataFilme from '../componentes_Basicos/DataFilme';
import ButtonDetalhes from '../componentes_Basicos/ButtonDetalhes';
import Footer from '../componentesEstruturalHtml/Footer';
import $ from 'jquery';

import {Link} from 'react-router';

export default class ConteudoCentral extends Component {
 
     constructor(props){
         super(props)

         this.state= {filmes:[],  totalPagina:5, totalObjetos:0,valor:0};
         //this.construcaoButtons = this.construcaoButtons.bind(this);
         //this.requisicaoPagina = this.requisicaoPagina.bind(this);
        
     }

    
    componentDidMount(){
    console.log(this)

        $.ajax({

            url: ` http://localhost:3004/filmes?_page=1&_limit=${this.state.totalPagina}`,
            dataType:'json',
            type:'GET',
            success: function(resp,status,xhr){
             
             this.setState({filmes:resp})

             this.state.totalObjetos = Math.ceil(xhr.getResponseHeader('X-Total-Count') / this.state.totalPagina);

                        for (let index = 1; index <= this.state.totalObjetos; index++) {

                            this.construcaoButtons(index);
                           
                        }
            }.bind(this)
        });
    }  
    
  

    
      
     construcaoButtons(number){

         $('.conteudo_paginacao').append(`<button type=submit value=${number}" onClick=${this.requisicaoPagina.bind()}>${number}</button>`);
          //$('.conteudo_paginacao').append(`<a href='http://localhost:3004/filmes?_page=${number}&_limit=${this.state.totalPagina}'>${number}</a>`);
         
        }

    requisicaoPagina(event) {
          
            //event.preventDefault();
            var valor = event.target.value
            console.log(valor);
            $.ajax({
                url: `http://localhost:3004/filmes?_page=${valor}&_limit=${this.state.totalPagina}`,
                dataType: 'json',
                type: 'GET',
                success: function(resp, status, xhr) {
                    
                    this.setState({filmes:resp})
                    console.log(resp)
                }.bind(this)
            })


        }

    





    render(){

        return(

       <div>
           
           <Input></Input>
           { 
               this.state.filmes.map(function(filme){

                return(

                 <div className="conteudo_geral"  key={filme.id}>
                    <div className="conteudo_box_img">
                        <img src={filme.url} alt=""/>
                    </div>
                    <div className="conteudo_info_geral">
                        <div className="conteudo_info_header">
                             <Pontuacao className="conteudo_info_valor"  pontuacao={filme.pontuacao}></Pontuacao>
                            <h2>{filme.nome}</h2>
                        </div>
                          <DataFilme className="conteudo_info_data" data={filme.data}></DataFilme>
      
                        <div className="conteudo_info_paragrafo">
                            <p>
                              {filme.sinopse}
                            </p>
                        </div>
                        <Buttons className="conteudo_info_btn" g1={filme.genero[0]} g2={filme.genero[1]} g3={filme.genero[2]}></Buttons>
      
                        <ButtonDetalhes>
                            <Link href={'/detalhes?id='+ filme.id}>Detalhes</Link>
                        </ButtonDetalhes>
                    </div>  
                </div>


                )

               })
           }
         
          <Footer>
             <div className="conteudo_paginacao">
             </div>
          </Footer>

         
       </div>
      
        )
    }
}