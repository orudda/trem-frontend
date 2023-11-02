import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import User from "./screens/User/User";
import Login from "./screens/Login/Login"; // Adicione a importação da tela de login

function AppRouter({ isAuthenticated, onLogin }) {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Login onLogin={onLogin} />} />
        <Route path="/user" element={isAuthenticated ? <User /> : <Login onLogin={onLogin} />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
