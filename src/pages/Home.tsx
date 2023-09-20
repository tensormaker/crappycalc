import { SetStateAction, useState } from "react";
import { useAuth } from "../use-auth-client";
import Card from 'react-bootstrap/Card';
import {calculator} from '../declarations/calculator';
import Boton from "../components/boton/boton";
import Pantalla from "../components/pantalla/pantalla";

export default function Home() {
  const { isAuthenticated, identity, login } = useAuth();

  const [result, setResult] = useState("");
  const { whoamiActor, logout } = useAuth();

  const handleClick = async () => {
    const whoami = await whoamiActor.whoami();
    setResult(whoami);
  };

  const whoamiStyles = {
    border: "1px solid #1a1a1a",
    marginBottom: "1rem",
  };

  const [input, setInput] = useState('');
  const [symbol, setSymbol] = useState('');

  const agregarInput = (val: any) => {
    setInput(input.replace(/[+\-*/]/g, '') + val);
  };

  const setValue = (val: any) => {
    const inputAsBigInt = BigInt(input);
    calculator.setValue(inputAsBigInt);
    setSymbol(val);
    setInput(val);
  }

  const calcularResultado = async () => {
    let val: bigint | undefined = undefined;
    setInput("cargando..");
  if (input) {
    const inputAsBigInt = BigInt(input);
    switch (symbol) {
      case '+':
        val = await calculator.add(inputAsBigInt);
        break;
      case '-':
        val = await calculator.sub(inputAsBigInt);
        break;
      case '*':
        val = await calculator.mul(inputAsBigInt);
        break;
      case '/':
        const divResult = await calculator.div(inputAsBigInt);
        if (divResult.length > 0) {
          val = divResult[0];
        } else {
          alert("La operación de división resultó en un array vacío. Verifique los datos de entrada.");
        }
        break;
      default:
        alert("Operación no válida");
        break;
    }
    if (val !== undefined) {
      setInput(val.toString());
    }
  } else {
    alert("Por favor ingrese valores para realizar los cálculos");
  }
}

  return (
    <>
      <Card className="card">
        <Card.Body>
          {isAuthenticated
            ?
            <div id="appBg">
              <Pantalla input={input}/>
              <div className='fila'>
                <Boton manejarClic={agregarInput}>7</Boton>
                <Boton manejarClic={agregarInput}>8</Boton>
                <Boton manejarClic={agregarInput}>9</Boton>
                <Boton manejarClic={setValue}>+</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClic={agregarInput}>4</Boton>
                <Boton manejarClic={agregarInput}>5</Boton>
                <Boton manejarClic={agregarInput}>6</Boton>
                <Boton manejarClic={setValue}>-</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClic={agregarInput}>1</Boton>
                <Boton manejarClic={agregarInput}>2</Boton>
                <Boton manejarClic={agregarInput}>3</Boton>
                <Boton manejarClic={setValue}>*</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClic={agregarInput}>0</Boton>
                <Boton manejarClic={() => setInput('')}>C</Boton>
                <Boton manejarClic={calcularResultado}>=</Boton>
                <Boton manejarClic={setValue}>/</Boton>
              </div>
            </div>
            :
            <div>
              <p>No Autenticado</p>

              <div className="text-center">
                <p className="pt-5 h3">Necesitas una calculadora web3?</p>
                <p className="texto-tachado">Seguramente no</p>
                <p>Ingresa con tu internet identity <span className="blinking-cursor">|</span></p>
              </div>
            </div>
          }
        </Card.Body>
      </Card>
    </>
  );
}