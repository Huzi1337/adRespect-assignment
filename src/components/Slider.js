class Slider {
  constructor(slides) {
    this.element = document.createElement("div");
    this.element.className =
      "relative flex h-full bg-beige transition-transform duration-[0.3s]";
    this.slides = slides;
    this.currentIndex = 0;
    this.renderSlides();
    this.renderNavigation();
  }

  showPrevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide();
  }

  showNextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide();
  }

  showSlide() {
    const slideItems = this.element.querySelectorAll(".heroblockSlide");
    slideItems.forEach((slide, index) => {
      if (index === this.currentIndex) {
        slide.style.transform = `translateX(0)`;
      } else {
        slide.style.transform = `translateX(-${100}%)`;
      }
    });
    console.log(this.currentIndex);
  }

  renderNavigation() {
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

    this.element.appendChild(buttonContainer);
  }

  renderSlides() {
    this.slides.forEach((slide) => {
      const slideItem = document.createElement("div");
      slideItem.className = "flex w-screen";
      slideItem.innerHTML = slide;
      this.element.appendChild(slideItem);
    });
  }

  render(targetElement) {
    targetElement.appendChild(this.element);
  }
}

export default Slider;
