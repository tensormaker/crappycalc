import React from "react";
import LoggedOut from "./LoggedOut";
import { useAuth, AuthProvider } from "./use-auth-client";
import "./assets/main.css";
import LoggedIn from "./LoggedIn";

function App() {
  const { isAuthenticated, identity } = useAuth();
  return (
    <>
      <header id="header">
        <section id="status" className="toast hidden">
          <span id="content"></span>
          <button className="close-button" type="button">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </section>
      </header>
      <main id="pageContent">
        {isAuthenticated ? <LoggedIn /> : <LoggedOut />}
      </main>
      <>
  <title>CrappyCalc</title>
  <link type="text/css" rel="stylesheet" href="/styles.css" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
    rel="stylesheet"
  />
  <div id="appBg">
    <form name="calculator">
      <input
        type="textfield"
        name="ans"
        defaultValue=""
        autoComplete="off"
        readOnly=""
      />
      <input
        type="button"
        defaultValue={7}
        onclick="document.calculator.ans.value+='7'"
        className="gray"
      />
      <input
        type="button"
        defaultValue={8}
        onclick="document.calculator.ans.value+='8'"
        className="gray"
      />
      <input
        type="button"
        defaultValue={9}
        onclick="document.calculator.ans.value+='9'"
        className="gray"
      />
      <input
        type="button"
        defaultValue="+"
        onclick="document.calculator.ans.value+='+'"
        className="purple"
      />
      <br />
      <input
        type="button"
        defaultValue={4}
        onclick="document.calculator.ans.value+='4'"
        className="gray"
      />
      <input
        type="button"
        defaultValue={5}
        onclick="document.calculator.ans.value+='5'"
        className="gray"
      />
      <input
        type="button"
        defaultValue={6}
        onclick="document.calculator.ans.value+='6'"
        className="gray"
      />
      <input
        type="button"
        defaultValue="-"
        onclick="document.calculator.ans.value+='-'"
        className="purple"
      />
      <br />
      <input
        type="button"
        defaultValue={1}
        onclick="document.calculator.ans.value+='1'"
        className="gray"
      />
      <input
        type="button"
        defaultValue={2}
        onclick="document.calculator.ans.value+='2'"
        className="gray"
      />
      <input
        type="button"
        defaultValue={3}
        onclick="document.calculator.ans.value+='3'"
        className="gray"
      />
      <input
        type="button"
        defaultValue="X"
        onclick="document.calculator.ans.value+='*'"
        className="purple"
      />
      <br />
      <input
        type="button"
        defaultValue={0}
        onclick="document.calculator.ans.value+='0'"
        className="gray"
      />
      <input type="reset" defaultValue="C" />
      <input
        type="button"
        defaultValue="="
        onclick="document.calculator.ans.value=eval(document.calculator.ans.value)"
      />
      <input
        type="button"
        defaultValue="/"
        onclick="document.calculator.ans.value+='/'"
      />
    </form>
  </div>
</>

    </>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
