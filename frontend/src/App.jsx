import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CalleList from './components/lists/CalleList';
import CalleForm from './components/forms/CalleForm';
import CiudadList from './components/lists/CiudadList';
import CiudadForm from './components/forms/CiudadForm';
import ProvinciaList from './components/lists/ProvinciaList';
import ProvinciaForm from './components/forms/ProvinciaForm';
import RegionList from './components/lists/RegionList';
import RegionForm from './components/forms/RegionForm';
import './App.css';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CalleList />} />
        
         <Route path="/regiones" element={<RegionList />} />
        <Route path="/regiones/new" element={<RegionForm />} />
        <Route path="/regiones/:id/edit" element={<RegionForm />} />

       
        <Route path="/provincias" element={<ProvinciaList />} />
        <Route path="/provincias/new" element={<ProvinciaForm />} />
        <Route path="/provincias/:id/edit" element={<ProvinciaForm />} />

        
        <Route path="/ciudades" element={<CiudadList />} />
        <Route path="/ciudades/new" element={<CiudadForm />} />
        <Route path="/ciudades/:id/edit" element={<CiudadForm />} />

        
        <Route path="/calles" element={<CalleList />} />
        <Route path="/calles/new" element={<CalleForm />} />
        <Route path="/calles/:id/edit" element={<CalleForm />} />
      </Routes>
    </Router>
  );
}

export default App;

