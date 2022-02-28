import React, { useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderStyle, faPlus, faMinus, faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import './base.css'
import './Colunas.css'
import './content.css'


function Novosbuttons(){
    const [values, SetValues] = useState();
    console.log(values);
      const mudandovalores = (value) =>{   
      SetValues(prevValue=>({
        ...prevValue,
        [value.target.text]: value.target.value,
      }))
      };

 return (
  <div>
    <form id="fontsizeinput">
      <input type="text" 
    onChange={mudandovalores}/> Adicione mais linhas <button type="submit" id="Addrow"> <FontAwesomeIcon icon={faPlus} /> </button></form>

</div>
 )
}

export default Novosbuttons