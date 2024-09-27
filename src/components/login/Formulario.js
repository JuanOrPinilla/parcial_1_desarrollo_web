import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de importar useNavigate
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.css';

function Formulario() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { login, password };

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage(data.message);
        navigate('/robots'); // Redirige a la lista de robots
      } else if (response.status === 401) {
        setMessage(data.message); // Mostrará "The provided credentials are incorrect."
      }
    } catch (error) {
      console.error('Error al autenticar:', error);
      setMessage('Ocurrió un error. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div className="form-container">
      <h1>Inicio de sesión</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter user"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>

        <Button
          variant="danger"
          type="button"
          onClick={() => { setLogin(''); setPassword(''); setMessage(''); }}
        >
          Cancelar
        </Button>
      </Form>

      {message && <p className="message">{message}</p>} {/* Añade una clase para los mensajes */}
    </div>
  );
}

export default Formulario;
