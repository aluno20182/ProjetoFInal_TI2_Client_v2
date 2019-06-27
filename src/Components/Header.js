import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header className="navbar">
        <a href="https://uuo5k.codesandbox.io/" className="active">
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
          type="text"
          id="searchBar"
          placeholder="Search"
          onChange={this.handleSerachChange}
        />
      </header>
    );
  }

  handleSerachChange = evt => {
    this.props.filter(evt.target.value);
  };
}

export default Header;
