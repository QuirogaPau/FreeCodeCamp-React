import "./App.css";
import Boton from "./components/Boton";
import BotonClear from "./components/BotonClear";
import Pantalla from "./components/Pantalla";
import Logo from "./components/Logo";
import { useState } from "react";
import { evaluate, log } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  function controlarLongitudInput (entrada, val) {
    const aux = entrada;
    console.log(aux.length)
    entrada.length < 20 ? setInput(entrada + val) : setInput(aux);
  }


  const agregarInput = (val) => {
    controlarLongitudInput(input, val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los cálculos.')
    }
    
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <Logo />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}> Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
