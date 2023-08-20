import Slider from "../../components/Slider";
import Button from "../../components/Button";
import { scrollToSection } from "../../utils/scrollToSection";

const renderHero = () => {
  const hero = document.querySelector("#hero");

  const renderHeroSlide = () => {
    const heroSlide = document.createElement("div");
    heroSlide.className =
      "heroblockSlide flex w-screen gap-16 items-center pl-[90px] transition-transform duration-500 bg-beige w900:justify-center w900:pl-3";

    const heroContent = document.createElement("div");
    heroContent.className =
      "w530:pr-3 w-full max-w-[600px] flex flex-col flex-1 gap-[72px]";

    const heroTextBox = document.createElement("div");
    heroTextBox.className = "flex flex-col items-start gap-11 self-stretch";

    const heroTitle = document.createElement("h1");
    heroTitle.className =
      "font-montserrat text-2xl font-medium leading-header text-black w530:text-xl w530:text-center w450:text-lg";
    heroTitle.innerHTML = "Nowoczesna aranżacja Twojego&nbsp;ogrodu";
    heroTextBox.appendChild(heroTitle);

    const heroText = document.createElement("h2");
    heroText.className = "text-base leading-base w530:text-center";
    heroText.textContent = `Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka
    realizacji. Oferujemy kompleksowy zakres usług z indywidualnym
    podejściem do każdego projektu.`;
    heroTextBox.appendChild(heroText);

    heroContent.appendChild(heroTextBox);

    const heroButtons = document.createElement("div");
    heroButtons.className =
      "flex items-start gap-8 w530:gap-4 w530:flex-col-reverse w530:items-center";

    const contactButton = new Button({
      text: "Skontaktuj się z nami",
      className: "bg-green text-grey",
      onClick: () => scrollToSection("footer", "end"),
    });
    contactButton.render(heroButtons);

    const realizacjeButton = new Button({
      text: "Zobacz nasze realizacje",
      className: "bg-none text-green border border-green",
      icon: {
        iconSrc: "/arrowDownGreen.svg",
        iconClass: "group-hover:animate-bob",
      },
      onClick: () => scrollToSection("realizacje", "start"),
    });
    realizacjeButton.render(heroButtons);

    heroContent.appendChild(heroButtons);

    heroSlide.appendChild(heroContent);

    const heroImg = document.createElement("div");
    heroImg.className =
      "min-h-full flex-1 bg-[url(/hero/small/photo1.png)] bg-cover w900:hidden animate-pulse";

    const heroFullImg = new Image();
    heroFullImg.src = "/hero/medium/photo1.png";
    heroFullImg.onload = () => {
      heroImg.style.backgroundImage = "url(/hero/medium/photo1.png)";
      heroImg.classList.remove("animate-pulse");
    };

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
