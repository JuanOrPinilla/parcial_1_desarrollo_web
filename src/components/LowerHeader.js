import React from 'react';
import './LowerHeader.css';  // Añadimos los estilos aquí
import { FormattedMessage } from 'react-intl';

function LowerHeader() {
  return (
    <div className="lower-header">
      <p>
      <FormattedMessage id="Contacto" defaultMessage="Contacto"/>
        </p>
    </div>
  );
}

export default LowerHeader;
