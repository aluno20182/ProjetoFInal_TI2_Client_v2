import React from "react";

export class Header extends React.Component {
  out() {
    //Redereciona para o login
    window.location = '/';
  }

  home() {
    //Redereciona para o feed
    window.location = '/posts';
  }

  render() {
    return (
      <header className="navbar">
        <a href="#" className="active" onClick={this.home}>
          🏠
        </a>
        <a href="#" className="right" onClick={this.out}>
          Sair
        </a>
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
