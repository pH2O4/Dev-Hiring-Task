import React from "react";
import './base.css'
import './Colunas.css'
import './content.css'
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderStyle, faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";

import $ from 'jquery';
import Divsadd from "../componentes/colunas"
import { createElement } from "react";

class Base extends Component {


 teste(){  
    $(".Colunas").slideToggle()
    $('.Colunas').css("display", "grid")
       $('#primeira-linha-hidden').slideToggle()   
 }

 teste2(){   
  $(".Colunas2").slideToggle()
  $('.Colunas2').css("display", "grid")
     $('#primeira-linha-hidden2').slideToggle()
}
   teste3(){   
  $(".Colunas3").slideToggle()
  $('.Colunas3').css("display", "grid")
     $('#primeira-linha-hidden3').slideToggle()
}
teste4(){   
  $(".Colunas4").slideToggle()
  $('.Colunas4').css("display", "grid")
     $('#primeira-linha-hidden4').slideToggle()
}
teste5(){   
  $(".Colunas5").slideToggle()
  $('.Colunas5').css("display", "grid")
     $('#primeira-linha-hidden5').slideToggle()
}
teste6(){   
  $(".Colunas6").slideToggle()
  $('.Colunas6').css("display", "grid")
     $('#primeira-linha-hidden6').slideToggle()
}
teste7(){   
  $(".Colunas7").slideToggle()
  $('.Colunas7').css("display", "grid")
     $('#primeira-linha-hidden7').slideToggle()
}
teste8(){   
  $(".Colunas8").slideToggle()
  $('.Colunas8').css("display", "grid")
     $('#primeira-linha-hidden8').slideToggle()
}
teste9(){   
  $(".Colunas9").slideToggle()
  $('.Colunas9').css("display", "grid")
     $('#primeira-linha-hidden9').slideToggle()
}
teste10(){   
  $(".Colunas10").slideToggle()
  $('.Colunas10').css("display", "grid")
     $('#primeira-linha-hidden10').slideToggle()
}
teste11(){   
  $(".Colunas11").slideToggle()
  $('.Colunas11').css("display", "grid")
     $('#primeira-linha-hidden11').slideToggle()
}

teste12(){   
  $(".Colunas12").slideToggle()
  $('.Colunas12').css("display", "grid")
     $('#primeira-linha-hidden12').slideToggle()
}
teste13(){   
  $(".Colunas13").slideToggle()
  $('.Colunas13').css("display", "grid")
     $('#primeira-linha-hidden13').slideToggle()
}

ADDROW(){
  let criandviajs = createElement("div")

}

  render() { 
    
    return <div className="aside">

      <div className="collunsleft">
      <div className="primeiradiv">
          
        </div>
      <button id="ButtonsShow1" onClick={this.teste} ><FontAwesomeIcon icon={faBorderStyle} /> <span>Storyling</span> <FontAwesomeIcon icon={faMinus} /></button> 
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
      <button id="ButtonsShow" onClick={this.teste8}><FontAwesomeIcon icon={faBorderStyle} /><span>Pains </span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow" onClick={this.teste9}><FontAwesomeIcon icon={faBorderStyle} /><span>Key Messages</span> </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow" onClick={this.teste10}><FontAwesomeIcon icon={faBorderStyle} /><span> Sources of Information</span></button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow" onClick={this.teste11}><FontAwesomeIcon icon={faBorderStyle} /><span>Keywords</span>  </button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow" onClick={this.teste12}><FontAwesomeIcon icon={faBorderStyle} /><span> Landing Pages</span></button> 
      <div className="Conteudoescondido"></div>
      <button id="ButtonsShow" onClick={this.teste13}><FontAwesomeIcon icon={faBorderStyle} /><span> KPIs</span></button> 
      <div className="Conteudoescondido"></div>
      <button id="Addrow" onClick={this.ADDROW}> <FontAwesomeIcon icon={ faPlus} /> </button>
      </div>
    </div>


  }
}


export default Base