import React from "react";
import { Component } from "react";
import "./content.css"

class Content extends Component{
  render(){
    return <div className="Content"> 
    <div className="ajustennav">
<button className="BotãoConteudo">Necessity</button> 
<button className="BotãoConteudo">Discovery</button> 
<button className="BotãoConteudo">Evaluation</button> 
<button className="BotãoConteudo">Purchase</button>
<button className="BotãoConteudo">Onboarding</button> 
<button className="BotãoConteudo"> First Value</button>
<button className="BotãoConteudo">Recurring Value</button> 
<button className="BotãoConteudo">Expansion</button> 
    </div>
 
    </div>
  }
};

export default Content