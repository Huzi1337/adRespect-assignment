import Slider from "../../components/Slider";
import Button from "../../components/Button";
import { scrollToSection } from "../../utils/scrollToSection";

const renderHero = () => {
  const hero = document.querySelector("#hero");

  const renderHeroSlide = () => {
    const heroSlide = document.createElement("div");
    heroSlide.className =
      "heroblockSlide flex w-screen gap-16 items-center pl-[90px] transition-transform duration-500 bg-beige";

    const heroContent = document.createElement("div");
    heroContent.className = "max-w-[600px] flex flex-col flex-1 gap-[72px]";

    const heroTextBox = document.createElement("div");
    heroTextBox.className = "flex flex-col items-start gap-11 self-stretch";

    const heroTitle = document.createElement("h1");
    heroTitle.className =
      "font-montserrat text-2xl font-medium leading-header text-black";
    heroTitle.innerHTML = "Nowoczesna aranżacja Twojego&nbsp;ogrodu";
    heroTextBox.appendChild(heroTitle);

    const heroText = document.createElement("h2");
    heroText.className = "text-base leading-base";
    heroText.textContent = `Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka
    realizacji. Oferujemy kompleksowy zakres usług z indywidualnym
    podejściem do każdego projektu.`;
    heroTextBox.appendChild(heroText);

    heroContent.appendChild(heroTextBox);

    const heroButtons = document.createElement("div");
    heroButtons.className = "flex items-start gap-8";

    const contactButton = new Button({
      text: "Skontaktuj się z nami",
      className: "bg-green text-grey",
      onClick: () => scrollToSection("kontakt"),
    });
    contactButton.render(heroButtons);

    const realizacjeButton = new Button({
      text: "Zobacz nasze realizacje",
      className: "bg-none text-green border border-green",
      icon: {
        iconSrc: "/arrowDownGreen.svg",
        iconClass: "group-hover:animate-bob",
      },
      onClick: () => scrollToSection("realizacje"),
    });
    realizacjeButton.render(heroButtons);

    heroContent.appendChild(heroButtons);

    heroSlide.appendChild(heroContent);

    const heroImg = document.createElement("div");
    heroImg.className = "min-h-full flex-1 bg-[url(/Photo.png)] bg-cover";

    heroSlide.appendChild(heroImg);

    return heroSlide;
  };

  const slider = new Slider([
    renderHeroSlide(),
    renderHeroSlide(),
    renderHeroSlide(),
  ]);
  slider.render(hero);
};

export default renderHero;
