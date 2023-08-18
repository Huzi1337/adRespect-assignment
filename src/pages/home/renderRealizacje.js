import Button from "../../components/Button";
import Modal from "../../components/Modal";
import SectionDescription from "../../components/SectionDescription";
import Macy from "macy";
import Slider from "../../components/Slider";

const renderRealizacje = () => {
  const realizacje = document.querySelector("#realizacje");

  const textContent = new SectionDescription({
    containerClass: "flex flex-col pl-40 gap-4 items-start",
    section: { textContent: "Realizacje" },
    title: { textContent: "Nasze " },
    emphasis: { textContent: "projekty" },
  });

  textContent.render(realizacje);

  const photoBox = document.createElement("div");
  photoBox.className = "w-full h-auto overflow-hidden";
  const modal = new Modal("app");
  const images = [];
  const renderImages = () => {
    for (let i = 1; i <= 9; i++) {
      const img = document.createElement("img");
      img.src = `/galeria/medium/photo${i}.png`;
      img.className =
        "transition-all  hover:scale-105 hover:shadow-inner cursor-pointer";
      img.loading = "lazy";

      images.push(img.cloneNode());

      img.addEventListener("click", () => modal.show());
      photoBox.appendChild(img);
    }
  };
  renderImages();

  const imageGallery = new Slider(images);
  imageGallery.render(modal.contentBox);

  const macy = Macy({
    container: photoBox,
    columns: 3,
    margin: { x: 42, y: 42 },
    trueOrder: true,
  });

  const blinder = document.createElement("div");
  const blinderStyles =
    "absolute bottom-11 pointer-events-none z-20 pb-11 flex items-end justify-center w-full h-[1000px] bg-gradient-to-t from-beige";
  blinder.className = blinderStyles;

  const button = new Button({
    text: "Rozwiń",
    icon: {
      iconSrc: "/arrowDown.svg",
      iconClass: "group-hover:animate-bob",
    },
    className: "border border-black text-black pointer-events-auto",
    onClick: () => {
      blinder.className = "hidden";
      renderImages();
      macy.recalculateOnImageLoad();
    },
  });
  button.render(blinder);
  realizacje.appendChild(blinder);

  realizacje.appendChild(photoBox);
};

export default renderRealizacje;
