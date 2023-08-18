class Modal {
  constructor(parentId) {
    this.container = document.createElement("div");
    this.blinder = document.createElement("div");
    this.contentBox = document.createElement("div");

    this.container.className =
      "fixed items-center justify-center inset-0 flex z-50";
    this.blinder.className = "absolute inset-0 bg-black bg-opacity-50 z-20";
    this.contentBox.className =
      "relative p-6 w-[75%] h-[75%] flex items-center justify-center bg-white z-30";
    this.hide();
    this.blinder.addEventListener("click", () => this.hide());

    this.render(parentId);
  }

  show() {
    this.container.style.display = "flex";
  }
  hide() {
    this.container.style.display = "none";
  }

  addContent(element) {
    this.contentBox.appendChild(element);
  }

  render(parentId) {
    const parent = document.querySelector(`#${parentId}`);
    this.container.appendChild(this.blinder);
    this.container.appendChild(this.contentBox);
    parent.appendChild(this.container);
  }
}

export default Modal;
