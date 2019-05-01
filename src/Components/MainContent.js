import React from "react";
import Moldura from "./Moldura.js";

function MainContent() {
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

export default MainContent;
