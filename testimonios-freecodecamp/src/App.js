import './App.css';
import 'animate.css';
import Testimonio from './componentes/Testimonio';
import testimonios from './helpers/datos';

function App() {
  
  return (
    <div className="App">
      <div className='contenedor-prinpal'>
      <h1 className='title-app'>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
      
      {testimonios.map(({nombre, pais, cargo, empresa, imagen, testimonio }) => (  
  <Testimonio  
    nombreTestimonio={nombre}
    paisTestimonio={pais}
    cargoTestimonio={cargo}
    empresaTestimonio={empresa}
    imagenTestimonio={imagen} 
    textoTestimonio={testimonio}
  />
))}
     
      
      </div>
    </div>
  );
}

export default App;
