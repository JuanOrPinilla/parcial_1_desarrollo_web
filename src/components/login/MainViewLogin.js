import React from 'react';
import Header from '../Header';
import Formulario from './Formulario';
import LowerHeader from '../LowerHeader';
import './MainViewLogin.css'; 

function MainViewLogin() {
  return (
    <div className="main-view-container">
      <div className="header">
        <Header />
      </div>
      <div className="form-container">
        <Formulario />
      </div>
      <div className="lower-header">
        <LowerHeader />
      </div>
    </div>
  );
}

export default MainViewLogin;
