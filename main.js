import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import toggleHidden from "./scripts/toggleDropdown";

document.querySelector("#app").innerHTML = `
  <div>
    
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

const child = document.createElement("div");

document.querySelector("#app").appendChild(child);

const ofertaButton = document.querySelector("#oferta__btn");
const ofertaDropdown = document.querySelector("#oferta__dropdown");
ofertaButton.addEventListener("click", () => toggleHidden(ofertaDropdown));

setupCounter(document.querySelector("#counter"));
