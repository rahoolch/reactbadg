import React, { useState } from 'react';
import './App.css';
import UserForm from './UserForm';
import Badge from './Badge';

function App() {
  const [userData, setUserData] = useState(null);

  const handleSubmit = (formData) => {
    setUserData(formData);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Badge Creator</h1>
      </header>
      <main>
        <UserForm onSubmit={handleSubmit} />
        {userData && (
          <div className="badge-preview">
            <h2>Badge Preview</h2>
            <Badge userData={userData} />
            <button onClick={handlePrint} className="print-button">Print Badge</button>
            {/* <p className="print-note">Note: For best results, ensure your browser and printer settings are set to print in color.</p> */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;