import React from "react";
import "../stylesheets/BotonClear.css";

const BotonClear = (props) => (
  <button className="boton-clear" 
  onClick={props.manejarClear}>
    {props.children}
  </button>
);


export default BotonClear;
