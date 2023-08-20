class Button {
  constructor({
    text,
    icon: { iconSrc, iconClass } = {},
    className,
    onClick,
    onEnter,
  }) {
    this.element = document.createElement("button");
    this.element.textContent = text;
    this.element.className = "group btn " + className;
    if (iconSrc) this.renderIcon(iconSrc, iconClass);

    if (onClick) this.element.addEventListener("click", onClick);
    if (onEnter)
      this.element.addEventListener("mouseenter", () => {
        onEnter();
      });
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
