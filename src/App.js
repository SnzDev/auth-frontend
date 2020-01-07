import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="login-box">
        <div className="email">
          <label htmlFor="email">E-mail: </label>
          <input
          id="email"
          type="email"
          placeholder="example@youremail.com"
          />
        </div>
        
        <div className="password">
          <label htmlFor="password">Password: </label>
          <input
          id="password"
          type="password"
          placeholder="********"
          />
        </div>

      </div>
    </>
  );
}

export default App;
