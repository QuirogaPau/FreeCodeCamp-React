import React, { useState } from "react";
import "../stylesheets/TareaFormulario.css";
import { v4 as uuidv4 } from 'uuid';


function TareaFormulario(props) {
  const [input, setInput] = useState('');
  const manejarCambio = (evento) => {
    setInput(evento.target.value);

  };
//   setInput(evento.target.value); Esta linea lo que hace es obtener el valor al escuchar el evento del campo de texto que el usuario ingreso .

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const tareaNueva = {
        // Generar ids para las tareas con el paquete 'uuid';
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };
//   Manejar envio: que ocurre cuando ahgregamos una tarea? => onSubmit={manejarEnvio}
// metodo preventDefault() evita que no se vuelva a cargar todo el navegador y se actualice. 

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio} 
        // onChange es para manejar el cambio en lo que ingrese el usuario
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
};

export default TareaFormulario;
