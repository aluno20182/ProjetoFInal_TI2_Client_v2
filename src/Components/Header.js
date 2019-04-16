import React from "react";

function Header() {
  return (
    <header class="navbar">
      <a href="#home" class="active">
        Home{" "}
      </a>
      <a href="#news">Feed</a>
      <a href="#contact">Perfil</a>
      <a href="#about" class="right">
        Definições
      </a>
    </header>
  );
}

export default Header;
