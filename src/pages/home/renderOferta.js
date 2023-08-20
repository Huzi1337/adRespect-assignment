import Card from "../../components/Card";
import SectionDescription from "../../components/SectionDescription";
import { cardsContent } from "../../data/cardsContent";

const renderOferta = () => {
  const oferta = document.querySelector("#oferta");
  const textBox = document.createElement("div");
  textBox.className =
    "w1100:items-center flex flex-col items-start gap-4 w-full max-w-[1040px]";

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

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const cardId = entry.target.getAttribute("card-id");
      const cardAnimationClass =
        window.innerWidth < 600
          ? "animate-slideRight2"
          : cardId === "card1"
          ? "animate-slideRight1"
          : cardId === "card2"
          ? "animate-slideRight2"
          : "animate-slideRight3";
      if (!entry.isIntersecting) {
        entry.target.classList.remove(cardAnimationClass);
      } else {
        console.log("intercepting");
        entry.target.classList.add(cardAnimationClass);
      }
    });
  });

  const cards = document.createElement("div");
  cards.className =
    "w1100:px-0 w1300:flex-wrap flex px-[89px] justify-center items-start gap-16 self-stretch";
  cardsContent.forEach((cardInfo) => {
    const card = new Card(cardInfo);
    card.render(cards);
    cardObserver.observe(card.element);
  });

  oferta.appendChild(cards);
};

export default renderOferta;
