// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainViewLogin from './components/login/MainViewLogin'; // Asegúrate de importar tu componente MainViewLogin
import MainViewLista from './components/lista/MainViewLista'; // Asegúrate de importar tu componente Lista

function App() {
  return (
    <Router> {}
      <Routes>
        <Route path="/" element={<MainViewLogin />} />
        <Route path="/robots" element={<MainViewLista />} />
      </Routes>
    </Router>
  );
}

export default App;
