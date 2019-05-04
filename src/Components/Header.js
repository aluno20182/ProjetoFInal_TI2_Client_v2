import React from "react";

function Header() {
  return (
    <header className="navbar">
      <a href="#home" class="active">
        Home
      </a>
      <a href="#news">Feed</a>
      <a href="#contact">Perfil</a>
      <a href="#about" class="right">
        Definições
      </a>
      {/*<video class="video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
    </video>*/}
    </header>
  );
}

export default Header;
