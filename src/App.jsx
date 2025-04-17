import React, { useState } from 'react';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import VotePanel from './components/VotePanel';
import './styles.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="app">
      {!isLoggedIn && (showLogin ? 
        <LoginModal onSwitch={() => setShowLogin(false)} onLogin={() => setIsLoggedIn(true)} />
        : <SignupModal onSwitch={() => setShowLogin(true)} onSignup={() => setIsLoggedIn(true)} />
      )}

      {isLoggedIn && <VotePanel />}
    </div>
  );
};

export default App;
