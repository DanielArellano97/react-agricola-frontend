//importar modulos de react / dependencias
import React from "react";
import './Navbar.css';

//function del component
const MiComponente = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="www.google.cl">Inicio</a>
        </li>
        <li>
          <a href="www.google.cl">Campos</a>
        </li>
        <li>
          <a href="www.google.cl">Predios</a>
        </li>
        <li>
          <a href="www.google.cl">Cuarteles</a>
        </li>
      </ul>
    </div>
  );
};

//exportar
export default MiComponente;
