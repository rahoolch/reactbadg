import React, { useState } from 'react';
import './App.css';
import UserForm from './UserForm';

function App() {
  const [userData, setUserData] = useState(null);

  const handleSubmit = (formData) => {
    setUserData(formData);
    // We'll use this data to create the badge in the next step
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
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;