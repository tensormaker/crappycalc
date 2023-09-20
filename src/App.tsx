import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbars from "./components/navbar/navbar";
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito','Roboto']
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbars/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;