import React from 'react';

const SignupModal = ({ onSignup, onSwitch }) => (
  <div className="modal">
    <h2>Create an Account</h2>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm Password" />
    <button onClick={onSignup}>Sign Up</button>
    <p>Already have an account? <span onClick={onSwitch}>Login</span></p>
  </div>
);

export default SignupModal;
