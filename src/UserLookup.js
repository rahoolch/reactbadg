import React, { useState } from 'react';
import Badge from './Badge';
import axios from 'axios';


const authToken = 'eyJraWQiOiJMelA5SVRLU1pKNGpDWmI2d1lGWDdmcGVKQjZCMzNNLUN4eTNKV0gzQ1dBIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnlmU2t3RE5LTUVLU1RMeV9teV94N3Izamp4dmZGanNfRXRZTDFXc1JKRnciLCJpc3MiOiJodHRwczovL3Nzby5jdmVudC5jb20vb2F1dGgyL2F1c2kzbXowZjNvRENNMlRpMXQ3IiwiYXVkIjoiYXBpLXBsYXRmb3JtIiwiaWF0IjoxNzI0MzAxOTQ5LCJleHAiOjE3MjQzMDU1NDksImNpZCI6IjBvYTEwdXZzam1hQTgySTg3MXQ4Iiwic2NwIjpbImV2ZW50L2F0dGVuZGVlczpyZWFkIl0sInN1YiI6IjBvYTEwdXZzam1hQTgySTg3MXQ4In0.JpeW8TpwiF1ryGmappi6OECTwAyq7FzIZvE2tDEKOvnVBH-XVxcvFa-pfhRGxeZW6KK2qPOSLEggvARzemMbBwAY66TA5B68hVNylA5v5alAFsBJ9r01Q_VZ4Gbl3fCiE6Q2qS_LzW4S7O0eFAtKz436rkd_aLakARxNxfTA5AkwhSV6C9_cOhoViHr8z4U548n_QYw9spXfw3F_jiYTbteKNOB_IgS8T8Jqw_enwwIlsY09j5zMRq7o1BUi-5x1D1BOaISuXWuCfUpmW7i9lYZ5dTSYTzADgKZ1J4zqs4kJnIpuEIpe2uO_kqTmXKJy7gn7C_cLzfNyqD2WpMSyZQ'

const UserLookup = () => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleLookup = async () => {
    try {
      const response = await axios.post('https://api-platform.cvent.com/ea/attendees/filter', 
      {
        "filter": "event.id eq '7c99694f-c805-4e55-b500-2e26c59d7b0e'",
        "filter": `contact.firstName sw '${userName}'` 
      }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        }
      });
      setUserData(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }
  };

  return (
    <div>
      <input type="text" value={userName} onChange={handleInputChange} />
      <button onClick={handleLookup}>Look Up User</button>
      {error ? (
        <p>Error: {error}</p>
      ) : userData ? (
        <div className="badge-preview">
          <h2>Badge Preview</h2>
          <Badge userData={userData} />
        </div>
      ) : (
        <p>Please enter a user name to look up.</p>
      )}
    </div>
  );
};

export default UserLookup;