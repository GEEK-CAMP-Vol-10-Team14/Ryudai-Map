import './App.css';
import 'leaflet/dist/leaflet.css';
import { Map } from "./components/Map";
import { Routes, Route } from 'react-router-dom';
import { Building_One } from './pages/Building_One'
import { Building_Two } from './pages/Building_Two'
import { Building_Three } from './pages/Building_Three';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Map /> } />
        <Route path='/Building_One' element={ <Building_One /> } />
        <Route path='/Building_Two' element={ <Building_Two /> } />
        <Route path='/Building_Three' element={ <Building_Three /> } />
      </Routes>
    </div>
  );
}

export default App;
