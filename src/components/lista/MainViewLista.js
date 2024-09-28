import React from 'react';
import Header from '../Header';
import Lista from './Lista';
import LowerHeader from '../LowerHeader';
import './Lista.css'
  // Importamos el nuevo componente

function MainViewLista() {
  return (
    <div>
      <Header />
      <Lista />
      <LowerHeader />  {/* Añadimos el lower header aquí */}
    </div>
  );
}

export default MainViewLista;