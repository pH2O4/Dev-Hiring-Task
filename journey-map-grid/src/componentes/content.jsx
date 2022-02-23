import React from "react";
import { Component } from "react";
import "./content.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";

import Colunas from "../componentes/colunas"

class Content extends Component{
  render(){
    return <div className="Content"> 
    <div className="ajustennav">
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"> <Colunas/> </div>
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div> 
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div>
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div> 
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div>
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div> 
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div>
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div>
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div>
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div> 
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div>
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div>
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"></div>
    </div>
 
    </div>
  }
};

export default Content