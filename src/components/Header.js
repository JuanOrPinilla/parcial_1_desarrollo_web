import React from 'react';
import './Header.css'; // Asegúrate de tener este archivo CSS
import robotsImage from './header_robot.png';
import { FormattedMessage } from 'react-intl';

function Header() {
  return (
    <div className="header-container">
      <h1>
      <FormattedMessage id="Adopta" defaultMessage="Adopta"/>
      </h1>
      <img 
        src={robotsImage} 
        alt="Robots" 
        className="robots-image" 
        style={{ width: '100%', height: 'auto', maxHeight: '200px' }} // Estilo en línea
      />
    </div>
  );
}

export default Header;
