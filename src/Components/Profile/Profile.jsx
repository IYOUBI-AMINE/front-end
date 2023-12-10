// Profile.js
import React from 'react';
import { useUser } from './UserContex';
import './Profile.css'; 

const Profile = () => {
  const { user, logout } = useUser();

  return (
    <div className="body">
      <div className="center-container">
      <div className="profile-container">
        <h1>User Profile</h1><br />
        {user && (
          <>
            <p>Email: {user.email}</p><br />
            <p>User Name: {user.firstName}</p><br />
            <p>User Lastname: {user.lastName}</p><br />
            <p>User phoneNumber: {user.phoneNumber}</p><br />

            <button onClick={logout}>Sign Out</button>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default Profile;
