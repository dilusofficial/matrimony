import React, { useContext } from 'react';
import { AuthContext } from '../../context/customHooks/AuthContext';
import './header.css'; 
import { Logout } from '../../context/customHooks/AuthAction';

function Homeheader() {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <img src={user?.profilePhoto} alt="Profile" className="profile-photo" />
        </div>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </header>
  );
}

export default Homeheader;
