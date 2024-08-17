import React from 'react';
import './Badge.css';

function Badge({ userData }) {
  return (
    <div className="badge">
      <div className="badge-header">
        <h2>EVENT NAME</h2>
      </div>
      <div className="badge-body">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
        <h3>{userData.name}</h3>
        <p className="job-title">{userData.jobTitle}</p>
        <p className="company">{userData.company}</p>
      </div>
      <div className="badge-footer">
        <p className="email">{userData.email}</p>
      </div>
    </div>
  );
}

export default Badge;