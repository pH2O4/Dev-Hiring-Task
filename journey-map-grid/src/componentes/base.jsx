import React from "react";
import './base.css'
import './Colunas.css'
import './content.css'
import Novosbuttons from "./Novosbuttons"
import { Component} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderStyle, faPlus, faMinus, faHourglass1 } from "@fortawesome/free-solid-svg-icons";

import $ from 'jquery';

class Base extends Component {

  


  teste() {
    $("#ButtonsShow1").css("background-color", "green")
    $(".Colunas").css("background-color", "green")
    $(".Colunas").slideToggle()
    $('.Colunas').css("display", "grid")
    $('#primeira-linha-hidden').slideToggle()
  }

  teste2() {
    $("#ButtonsShow2").css("background-color", "blue")
    $(".Colunas2").css("background-color", "blue")
    $(".Colunas2").slideToggle()
    $('.Colunas2').css("display", "grid")
    $('#primeira-linha-hidden2').slideToggle()
  }
  teste3() {
    $("#ButtonsShow3").css("background-color", "red")
    $(".Colunas3").css("background-color", "red")
    $(".Colunas3").slideToggle()
    $('.Colunas3').css("display", "grid")
    $('#primeira-linha-hidden3').slideToggle()
  }
  teste4() {
    $("#ButtonsShow4").css("background-color", "PURPLE")
    $(".Colunas4").css("background-color", "PURPLE")
    $(".Colunas4").slideToggle()
    $('.Colunas4').css("display", "grid")
    $('#primeira-linha-hidden4').slideToggle()
  }
  teste5() {
    $("#ButtonsShow5").css("background-color", "FUCHSIA")
    $(".Colunas5").css("background-color", "FUCHSIA")
    $(".Colunas5").slideToggle()
    $('.Colunas5').css("display", "grid")
    $('#primeira-linha-hidden5').slideToggle()
  }
  teste6() {
    $("#ButtonsShow6").css("background-color", "ORANGE")
    $(".Colunas6").css("background-color", "ORANGE")
    $(".Colunas6").slideToggle()
    $('.Colunas6').css("display", "grid")
    $('#primeira-linha-hidden6').slideToggle()
  }
  teste7() {
    $("#ButtonsShow7").css("background-color", "GRAY")
    $(".Colunas7").css("background-color", "GRAY")
    $(".Colunas7").slideToggle()
    $('.Colunas7').css("display", "grid")
    $('#primeira-linha-hidden7').slideToggle()
  }
  teste8() {
    $("#ButtonsShow8").css("background-color", "YELLOW")
    $(".Colunas8").css("background-color", "YELLOW")
    $(".Colunas8").slideToggle()
    $('.Colunas8').css("display", "grid")
    $('#primeira-linha-hidden8').slideToggle()
  }
  teste9() {
    $("#ButtonsShow9").css("background-color", "MAROON")
    $(".Colunas9").css("background-color", "MAROON")
    $(".Colunas9").slideToggle()
    $('.Colunas9').css("display", "grid")
    $('#primeira-linha-hidden9').slideToggle()
  }
  teste10() {
    $("#ButtonsShow10").css("background-color", "LIME")
    $(".Colunas10").css("background-color", "LIME")
    $(".Colunas10").slideToggle()
    $('.Colunas10').css("display", "grid")
    $('#primeira-linha-hidden10').slideToggle()
  }
  teste11() {
    $("#ButtonsShow11").css("background-color", "NAVY")
    $(".Colunas11").css("background-color", "NAVY")
    $(".Colunas11").slideToggle()
    $('.Colunas11').css("display", "grid")
    $('#primeira-linha-hidden11').slideToggle()
  }

  teste12() {
    $("#ButtonsShow12").css("background-color", "AQUA")
    $(".Colunas12").css("background-color", "AQUA")
    $(".Colunas12").slideToggle()
    $('.Colunas12').css("display", "grid")
    $('#primeira-linha-hidden12').slideToggle()
  }
  teste13() {
    $("#ButtonsShow13").css("background-color", "SILVER")
    $(".Colunas13").css("background-color", "SILVER")
    $(".Colunas13").slideToggle()
    $('.Colunas13').css("display", "grid")
    $('#primeira-linha-hidden13').slideToggle()
  }


  render() {

    return <div className="aside">
      <div className="Configurandoas3divs">
        <div className="primeiradiv">

        </div>
        <div className="collunsleft">

          <button id="ButtonsShow1" onClick={this.teste} ><FontAwesomeIcon icon={faBorderStyle} /> <span>Storyling</span> <FontAwesomeIcon icon={faMinus} /></button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow2" onClick={this.teste2}><FontAwesomeIcon icon={faBorderStyle} /> <span>Task</span> </button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow3" onClick={this.teste3}><FontAwesomeIcon icon={faBorderStyle} /><span>Mood board</span>  </button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow4" onClick={this.teste4}><FontAwesomeIcon icon={faBorderStyle} /><span>Touchpoints</span> </button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow5" onClick={this.teste5}><FontAwesomeIcon icon={faBorderStyle} /><span>Devices</span>  </button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow6" onClick={this.teste6}><FontAwesomeIcon icon={faBorderStyle} /><span>Expectations</span> </button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow7" onClick={this.teste7}><FontAwesomeIcon icon={faBorderStyle} /><span> Emotions</span></button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow8" onClick={this.teste8}><FontAwesomeIcon icon={faBorderStyle} /><span>Pains </span> </button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow9" onClick={this.teste9}><FontAwesomeIcon icon={faBorderStyle} /><span>Key Messages</span> </button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow10" onClick={this.teste10}><FontAwesomeIcon icon={faBorderStyle} /><span> Sources of Information</span></button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow11" onClick={this.teste11}><FontAwesomeIcon icon={faBorderStyle} /><span>Keywords</span>  </button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow12" onClick={this.teste12}><FontAwesomeIcon icon={faBorderStyle} /><span> Landing Pages</span></button>
          <div className="Conteudoescondido"></div>
          <button id="ButtonsShow13" onClick={this.teste13}><FontAwesomeIcon icon={faBorderStyle} /><span> KPIs</span></button>
          <div className="Conteudoescondido"></div>
            <Novosbuttons />

        </div >
       
      </div>

    </div>


  }
}


export default Base