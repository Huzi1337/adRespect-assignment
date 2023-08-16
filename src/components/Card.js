class Card {
  constructor({ icon, title, textContent, action }) {
    this.icon = icon;
    this.title = title;
    this.action = action;
    this.textContent = textContent;
    this.renderMain();
    this.renderIcon();
    this.renderTitle();
    this.renderTextContent();
    this.renderAction();
  }

  renderMain() {
    this.element = document.createElement("div");
    const cardStyles =
      "py-10 px-12 w-[380px] h-[370px] bg-white rounded-[28px] flex flex-col justify-between items-start";
    this.element.className = cardStyles;
  }

  renderIcon() {
    const icon = document.createElement("img");
    icon.src = this.icon;
    const iconStyles = "mb-8";
    icon.className = iconStyles;
    this.element.appendChild(icon);
  }
  renderTitle() {
    const title = document.createElement("h4");
    const titleStyles =
      "font-montserrat mb-3 text-lg font-medium leading-header tracking-[-1.4px]";
    title.className = titleStyles;
    title.textContent = this.title;
    this.element.appendChild(title);
  }
  renderTextContent() {
    const textContent = document.createElement("p");
    const textContentStyles =
      "font-inter text-tiny font-normal leading-base tracking-[-0.14px]";
    textContent.className = textContentStyles;
    textContent.textContent = this.textContent;
    this.element.appendChild(textContent);
  }
  renderAction() {
    const actionButton = document.createElement("button");
    const actionButtonStyles =
      "group flex items-center gap-[10px] mt-auto border-b border-b-green hover:brightness-110 transition-transform hover:scale-105";
    actionButton.className = actionButtonStyles;

    const actionButtonText = document.createElement("p");

    actionButtonText.textContent = this.action;
    const actionButtonTextStyles =
      "text-green font-inter font-normal text-base text-center ]";
    actionButtonText.className = actionButtonTextStyles;

    const actionButtonIcon = document.createElement("img");

    actionButtonIcon.src = "/cardArrow.svg";

    actionButton.appendChild(actionButtonText);
    actionButton.appendChild(actionButtonIcon);

    this.element.appendChild(actionButton);
  }
  render(targetElement) {
    targetElement.appendChild(this.element);
  }
}

export default Card;
