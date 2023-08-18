class Gallery {
  constructor(images, currentIndex) {
    this.element = document.createElement("div");
    this.images = images;
    this.currentIndex = currentIndex;
    this.element.className = "w-full h-full";
    this.setupImages();

    this.renderNavigation();
  }

  setupImages() {
    if (this.images.length > 0) {
      this.images.forEach((image) => {
        image.style.opacity = 0;
        image.style.position = "absolute";
        image.className =
          "absolute w-[calc(100%-48px)] h-[calc(100%-48px)] opacity-0 object-cover transition-opacity duration-200";
        this.element.appendChild(image);
      });
      this.images[this.currentIndex].style.opacity = 1;
    }
  }

  updateImages(images) {
    this.images = images;
    this.setupImages();
  }

  setTransitionDelay(index) {
    this.images[index].style.transitionDelay = "200ms";
    setTimeout(() => {
      this.images[index].style.transitionDelay = "0ms";
    }, 200);
  }
  clearDelay() {
    this.images[this.previousIndex].style.transitionDelay = "0ms";
  }

  setCurrentIndex(index) {
    this.images[this.currentIndex].style.opacity = 0;
    this.currentIndex = index;
    this.images[this.currentIndex].style.opacity = 1;
  }

  nextPhoto() {
    this.setTransitionDelay(this.currentIndex);
    this.images[this.currentIndex].style.opacity = 0;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.images[this.currentIndex].style.opacity = 1;
  }
  prevPhoto() {
    this.setTransitionDelay(this.currentIndex);

    this.images[this.currentIndex].style.opacity = 0;
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.images[this.currentIndex].style.opacity = 1;
  }

  renderNavigation() {
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");
    const buttonStyles =
      "absolute h-24 w-24 top-[calc(50%-76px)]  bg-white bg-center bg-no-repeat";

    nextButton.className =
      buttonStyles + " -right-24 bg-[url(/arrowRight.svg)]";
    prevButton.className = buttonStyles + " -left-24 bg-[url(/arrowLeft.svg)]";

    prevButton.addEventListener("click", () => this.prevPhoto());
    nextButton.addEventListener("click", () => this.nextPhoto());

    this.element.appendChild(prevButton);
    this.element.appendChild(nextButton);
  }
}

export default Gallery;
