import Slider from "../components/Slider";
import Card from "../components/Card";
import { slide, cardsContent } from "../content";
import SectionDescription from "../components/SectionDescription";
import Button from "../components/Button";

const setupHomePage = () => {
  const app = document.querySelector("#app");
  const sectionClasses = {
    hero: "h-[740px] w-full overflow-hidden",
    oferta: "flex flex-col gap-24 bg-grey pb-[160px] pt-[120px] items-center",
    oFirmie: "flex items-center gap-16 bg-green",
    realizacje: "",
    kontakt: "",
  };

  app.innerHTML = "";
  renderPageSections(sectionClasses, app);
  const hero = document.querySelector("#hero");

  const slider = new Slider([slide, slide, slide]);
  slider.render(hero);

  renderOferta();
  renderOFirmie();
};

const renderPageSections = (sectionClasses, app) => {
  Object.entries(sectionClasses).forEach((section) => {
    const element = document.createElement("section");
    element.id = section[0];
    element.className = section[1];
    app.appendChild(element);
  });
};

const renderOferta = () => {
  const oferta = document.querySelector("#oferta");
  const textBox = document.createElement("div");
  textBox.className = "flex flex-col items-start gap-4 w-full max-w-[1040px]";

  const ofertaDescription = new SectionDescription({
    containerClass: "w-full max-w-[700px] flex flex-col gap-4 items-start",
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

  ofertaDescription.render(textBox);

  oferta.appendChild(textBox);

  const cards = document.createElement("div");
  cards.className =
    "flex px-[89px] justify-center items-start gap-16 self-stretch";
  cardsContent.forEach((cardInfo) => {
    const card = new Card(cardInfo);
    card.render(cards);
  });
  oferta.appendChild(cards);
};

const renderOFirmie = () => {
  const oFirmie = document.querySelector("#oFirmie");

  const img = document.createElement("img");
  const imgStyles = "max-h-[720px] min-h-full flex-1";
  img.src = "/oFirmie.png";
  img.className = imgStyles;

  const contentBox = document.createElement("div");
  const contentBoxStyles =
    "pl-24 pr-[90px] flex flex-col  flex-1 shrink-0 items-start gap-[72px] max-w-[600px]";
  contentBox.className = contentBoxStyles;
  const textContent = new SectionDescription({
    containerClass: "flex flex-col items-start gap-4",
    section: { textContent: "O firmie", className: "text-grey" },
    title: { textContent: "Tworzymy z ", className: "w-[250px] text-grey" },
    emphasis: { textContent: "pasją", className: "text-grey" },
    text: {
      textContent: `Każdy projekt to nowe wyzwanie. Dlatego
    nasz zespół tworzą wykwalifikowani projektanci oraz architekci,
    których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta.
    Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, 
    geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do 
    współczesnego trybu życia.`,
      className: "text-grey",
    },
  });
  const sStyles = "bg-green border border-grey leading-header pr-24 w-4";

  const contentBoxButton = new Button({
    text: "Poznaj nas bliżej",
    icon: { iconSrc: "/arrowRightGrey.svg", iconClass: "w-4 h-4" },
    className: "bg-green border border-grey text-grey",
  });

  textContent.render(contentBox);
  contentBoxButton.render(contentBox);

  oFirmie.appendChild(img);
  oFirmie.appendChild(contentBox);
};

export default setupHomePage;
