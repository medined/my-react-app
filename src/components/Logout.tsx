import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../services/auth';
import '../styles/Logout.ts';

const Logout: React.FC = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="logout-container">
      <h1>Are you sure you want to logout?</h1>
      <button onClick={handleLogout} id="logout-button">Logout</button>
    </div>
  );
};

export default Logout;