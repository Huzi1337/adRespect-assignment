import Button from "../../components/Button";
import Modal from "../../components/Modal";
import SectionDescription from "../../components/SectionDescription";
import Macy from "macy";
import Gallery from "../../components/Gallery";

const renderRealizacje = () => {
  const realizacje = document.querySelector("#realizacje");
  const textContent = new SectionDescription({
    containerClass: "flex flex-col pl-40 gap-4 items-start w800:pl-3",
    section: { textContent: "Realizacje" },
    title: { textContent: "Nasze " },
    emphasis: { textContent: "projekty" },
  });

  textContent.render(realizacje);

  const photoBox = document.createElement("div");
  photoBox.className = "w-full h-auto overflow-hidden";
  const macy = Macy({
    container: photoBox,
    columns: 3,
    margin: { x: 42, y: 42 },
    breakAt: {
      900: 2,
      425: 1,
    },
    trueOrder: true,
  });
  const modal = new Modal("app");
  const images = [];
  const imageGallery = new Gallery(images, 1);

  const renderImages = (startIndex, displayedImages) => {
    for (let i = startIndex; i < displayedImages; i++) {
      const img = new Image();
      img.srcset = `/galeria/medium/photo${i + 1}.png 600w,
      /galeria/large/photo${i + 1}.png 1000w`;
      img.className =
        "transition-all  hover:scale-105 hover:shadow-inner cursor-pointer  data-[macy-complete=1]:opacity-100 data-[macy-complete=0]:opacity-0";
      img.loading = "lazy";
      images.push(img.cloneNode());

      img.addEventListener("click", () => {
        imageGallery.setCurrentIndex(i);
        modal.show();
      });

      photoBox.appendChild(img);
    }
    macy.recalculateOnImageLoad();
  };

  renderImages(0, 9);
  imageGallery.updateImages(images);

  modal.contentBox.appendChild(imageGallery.element);

  const blinder = document.createElement("div");
  const blinderStyles =
    "absolute bottom-11 pointer-events-none z-20 pb-11 flex items-end justify-center w-full h-[1000px] bg-gradient-to-t from-beige";
  blinder.className = blinderStyles;

  const preloadImages = (startIndex, displayedImages) => {
    for (let i = startIndex; i < displayedImages; i++) {
      const img = new Image();
      img.srcset = `/galeria/medium/photo${i + 1}.png 600w,
      /galeria/large/photo${i + 1}.png 1000w`;
    }
  };

  const button = new Button({
    text: "Rozwiń",
    icon: {
      iconSrc: "/arrowDown.svg",
      iconClass: "group-hover:animate-bob",
    },
    className: "border border-black text-black pointer-events-auto",
    onClick: () => {
      blinder.className = "hidden";
      renderImages(9, 18);

      imageGallery.updateImages(images);
    },
    onEnter: () => {
      preloadImages(9, 18);
    },
  });
  button.render(blinder);
  realizacje.appendChild(blinder);

  realizacje.appendChild(photoBox);
};

export default renderRealizacje;
