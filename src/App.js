import React, { useState } from 'react';
import './App.css';
import UserForm from './UserForm';
import Badge from './Badge';

function App() {
  const [userData, setUserData] = useState(null);

  const handleSubmit = (formData) => {
    setUserData(formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Badge Creator</h1>
      </header>
      <main>
        <UserForm onSubmit={handleSubmit} />
        {userData && (
          <div>
            <h2>Badge Preview</h2>
            <Badge userData={userData} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;