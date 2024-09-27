import React from 'react';
import './Header.css'; // Asegúrate de tener este archivo CSS
import robotsImage from './header_robot.png';

function Header() {
  return (
    <div className="header-container">
      <h1>Adopta un Robot con Robot Lovers!</h1>
      <img src={robotsImage} alt="Robots" className="robots-image" />
    </div>
  );
}

export default Header;
