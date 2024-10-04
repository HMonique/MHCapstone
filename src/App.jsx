import React, { useEffect, useState } from "react";
import { Routes, Navbar } from "./components";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
    </>
  );
}

export default App;
