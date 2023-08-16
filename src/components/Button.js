class Button {
  constructor({
    text,
    icon: { iconSrc, iconClass },
    className,
    onClick = () => {},
  }) {
    this.element = document.createElement("button");
    this.element.textContent = text;
    this.element.className = "btn " + className;
    if (iconSrc) this.renderIcon(iconSrc, iconClass);

    this.element.addEventListener("click", onClick);
  }

  renderIcon(iconSrc, iconClass) {
    const icon = document.createElement("img");
    icon.src = iconSrc;
    icon.className = iconClass;
    this.element.appendChild(icon);
  }

  render(targetElement) {
    targetElement.appendChild(this.element);
  }
}

export default Button;
