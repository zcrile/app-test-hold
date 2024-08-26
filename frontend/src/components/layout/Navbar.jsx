import { Link } from 'react-router-dom';
import '../../styles/Navbar.css'

const Navbar = () => (
  <nav>
    <ul>
      
      <li><Link to="/regiones">Regiones</Link></li>  
      <li><Link to="/provincias">Provincias</Link></li>  
      <li><Link to="/ciudades">Ciudades</Link></li>
      <li><Link to="/calles">Calles</Link></li>
      <li><Link to="/calles/new">Agregar calle</Link></li>
    </ul>
  </nav>
);

export default Navbar;