import React from "react";

import "./styles.css";
import Header from "./Components/Header.js";
import { MainContent } from "./Components/MainContent.js";
import Footer from "./Components/Footer.js";

export class App extends React.Component {
  render() {
    return (
      <div class="container demo">
        <div class="content">
          <div id="large-header" class="large-header">
            <Header />
            <div class="header">
              <h1 class="main-title">Tomblr</h1>
              <input type="text" id="myInput" onkeyup="myFunction()" name="search" placeholder="Search..."/>
            </div>
            <br />
            <br />
            <MainContent />
            <br />

            <br />
            <div class="select-page">
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

    function myFunction() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }
  }
}

export default App;
