import React from "react";
import { Component } from "react";
import "./content.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";

import Colunas from "../componentes/colunas"
import Colunas2 from "../componentes/colunas2"
import Colunas3 from "../componentes/colunas3"
import Colunas4 from "../componentes/colunas4"
import Colunas5 from "../componentes/colunas5"
import Colunas6 from "../componentes/colunas6"


class Content extends Component{
  render(){
    return <div className="Content"> 
    <div className="ajustennav">
<button id="primeira-linha-hidden" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"> <Colunas/> </div>
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"> <Colunas2/></div> 
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY" > <Colunas3/></div>
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"> <Colunas4/></div> 
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"><Colunas5/></div>
<button className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"><Colunas6/></div> 
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