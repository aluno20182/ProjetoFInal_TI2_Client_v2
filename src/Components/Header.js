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
        <input
          type="text"
          id="searchBar"
          placeholder="Search"
          onChange={this.props.filter}
        />
      </header>
    );
  }
}

export default Header;
