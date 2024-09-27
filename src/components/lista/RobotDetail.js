// components/RobotDetail.js
import React from 'react';
import { Card } from 'react-bootstrap'; // Asegúrate de importar Card de react-bootstrap

const RobotDetail = ({ robot }) => {
  if (!robot) return null;

  return (
    <Card style={{ width: "18rem", height: "40rem" }} className="mb-3">
      <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={robot.imagen}
        alt={robot.nombre}
      />
      <Card.Body>

        <Card.Text>
        <   strong>Nombre:</strong> {robot.nombre}
            <br />
          <strong>Modelo:</strong> {robot.modelo}
          <br />
          <strong>Empresa Fabricante:</strong> {robot.empresaFabricante}
          <br />
          <strong>Año de Fabricación:</strong> {robot.añoFabricacion}
          <br />
          <strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}
          <br />
          <strong>Humor:</strong> {robot.humor}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RobotDetail;
