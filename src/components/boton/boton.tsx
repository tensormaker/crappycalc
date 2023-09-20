import React from "react";

interface BotonProps {
  children: React.ReactNode;
  manejarClic: (valor: React.ReactNode) => void;
}

function Boton(props: BotonProps) {

  const esOperador = (val: React.ReactNode) => {
    return isNaN(Number(val)) && (val !== '=');
  };

  return (
    <button className={`input ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </button>
  );
}

export default Boton;
