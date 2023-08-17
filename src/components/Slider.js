class Slider {
  constructor(slides) {
    this.element = document.createElement("div");
    this.element.className = "relative flex h-full bg-beige";
    this.slides = slides;
    this.currentIndex = 1;
    this.cloneEdgeSlides();
    this.renderSlides();
    this.element.addEventListener("transitionend", () => {
      if (this.slides[this.currentIndex].id === "lastClone") {
        this.element.style.transition = "none";
        this.currentIndex = 1;
        this.showSlide();
      }
      if (this.slides[this.currentIndex].id === "firstClone") {
        this.element.style.transition = "none";
        this.currentIndex = this.slides.length - 2;
        this.showSlide();
      }
    });
  }

  showPrevSlide() {
    this.element.style.transition = "transform 0.3s ease-in";

    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide();
  }

  showNextSlide() {
    this.element.style.transition = "transform 0.3s ease-in";
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide();
  }

  showSlide() {
    this.element.style.transform = `translateX(${-100 * this.currentIndex}vw)`;
  }

  renderNavigation(element) {
    const buttonContainer = document.createElement("div");
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");
    const buttonStyles = "h-24 w-24  bg-white bg-center bg-no-repeat";

    buttonContainer.className =
      "sliderButton absolute flex align-bottom bottom-0 right-0";
    nextButton.className = buttonStyles + " bg-[url(/arrowRight.svg)]";
    prevButton.className = buttonStyles + " bg-[url(/arrowLeft.svg)]";

    prevButton.addEventListener("click", () => this.showPrevSlide());
    nextButton.addEventListener("click", () => this.showNextSlide());

    buttonContainer.appendChild(prevButton);
    buttonContainer.appendChild(nextButton);

    element.appendChild(buttonContainer);
  }

  cloneEdgeSlides() {
    const firstClone = this.slides[0].cloneNode(true);
    const lastClone = this.slides[this.slides.length - 1].cloneNode(true);

    firstClone.id = "firstClone";
    lastClone.id = "lastClone";

    this.slides.unshift(firstClone);
    this.slides.push(lastClone);
  }

  renderSlides() {
    this.slides.forEach((slide) => {
      const slideItem = document.createElement("div");
      slideItem.className = "flex w-screen";
      slideItem.appendChild(slide);
      this.element.appendChild(slideItem);
      return slideItem;
    });
  }

  render(targetElement) {
    targetElement.appendChild(this.element);
    this.renderNavigation(targetElement);
  }
}

export default Slider;
