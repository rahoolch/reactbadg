import React from 'react';
import './Badge.css';

function Badge({ userData }) {
  return (
    <div className="badge">
      <div className="logo-area">
        <img src="/path-to-your-logo.png" alt="Event Logo" className="event-logo" />
      </div>
      <div className="badge-content">
        <h1 className="name">{userData.name}</h1>
        <p className="job-title">{userData.jobTitle}</p>
        <p className="company">{userData.company}</p>
      </div>
      <div className="attendee-status">
        <p>ATTENDEE</p>
      </div>
    </div>
  );
}

export default Badge;