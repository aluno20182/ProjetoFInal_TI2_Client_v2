import React from "react";

import "./styles.css";
import { Header } from "./Components/Header.js";
import { MainContent } from "./Components/MainContent.js";
import Footer from "./Components/Footer.js";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: "" };
    this.search = this.search.bind(this); //função que é passada como prop para actualizar o estado do compoente pai
  }
  render() {
    return (
      <div className="demo">
        <div className="content">
          <div id="large-header" className="large-header">
            <Header filter={this.search} />
            <div className="header">
              <h1 className="main-title">Tomblr</h1>
            </div>
            <br />
            <br />
            <MainContent filter={this.state.filter} />
            <br />
            <br />
            <div className="select-page">
              <a href="#pag1"> 1 </a>
              <a href="#pag2"> 2 </a>
              <a href="#pag3"> 3 </a>
              <a href="#pag4"> 4 </a>
              <a href="#pag5"> 5 </a>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
  search() {
    let searchTxt = document.getElementById("searchBar").value;
    this.setState({ filter: searchTxt });
  }
}
