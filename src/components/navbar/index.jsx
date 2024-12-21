import React, { useState } from "react";
import "./Navbar.css"; // Certifique-se de criar este arquivo para os estilos

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MinhaMarca</a>
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="/home">Home</a>
        <a href="/about">Sobre</a>
        <a href="/services">Serviços</a>
        <a href="/contact">Contato</a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="menu-icon">{isOpen ? "✖" : "☰"}</span>
      </button>
    </nav>
  );
};

export default Navbar;
