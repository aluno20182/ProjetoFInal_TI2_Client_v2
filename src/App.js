import React from "react";

import "./styles.css";
import Header from "./Components/Header.js";
import MainContent from "./Components/MainContent.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div class="container demo">
      <div class="content">
        <div id="large-header" class="large-header">
          <Header />
          <div class="header">
            <h1 class="main-title">Tomblr</h1>
          </div>
          <div class="custom-select" style={{ width: 200 }}>
            <select>
              <option value="0">Post Por Pagina:</option>
              <option value="1">5</option>
              <option value="2">10</option>
              <option value="3">15</option>
              <option value="4">20</option>
              <option value="5">25</option>
              <option value="6">40</option>
            </select>
          </div>
          <br />
          <MainContent />
          <br />
          <br />
          <br />
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

export default App;
