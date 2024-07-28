import './App.css';
import 'leaflet/dist/leaflet.css';
import { Map } from "./components/Map";
import { Routes, Route } from 'react-router-dom';
import { BuildingOne } from './pages/BuildingOne'
import { BuildingTwo } from './pages/BuildingTwo'
import { BuildingThree } from './pages/BuildingThree';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Map /> } />
        <Route path='/BuildingOne' element={ <BuildingOne /> } />
        <Route path='/BuildingTwo' element={ <BuildingTwo /> } />
        <Route path='/BuildingThree' element={ <BuildingThree /> } />
      </Routes>
    </div>
  );
}

export default App;
