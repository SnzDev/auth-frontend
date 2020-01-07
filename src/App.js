import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="login-box">
        <div className="email">
          <label htmlFor="email"><b>E-mail: </b></label>
          <input
          id="email"
          type="email"
          placeholder="example@youremail.com"
          />
        </div>
        
        <div className="password">
          <label htmlFor="password"><b>Password: </b></label>
          <input
          id="password"
          type="password"
          placeholder="********"
          />
        </div>

        <div className="login">
          <button><b>Sign in</b></button>
        </div>

      </div>
    </>
  );
}

export default App;
