import React from "react";
import './Colunas.css'
import { Component } from "react";

class Colunas extends Component {
  render(){
return <div className="Colunas">
<button id="AjusteColunas1">Necessity</button>
<button id="AjusteColunas2">Discovery</button>
<button id="AjusteColunas3">Evaluation</button>
<button id="AjusteColunas4">Purchase</button>
<button id="AjusteColunas5">Onboarding</button>
<button id="AjusteColunas6">First Value</button>
<button id="AjusteColunas7">Recurring Val.</button>
<button id="AjusteColunas8">Expansion</button>
<div id="Ajuste-conteudo-Coluna1"> </div>
<div id="Ajuste-conteudo-Coluna2"> </div>
<div id="Ajuste-conteudo-Coluna3">  </div>
<div id="Ajuste-conteudo-Coluna4">  </div>
<div id="Ajuste-conteudo-Coluna5"></div>
<div id="Ajuste-conteudo-Coluna6"></div>
<div id="Ajuste-conteudo-Coluna7"></div>
<div id="Ajuste-conteudo-Coluna8"> </div>
</div>

  }
};

export default Colunas