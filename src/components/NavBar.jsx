import '../css/Nav.css'
import CarWidget from './CarWidget'
const NavBar = () => {
    return (
        <nav className="navbar">
        <ul className="navbar__links">
            <a href="">Inicio</a>
            <a href="">Buscar repuesto</a>
            <a href="">Solicitar asistencia</a>
            <a href="">Mi vehículo</a>
            <CarWidget />
        </ul>
        </nav>
    );
}
export default NavBar;
