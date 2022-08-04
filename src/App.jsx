import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/home/home';
import GridUno from './components/gridUno/gridUno';
import GridDos from './components/gridDos/gridDos';
import GridTres from './components/gridTres/gridTres';
import GridCuatro from './components/GridCuatro/gridCuatro';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/gridUno" element={<GridUno/>}/>
      <Route exact path="/gridDos" element={<GridDos/>}/>
      <Route exact path="/gridTres" element={<GridTres/>}/>
      <Route exact path="/gridCuatro" element={<GridCuatro/>}/>
    </Routes> 
  );
}

export default App;
