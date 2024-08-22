import React from 'react';
import './Badge.css';

function Badge({ userData }) {
    console.log(userData);
  return (
    <div className="badge">
      <div className="logo-area">
        <img src="/images/badge_logo.png" alt="Event Logo" className="event-logo" />
      </div>
      <div className="badge-content">
        <h1 className="name">{userData.data[0].contact.firstName} {userData.data[0].contact.lastName}</h1>
        <p className="job-title">{userData.data[0].contact.title}</p>
        <p className="company">{userData.data[0].contact.company}</p>
      </div>
      {userData.data[0].contact.type?.name == "Speaker"? <div className="speaker-status">
        <p>SPEAKER</p>
      </div> : <div className="attendee-status">
        <p>ATTENDEE</p>
      </div>}
      
    </div>
  );
}

export default Badge;