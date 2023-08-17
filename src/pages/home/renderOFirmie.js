import SectionDescription from "../../components/SectionDescription";
import Button from "../../components/Button";

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
  let sStyles = "group-hover:animate-wiggle";
  const contentBoxButton = new Button({
    text: "Poznaj nas bliżej",
    icon: {
      iconSrc: "/arrowRightGrey.svg",
      iconClass: "w-4 h-4 group-hover:animate-wiggle",
    },
    className: "bg-green border border-grey text-grey",
  });

  textContent.render(contentBox);
  contentBoxButton.render(contentBox);

  oFirmie.appendChild(img);
  oFirmie.appendChild(contentBox);
};

export default renderOFirmie;
