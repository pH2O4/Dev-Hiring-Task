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
import Colunas7 from "../componentes/colunas7"
import Colunas8 from "../componentes/colunas8"
import Colunas9 from "../componentes/colunas9"
import Colunas10 from "../componentes/colunas10"
import Colunas11 from "../componentes/colunas11"
import Colunas12 from "../componentes/colunas12"
import Colunas13 from "../componentes/colunas13"


class Content extends Component{
  render(){
    return <div className="Content"> 
    <div className="ajustennav">
<button id="primeira-linha-hidden" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"> <Colunas/> </div>
<button id="primeira-linha-hidden2" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"> <Colunas2/></div> 
<button id="primeira-linha-hidden3" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY" > <Colunas3/></div>
<button id="primeira-linha-hidden4" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"> <Colunas4/></div> 
<button id="primeira-linha-hidden5" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"><Colunas5/></div>
<button id="primeira-linha-hidden6" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"><Colunas6/></div> 
<button id="primeira-linha-hidden7" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"><Colunas7/></div>
<button id="primeira-linha-hidden8" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"><Colunas8/> </div>
<button id="primeira-linha-hidden9" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"><Colunas9/></div>
<button id="primeira-linha-hidden10" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"><Colunas10/></div> 
<button id="primeira-linha-hidden11" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"><Colunas11/></div>
<button id="primeira-linha-hidden12" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"><Colunas12/> </div>
<button id="primeira-linha-hidden13" className="BotãoConteudo"><FontAwesomeIcon icon={faBorderStyle} />hidden section</button> 
<div className="ConteudoEscondidoY"><Colunas13/> </div>
    </div>
 
    </div>
  }
};

export default Content