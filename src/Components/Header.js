import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">Feed</a>
        <a href="#contact">Perfil</a>
        <a href="#about" className="right">
          Definições
        </a>

        {/*<video class="video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
    </video>*/}
        <input
          className="searchBar"
          type="text"
          id="searchBar"
          placeholder="Search"
        />
        <button
          className="btn-search"
          type="button"
          onClick={this.props.filter}
        >
          🔎
        </button>
      </header>
    );
  }
}

export default Header;
