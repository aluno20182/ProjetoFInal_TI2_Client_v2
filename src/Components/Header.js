import React from "react";

function Header() {
  return (
    <header class="topnav">
      <a class="active" href="#home">
        Home{" "}
      </a>
      <a href="#news">Feed </a>
      <a href="#contact">Perfil </a>
      <a href="#about">Definições </a>
    </header>
  );
}

export default Header;
