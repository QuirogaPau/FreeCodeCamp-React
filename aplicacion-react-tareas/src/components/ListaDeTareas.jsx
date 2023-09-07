import React, { useState, useEffect } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from './Tarea';
import '../stylesheets/ListaDeTareas.css';



function ListaDeTareas() {
  const tareasIniciales = JSON.parse(localStorage.getItem('tareas')) || [];
  const [tareas, setTareas] = useState(tareasIniciales);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = tarea =>{
    console.log(tarea)
    if (tarea.texto.trim()) {
    tarea.texto = tarea.texto.trim();
    const tareasActualizadas = [tarea, ...tareas];
    setTareas(tareasActualizadas);
    }
};
// Como mostrar una lista de tareas en React: Para renderizar una lista de componentes se necesitan de las llaves '{}' tomando el listado 'tareas' y llamamos al metodo .map((objeto)) cada tarea se va a representar como un objeto en el arreglo

const eliminarTarea = id => {
  const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
  setTareas(tareasActualizadas);
}

const completarTarea = id => {
  const tareasActualizadas = tareas.map(tarea => {
    if(tarea.id === id) {
      tarea.completada = !tarea.completada;
    }
    return tarea;
  });
  setTareas(tareasActualizadas);
}

  return (
  <>
   <TareaFormulario onSubmit={agregarTarea}/>
   <div className='tareas-listas-contenedor'>
   {
    tareas.map((tarea) =>
    <Tarea 
      key={tarea.id}
      id={tarea.id}
      texto={tarea.texto}
      completada={tarea.completada}
      completarTarea={completarTarea}
      eliminarTarea={eliminarTarea}
     
    />
    )
   }
   </div>
  </> 
  );
}

export default ListaDeTareas;
// La etiqueta vacia se llaman fragmentos
