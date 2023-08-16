import "./src/style.css";
import SectionDescription from "./src/components/SectionDescription";
import toggleHidden from "./scripts/toggleDropdown";
import Slider from "./src/components/Slider";
import { slide, cardsContent } from "./src/content";
import Card from "./src/components/Card";

const ofertaButton = document.querySelector("#oferta__btn");
const ofertaDropdown = document.querySelector("#oferta__dropdown");
ofertaButton.addEventListener("click", () => toggleHidden(ofertaDropdown));

const renderPageSections = (sectionClasses, app) => {
  Object.entries(sectionClasses).forEach((section) => {
    const element = document.createElement("section");
    element.id = section[0];
    element.className = section[1];
    app.appendChild(element);
  });
};

const setupHomePage = () => {
  const app = document.querySelector("#app");
  const sectionClasses = {
    hero: "h-[740px] w-full overflow-hidden",
    oferta: "flex flex-col gap-24 bg-grey pb-[160px] pt-[120px] items-center",
    oFirmie: "",
    realizacje: "",
    kontakt: "",
  };
  app.innerHTML = "";
  renderPageSections(sectionClasses, app);
  const hero = document.querySelector("#hero");

  const slider = new Slider([slide, slide, slide]);
  slider.render(hero);

  const oferta = document.querySelector("#oferta");
  const ofertaOpis1 = new SectionDescription({
    containerClass: "w-full max-w-[1040px] flex flex-col gap-4 items-start",
    section: { textContent: "Oferta" },
    title: { textContent: "Działamy " },
    emphasis: { textContent: "kompleksowo" },
    text: {
      textContent: `Oferujemy kompletną obsługę inwestycji terenów zielonych.
      Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy
      dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie
      posłużymy radą i wieloletnim doświadczeniem. `,
    },
  });

  ofertaOpis1.render(oferta);

  const cards = document.createElement("div");
  cards.className =
    "flex px-[89px] justify-center items-start gap-16 self-stretch";
  cardsContent.forEach((cardInfo) => {
    const card = new Card(cardInfo);
    card.render(cards);
  });
  oferta.appendChild(cards);
};

setupHomePage();
