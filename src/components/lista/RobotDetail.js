// components/RobotDetail.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const RobotDetail = ({ robot }) => {
  if (!robot) return null;

  return (
    <Card style={{ width: "26rem", height: "26rem" ,backgroundColor: "#e2e6ea" }} className="mb-3">
  <Card.Body>
    <Card.Text>
      <div style={{ textAlign: "center" }}>
        <strong>
          <FormattedMessage id="Nombre" defaultMessage="Nombre:" />
        </strong> {robot.nombre}
      </div>
      <br />
      <strong>
      <Card.Img
        className="d-block mx-auto"
        style={{ height: "10rem" , width:"10rem"}}
        variant="top"
        src={robot.imagen}
        alt={robot.nombre}
      />
      </strong>
      <br />
      <strong>
        <FormattedMessage id="Modelo" defaultMessage="Modelo:" />
      </strong> {robot.modelo}
      <br />
      <strong>
        <FormattedMessage id="Empresa Fabricante" defaultMessage="Empresa Fabricante:" />
      </strong> {robot.empresaFabricante}
      <br />
      <strong>
        <FormattedMessage id="Año de fabricacion" defaultMessage="Año de Fabricación:" />
      </strong> {robot.añoFabricacion}
      <br />
      <strong>
        <FormattedMessage id="Capacidad de procesamiento" defaultMessage="Capacidad de Procesamiento:" />
      </strong> {robot.capacidadProcesamiento}
      <br />
      <strong>
        <FormattedMessage id="Humor" defaultMessage="Humor:" />
      </strong> {robot.humor}
    </Card.Text>
  </Card.Body>
</Card>

  );
};

export default RobotDetail;
