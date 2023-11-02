import React from "react";

const headerStyle = {
  backgroundColor: "#333", // Cor de fundo
  color: "white", // Cor do texto
  padding: "20px", // Espaçamento interno
  textAlign: "center", // Alinhamento de texto
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Meu Aplicativo com Cabeçalho</h1>
    </header>
  );
}

export default Header;
