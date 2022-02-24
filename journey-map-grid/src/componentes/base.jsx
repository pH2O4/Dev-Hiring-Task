import React from "react";
import './base.css'
import './Colunas.css'
import './content.css'
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';

class Base extends Component {


 teste(){  
    $(".Colunas").slideToggle()
    $('.Colunas').css("display", "grid")
   
 }

 teste2(){   
  $(".Colunas2").slideToggle()
  $('.Colunas2').css("display", "grid")
}
   teste3(){   
  $(".Colunas3").slideToggle()
  $('.Colunas3').css("display", "grid")
}
teste4(){   
  $(".Colunas4").slideToggle()
  $('.Colunas4').css("display", "grid")
}
teste5(){   
  $(".Colunas5").slideToggle()
  $('.Colunas5').css("display", "grid")
}
teste6(){   
  $(".Colunas6").slideToggle()
  $('.Colunas6').css("display", "grid")
}
teste7(){   
  $(".Colunas7").slideToggle()
  $('.Colunas7').css("display", "grid")
}

  render() { 
    
    return <div className="aside">

      <div className="collunsleft">
      <div className="primeiradiv">
          
        </div>
      <button id="ButtonsShow1" onClick={this.teste} ><FontAwesomeIcon icon={faBorderStyle} /> <span>Storyling</span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow2" onClick={this.teste2}><FontAwesomeIcon icon={faBorderStyle} /> <span>Task</span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow" onClick={this.teste3}><FontAwesomeIcon icon={faBorderStyle} /><span>Mood board</span>  </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow" onClick={this.teste4}><FontAwesomeIcon icon={faBorderStyle} /><span>Touchpoints</span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow" onClick={this.teste5}><FontAwesomeIcon icon={faBorderStyle} /><span>Devices</span>  </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow" onClick={this.teste6}><FontAwesomeIcon icon={faBorderStyle} /><span>Expectations</span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow" onClick={this.teste7}><FontAwesomeIcon icon={faBorderStyle} /><span> Emotions</span></button> 
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