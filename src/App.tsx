import './App.css';
import Navbar from './components/Navbar.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="w-screen h-screen bg-red-300">
      <Navbar />
    </div>
  );
}

export default App;
