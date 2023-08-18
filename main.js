import "./src/style.css";
import toggleHidden from "./scripts/toggleDropdown";
import setupHomePage from "./src/pages/home";

const ofertaButton = document.querySelector("#oferta__btn");
const ofertaDropdown = document.querySelector("#oferta__dropdown");
ofertaButton.addEventListener("click", () => toggleHidden(ofertaDropdown));

const navbar = document.querySelector("#navbar");
console.log("children", navbar.children, "children Nodes", navbar.childNodes);

const mobileHamburger = navbar.querySelector("#hamburger");
mobileHamburger.addEventListener("click", () => toggleHidden(navbarOptions));

const toggleMobile = () => {
  if (window.innerWidth <= 1000 && navbar.dataset.view != "mobile") {
    navbar.dataset.view = "mobile";

    const navbarOptions = navbar.querySelector("#navbarOptions");
    navbarOptions.className =
      "absolute p-6 top-full right-0 flex flex-col-reverse bg-white gap-6 hidden";

    mobileHamburger.classList.remove("hidden");
  } else if (window.innerWidth > 1000 && navbar.dataset.view != "desktop") {
    mobileHamburger.removeEventListener("click", () =>
      toggleHidden(navbarOptions),
    );
    navbar.dataset.view = "desktop";
    const navbarOptions = navbar.querySelector("#navbarOptions");
    navbarOptions.className = "flex items-center gap-12";
    mobileHamburger.classList.add("hidden");
  }
};

toggleMobile();

window.addEventListener("resize", () => {
  console.log("toggle!");
  toggleMobile();
});

const navbarOptions = navbar.querySelector("#navbarOptions");

const mobileContainer = document.createElement("div");

setupHomePage();
