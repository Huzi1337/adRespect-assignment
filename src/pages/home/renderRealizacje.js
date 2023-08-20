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
  const photoLimit = 18;
  const photoIncrease = window.innerWidth > 425 ? 9 : 3;
  const batchCount = Math.ceil(photoLimit / photoIncrease);
  let currentBatch = 0;

  textContent.render(realizacje);

  const photoBox = document.createElement("div");
  photoBox.className = "w-full h-auto overflow-hidden";

  const modal = new Modal("app");
  const images = [];
  const imageGallery = new Gallery(images, 1);

  const renderImages = (batchIndex) => {
    currentBatch = batchIndex;

    const startRange = batchIndex * photoIncrease;
    const endRange =
      currentBatch === batchCount - 1
        ? photoLimit
        : (batchIndex + 1) * photoIncrease;
    for (let i = startRange; i < endRange; i++) {
      const imgWrapper = document.createElement("div");
      imgWrapper.className = "bg-no-repeat bg-cover animate-pulse";
      imgWrapper.style.backgroundImage = `url(/galeria/small/photo${
        i + 1
      }.png)`;

      const img = new Image();
      img.srcset = `/galeria/medium/photo${i + 1}.png 600w,
      /galeria/large/photo${i + 1}.png 1000w`;
      img.className =
        "transition-all hover:scale-105 hover:shadow-inner cursor-pointer w-full opacity-0";
      img.loading = "lazy";
      img.onload = () => {
        img.classList.remove("opacity-0");
        imgWrapper.classList.remove("animate-pulse");
        imgWrapper.classList.add("bg-opacity-0");
      };
      imgWrapper.appendChild(img);

      images.push(img.cloneNode(true));

      img.addEventListener("click", () => {
        if (window.innerWidth > 425) {
          imageGallery.setCurrentIndex(i);
          modal.show();
        }
      });

      photoBox.appendChild(imgWrapper);
    }
  };

  renderImages(currentBatch);
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
  macy.recalculate();
  macy.runOnImageLoad(function () {
    macy.recalculate(true);
  }, true);

  imageGallery.updateImages(images);

  modal.contentBox.appendChild(imageGallery.element);

  const blinder = document.createElement("div");
  const blinderStyles =
    "absolute bottom-11 pointer-events-none z-20 pb-11 flex items-end justify-center w-full h-[50%] bg-gradient-to-t from-beige";
  blinder.className = blinderStyles;

  const button = new Button({
    text: "Rozwiń",
    icon: {
      iconSrc: "/arrowDown.svg",
      iconClass: "group-hover:animate-bob",
    },
    className: "border border-black text-black pointer-events-auto",
    onClick: () => {
      currentBatch++;
      renderImages(currentBatch);
      if (currentBatch === batchCount - 1) blinder.className = "hidden";
      macy.recalculate();
      macy.recalculateOnImageLoad();
      imageGallery.updateImages(images);
    },
  });

  window.addEventListener("resize", () => macy.recalculate());
  button.render(blinder);
  realizacje.appendChild(blinder);

  realizacje.appendChild(photoBox);
};

export default renderRealizacje;
