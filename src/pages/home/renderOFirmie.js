import SectionDescription from "../../components/SectionDescription";
import Button from "../../components/Button";

const renderOFirmie = () => {
  const oFirmie = document.querySelector("#oFirmie");

  const img = document.createElement("img");
  img.className = "object-fill opacity-0 transition-opacity";
  img.src = "/oFirmie/medium/photo1.png";

  const imgWrapper = document.createElement("div");
  imgWrapper.className =
    "max-h-[720px] w-1/2 self-stretch min-h-full w800:hidden w1005:w-[30%] flex-1 bg-no-repeat bg-cover bg-[url(/oFirmie/small/photo1.png)] animate-pulse blur-sm";

  imgWrapper.appendChild(img);

  img.onload = () => {
    imgWrapper.classList.remove("animate-pulse");
    imgWrapper.classList.remove("blur-sm");
    img.classList.remove("opacity-0");
  };

  const contentBox = document.createElement("div");

  contentBox.className =
    "pl-24 py-6 pr-[90px] flex flex-col  flex-1 shrink-0 items-start gap-[72px] max-w-[600px] w1005:px-5";

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

  oFirmie.appendChild(imgWrapper);
  oFirmie.appendChild(contentBox);
};

export default renderOFirmie;
