import { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import { backend } from './declarations/backend';

function App() {
  const [resultado, setResultado] = useState<number | undefined>();

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
      <div>
        <a>
          <span className="logo-stack">
            <img src={logo} className="logo crappycalc" alt="CrappyCalc logo" />
          </span>
        </a>
      </div>
      <div>{resultado}</div>
    </div>
  );
}

export default App;
