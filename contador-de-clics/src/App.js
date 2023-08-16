import './App.css';
import './stylesheets/Boton.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {
  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }



  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' 
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' 
        />
      </div>
      <div className='contenedor-contador'>
        <Boton 
          texto='clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
      
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>

      </div>
    </div>
  );
}

export default App;
