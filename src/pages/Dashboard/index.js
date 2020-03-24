import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Dashboard = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id }
      });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  const renderItem = () =>
    spots.map((spot, index) => (
      <li key={spot.name + index.toString()}>
        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
        <strong>{spot.company}</strong>
        <span>{spot.price ? `R$${spot.price}/dia` : 'Gratuito'}</span>
      </li>
    ));

  return (
    <div className="dashboard">
      <ul>{renderItem()}</ul>
      <Link to="/new">
        <Button modifier="feature">Cadastrar novo spot</Button>
      </Link>
    </div>
  );
};

export default Dashboard;
