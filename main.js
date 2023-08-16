import "./src/style.css";
import toggleHidden from "./scripts/toggleDropdown";
import setupHomePage from "./src/pages/home";

const ofertaButton = document.querySelector("#oferta__btn");
const ofertaDropdown = document.querySelector("#oferta__dropdown");
ofertaButton.addEventListener("click", () => toggleHidden(ofertaDropdown));

setupHomePage();
