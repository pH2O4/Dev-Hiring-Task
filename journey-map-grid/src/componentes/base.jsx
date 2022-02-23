import React from "react";
import './base.css'
import './Colunas.css'
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';

class Base extends Component {


  teste(){
    console.log("funcionou")
  }

   

  render() { const teste = teste => this.teste
    return <div className="aside">

      <div className="collunsleft">
      <div className="primeiradiv">
          
        </div>
      <button id="ButtonsShow1" onClick={teste} ><FontAwesomeIcon icon={faBorderStyle} /> <span>Storyling</span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /> <span>Task</span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /><span>Mood board</span>  </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /><span>Touchpoints</span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /><span>Devices</span>  </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /><span>Expectations</span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /><span> Emotions</span></button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /><span>Pains </span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /><span>Key Messages</span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /><span> Sources of Information</span></button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /><span>Keywords</span>  </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /><span> Landing Pages</span></button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow"><FontAwesomeIcon icon={faBorderStyle} /><span> KPIs</span></button> 
      <div className="Conteudoescondido"></div>
      </div>
    </div>


  }
}


export default Base