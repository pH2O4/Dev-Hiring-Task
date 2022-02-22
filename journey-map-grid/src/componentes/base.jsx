import React from "react";
import './base.css'
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";

class Base extends Component {
  render() {
    return <div className="aside">
      <div >

      </div>
      <button><FontAwesomeIcon icon={faBorderStyle} /> <span>Task</span> </button>
      <button><FontAwesomeIcon icon={faBorderStyle} /><span>Mood board</span>  </button>
      <button><FontAwesomeIcon icon={faBorderStyle} /><span>Touchpoints</span> </button>
      <button><FontAwesomeIcon icon={faBorderStyle} /><span>Devices</span>  </button>
      <button><FontAwesomeIcon icon={faBorderStyle} /><span>Expectations</span> </button>
      <button><FontAwesomeIcon icon={faBorderStyle} /><span> Emotions</span></button>
      <button><FontAwesomeIcon icon={faBorderStyle} /><span>Pains </span> </button>
      <button><FontAwesomeIcon icon={faBorderStyle} /><span>Key Messages</span> </button>
      <button><FontAwesomeIcon icon={faBorderStyle} /><span> Sources of Information</span></button>
      <button><FontAwesomeIcon icon={faBorderStyle} /><span>Keywords</span>  </button>
      <button><FontAwesomeIcon icon={faBorderStyle} /><span> Landing Pages</span></button>
      <button><FontAwesomeIcon icon={faBorderStyle} /><span> KPIs</span></button>
    </div>


  }
};

export default Base