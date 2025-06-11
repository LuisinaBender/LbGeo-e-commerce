import React, { useState } from 'react';
import '../css/Nav.css';
import CarWidget from './CarWidget';

    const NavBar = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false);

    const toggleMenu = () => {
        setMostrarMenu(!mostrarMenu);
    };

    return (
        <nav className="navbar">
        <ul className="navbar__links">
            <li><a href="">Inicio</a></li>
            <li><a href="">Contacto</a></li>

            <li className="navbar__item--dropdown">
            <a href="#" onClick={toggleMenu}>Productos</a>
            {mostrarMenu && (
                <ul className="navbar__submenu">
                <li><a href="">Aceesorios Estéticos</a></li>
                <li><a href="">Aire Acondicionado</a></li>
                <li><a href="">Electricos e Híbridos</a></li>
                <li><a href="">Control de Emisiones</a></li>
                <li><a href="">Carrocería</a></li>
                <li><a href="">Neumáticos y Ruedas</a></li>
                <li><a href="">Repuesto de Interior</a></li>
                <li><a href="">Sistema de Combustible</a></li>
                <li><a href="">Sistema de Escape</a></li>
                <li><a href="">Sistema de Frenos</a></li>
                <li><a href="">Sistema de Iluminacion</a></li>
                <li><a href="">Sistema de Refrigeración</a></li>
                <li><a href="">Suspensión y Dirección</a></li>
                <li><a href="">Sistema de Transmisión</a></li>
                <li><a href="">Motor</a></li>

                </ul>
            )}
            </li>

            <li><a href="">Puntos de Ventas</a></li>
            <li><CarWidget /></li>
        </ul>
        </nav>
    );
    };

export default NavBar;
