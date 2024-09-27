import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RobotDetail from './RobotDetail'; // Asegúrate de importar el componente RobotDetail

const Lista = () => {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch('http://localhost:3001/robots'); // Endpoint para obtener robots
        if (!response.ok) {
          throw new Error('Error en la respuesta de la red');
        }
        const data = await response.json();
        setRobots(data);
      } catch (err) {
        setError('Error al cargar los datos: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRobots();
  }, []);

  const fetchRobotDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/robots/${id}`);
      if (!response.ok) {
        throw new Error('Robot no encontrado');
      }
      const data = await response.json();

      data.imagen = data.imagen.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
      
      setSelectedRobot(data);
    } catch (err) {
      setError('Error al cargar los detalles: ' + err.message);
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Robots</h2>
      <div className="row">
        <div className="col-md-6">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Modelo</th>
                <th>Empresa Fabricante</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => fetchRobotDetails(robot.id)} style={{ cursor: 'pointer' }}>
                  <td>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <RobotDetail robot={selectedRobot} /> {/* Renderiza el detalle del robot */}
        </div>
      </div>
    </div>
  );
};

export default Lista;
