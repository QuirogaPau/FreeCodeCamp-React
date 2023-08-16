import './App.css';
import 'animate.css';
import Testimonio from './componentes/Testimonio';
const testimonios = [{
  nombre:'Shawn Wang',
  pais:'Singapur',
  imagen:'./imagenes/imagen-Shawn.png',
  cargo:'Ingeniera de Software',
  empresa:'Amazon',
  testimonio:'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.',
},
 {        
  nombre:'Sarah Chima',
  pais:'Nigeria',
  imagen:'Sarah',
  cargo:'Ingeniera de Software',
  empresa:'ChatDesk',
  testimonio:'FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increible.'
},
{
  nombre:'Emma Bostian',
  pais:'Suecia',
  imagen:'Emma',
  cargo:'Ingeniera de Software',
  empresa:'ChatDesk',
  testimonio:'FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increible.'
}
]
function App() {
  console.log(testimonios)
  console.log(testimonios[0].nombre)
  return (
    <div className="App">
      <div className='contenedor-prinpal'>
      <h1 className='title-app'>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
      
      {testimonios.map((testimonio, index) => (  
  <Testimonio key={index} 
    nombreTestimonio={testimonio.nombre}
    paisTestimonio={testimonio.pais}
    cargoTestimonio={testimonio.cargo}
    imagenTestimonio={testimonio.imagen} 
    textoTestimonio={testimonio.testimonio}
  />
))}
     
      
      </div>
    </div>
  );
}

export default App;
