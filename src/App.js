import './App.css';
import 'leaflet/dist/leaflet.css';
import { Map } from "./components/Map";
import { Routes, Route } from 'react-router-dom';
import { BuildingOne } from './pages/BuildingOne';
import { BuildingTwo } from './pages/BuildingTwo';
import { BuildingThree } from './pages/BuildingThree';
import { BuildingFour } from './pages/BuildingFour';
import { BuildingKitaShokudou } from './pages/BuildingKitaShokudou';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Map /> } />
        <Route path='/BuildingOne' element={ <BuildingOne /> } />
        <Route path='/BuildingTwo' element={ <BuildingTwo /> } />
        <Route path='/BuildingThree' element={ <BuildingThree /> } />
        <Route path='/BuildingFour' element={ <BuildingFour /> } />
        <Route path='/BuildingKitaShokudou' element={ <BuildingKitaShokudou /> } />
      </Routes>
    </div>
  );
}

export default App;
