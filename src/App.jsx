import { useEffect, useState } from 'react';
import './App.css';
import Boton from './components/Boton/Boton';
import Pantalla from './components/Pantalla/Pantalla';
import BotonClear from './components/BotonClear/BotonClear';
import Logo from './components/Logo/Logo';

import logo from './assets/logo.png';
import { backend } from './declarations/backend';


import {evaluate, prodDependencies} from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [symbol, setSymbol] = useState('');

  const agregarInput = val => {
    setInput(input.replace(/[+\-*/]/g, '') + val);
  };

  const setValue = val => {
    backend.setValue(+input);
    setSymbol(val);
    setInput(val);
  }

  const calcularResultado = async () => {
    if (input) {
      var val = await backend.add(+input);
      setInput(val.toString());
    }else{
      alert("Por favor ingrese valores para realizar los calculos");
    }
  };

  // Mostrar el valor actual
  const currentValue = async () => {
    try {
      const result = backend.currentValue;
      setResultado(+result);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch del valor actual usando React Hooks
  useEffect(() => {
    currentValue();
  }, []);

  return (
    <div className="App">

    <Logo></Logo>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={setValue}>+</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>

        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>

        </div>

      </div>

  </div>

  );
}

export default App;
