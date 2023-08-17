import renderHero from "./home/renderHero";
import renderKontakt from "./home/renderKontakt";
import renderOFirmie from "./home/renderOFirmie";
import renderOferta from "./home/renderOferta";
import renderRealizacje from "./home/renderRealizacje";

const setupHomePage = () => {
  const app = document.querySelector("#app");
  const sectionClasses = {
    hero: "relative h-[740px] w-full overflow-hidden",
    oferta: "flex flex-col gap-24 bg-grey pb-[160px] pt-[120px] items-center",
    oFirmie: "flex items-center gap-16 bg-green",
    realizacje:
      "relative flex flex-col pt-[120px] pb-11 gap-24 items-start bg-beige transition-all duration-500",
    kontakt: "py-[60px] flex flex-col items-center justify-center",
  };
  app.innerHTML = "";
  renderPageSections(sectionClasses, app);
  renderHero();
  renderOferta();
  renderOFirmie();
  renderRealizacje();
  renderKontakt();
};

const renderPageSections = (sectionClasses, app) => {
  Object.entries(sectionClasses).forEach((section) => {
    const element = document.createElement("section");
    element.id = section[0];
    element.className = section[1];
    app.appendChild(element);
  });
};

export default setupHomePage;
