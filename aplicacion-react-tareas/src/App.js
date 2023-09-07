import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import freeCodeCampLogo from './image/freecodecamp-logo.png';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo} 
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
