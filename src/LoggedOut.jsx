import React from "react";
import { useAuth } from "./use-auth-client";

function LoggedOut() {
  const { login } = useAuth();

  return (
    <div className="container">
      <h1>Identidad Digital</h1>
      <h2>No estás autenticado</h2>
      <p>Para ingresa presiona este botón!</p>
      <button type="button" id="loginButton" onClick={login}>
        Login
      </button>
    </div>
  ); 
}

export default LoggedOut;
