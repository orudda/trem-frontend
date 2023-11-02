import React, { useState } from "react";
import Window1 from "./components/Window1";
import Window2 from "./components/Window2";
import Window3 from "./components/Window3";
import Modal from "./components/Modal";
import Header from "./components/Header"; // Importe o componente de cabeçalho
import "./App.css";

function App() {
  const [activeWindow, setActiveWindow] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header /> {/* Renderize o componente de cabeçalho aqui */}
      <div className="windows">
        {activeWindow === 1 && <Window1 />}
        {activeWindow === 2 && <Window2 />}
        {activeWindow === 3 && <Window3 />}
      </div>
      <div className="menu">
        <button onClick={() => setActiveWindow(1)}>Window 1</button>
        <button onClick={() => setActiveWindow(2)}>Window 2</button>
        <button onClick={() => setActiveWindow(3)}>Window 3</button>
        <button onClick={openModal}>Open Modal</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
