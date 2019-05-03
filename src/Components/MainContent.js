import React from "react";
import Moldura from "./Moldura.js";

export class MainContent extends React.Component {
  render() {
    return (
      <main>
        <div>
          <div class="custom-select">
            <select>
              <option>Post Por Pagina:</option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
              <option>40</option>
            </select>
          </div>
          <br />
          <Moldura />
        </div>
      </main>
    );
  }
}
