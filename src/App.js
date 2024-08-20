import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSetId = (newId) => {
    setId(newId);
  };

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} id={id} setId={handleSetId} />
      <Footer/>
    </div>
  );
}

export default App;
