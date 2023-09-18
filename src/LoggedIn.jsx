import React from "react";
import { useAuth } from "./use-auth-client";
//import calc from "./declarations/calc";

const whoamiStyles = {
  border: "1px solid #1a1a1a",
  marginBottom: "1rem",
};

function LoggedIn() {
  const [result, setResult] = React.useState("");

  const { whoamiActor, logout } = useAuth();

  const handleClick = async () => {
    const whoami = await whoamiActor.whoami();
    setResult(whoami);
  };

  return (
    <div className="container">
      <h1>Identidad Digital</h1>
      <h2>Estas autenticado!</h2>
      <p>Mira como los canisters te ven, haviendo click en este botón!</p>
      <button
        type="button"
        id="whoamiButton"
        className="primary"
        onClick={handleClick}
      >
        Quien soy?
      </button>
      <input
        type="text"
        readOnly
        id="whoami"
        value={result}
        placeholder="Tu identidad"
        style={whoamiStyles}
      />
      <button id="logout" onClick={logout}>
        Salir
      </button>
    </div>
  ); 
}

export default LoggedIn;
