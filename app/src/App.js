import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import AppRouter from "./AppRouter"; // Importe o AppRouter

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função de autenticação simulada
  const handleLogin = () => {
    // Simular a autenticação bem-sucedida
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <Header />
      <AppRouter isAuthenticated={isAuthenticated} onLogin={handleLogin} /> 
    </div>
  );
}

export default App;
