import Card from "../../components/Card";
import SectionDescription from "../../components/SectionDescription";
import { cardsContent } from "../../content";

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

  const cards = document.createElement("div");
  cards.className =
    "w1100:px-0 flex px-[89px] flex-wrap justify-center items-start gap-16 self-stretch";
  cardsContent.forEach((cardInfo) => {
    const card = new Card(cardInfo);
    card.render(cards);
  });
  oferta.appendChild(cards);
};

export default renderOferta;
