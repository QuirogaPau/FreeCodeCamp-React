import React from 'react';
import '../stylesheets/Testimonio.css'

function Testimonio(props) {
  console.log('props', props)
  return (
    <div className= 'contenedor-testimonio'>
      {<img className='imagen-testimonio' src={props.imagen} alt={props.nombre}  />  }
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio pais-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
          </p>
        <p className='cargo-testimonio'>
          {props.cargos} en <strong>{props.empresa}</strong>
          </p>
        <p className='texto-testimonio'>" {props.testimonio} "</p>
      </div>
    </div>
  ); 
}

export default Testimonio