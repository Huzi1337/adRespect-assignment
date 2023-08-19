import "./src/style.css";
import toggleHidden from "./scripts/toggleDropdown";
import setupHomePage from "./src/pages/home";

const navbar = document.querySelector("#navbar");
const navbarOptions = navbar.querySelector("#navbarOptions");

const mobileHamburger = navbar.querySelector("#hamburger");
mobileHamburger.addEventListener("click", () => {
  const booleanActive = mobileHamburger.dataset.active === "true";
  mobileHamburger.dataset.active = !booleanActive;
  toggleHidden(navbarOptions);
});

const hideElement = (element, event) => {
  if (
    !element.contains(event.target) &&
    !element.classList.contains("hidden") &&
    event.target != mobileHamburger &&
    navbar.dataset.view === "mobile"
  ) {
    mobileHamburger.dataset.active = "false";
    element.classList.add("hidden");
  }
};

const toggleMobile = () => {
  const ofertaDropdown = document.querySelector("#oferta__dropdown");
  const navbarOptions = navbar.querySelector("#navbarOptions");
  const ofertaElements = ofertaDropdown.querySelectorAll("li");

  if (window.innerWidth <= 1000 && navbar.dataset.view != "mobile") {
    const clickListener = (event) => hideElement(navbarOptions, event);
    window.addEventListener("click", clickListener);
    navbar.dataset.view = "mobile";

    mobileHamburger.classList.remove("hidden");

    navbarOptions.className =
      "absolute w-[150px] py-5 px-10 top-full right-0 flex flex-col-reverse bg-white gap-6 hidden animate-slideDown transition-all";

    ofertaElements.forEach((element) => element.classList.add("pl-10"));

    ofertaDropdown.classList.add("-left-10");
    ofertaDropdown.classList.add("-right-10");
    ofertaDropdown.classList.remove("left-[-50%]");
  } else if (window.innerWidth > 1000 && navbar.dataset.view != "desktop") {
    const clickListener = (event) => hideElement(navbarOptions, event);

    window.removeEventListener("click", clickListener);
    navbar.dataset.view = "desktop";

    mobileHamburger.classList.add("hidden");

    navbarOptions.className = "flex items-center gap-12";

    ofertaElements.forEach((element) => element.classList.remove("pl-10"));

    ofertaDropdown.classList.remove("-left-10");
    ofertaDropdown.classList.remove("-right-10");
    ofertaDropdown.classList.add("left-[-50%]");
  }
};

toggleMobile();

window.addEventListener("resize", () => {
  toggleMobile();
});

setupHomePage();
