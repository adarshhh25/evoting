import React from 'react';

const LoginModal = ({ onLogin, onSwitch }) => (
  <div className="modal">
    <h2>Login to Vote</h2>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button onClick={onLogin}>Login</button>
    <p>Don't have an account? <span onClick={onSwitch}>Sign Up</span></p>
  </div>
);

export default LoginModal;
