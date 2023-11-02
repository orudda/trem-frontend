import React, { useState } from "react";
import TextInput from "./../../components/TextInput";

function LoginScreen({ onLogin }) { // Receba a função onLogin como prop
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Realize a lógica de autenticação (pode ser uma validação simples)
    onLogin();

    // Se a autenticação for bem-sucedida, chame a função onLogin
    /* if (username === "seuUsuario" && password === "suaSenha") {
      onLogin();
    } */
  };

  return (
    <div className="login-screen">
      <h2>Login</h2>
      <TextInput
        label="Nome de Usuário"
        value={username}
        onChange={handleUsernameChange}
        type="text"
      />
      <TextInput
        label="Senha"
        value={password}
        onChange={handlePasswordChange}
        type="password"
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default LoginScreen;
