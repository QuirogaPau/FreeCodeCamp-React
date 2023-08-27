import React from 'react';
import '../stylesheets/Testimonio.css'

function Testimonio(props) {
  console.log('props', props)
  return (
    <div className= 'contenedor-testimonio'>
     
      {<img className='imagen-testimonio' src={require(`../imagenes/imagen-${props.imagenTestimonio}.png`)} alt={props.nombreTestimonio}  />  }
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio pais-testimonio'>
          <strong>{props.nombreTestimonio}</strong> en {props.paisTestimonio}
          </p>
        <p className='cargo-testimonio empresa-testimonio'>
          {props.cargosTestimonio} en <strong>{props.empresaTestimonio}</strong>
          </p>
        <p className='texto-testimonio'>" {props.textoTestimonio} "</p>
      </div>
    </div>
  ); 
}

export default Testimonio