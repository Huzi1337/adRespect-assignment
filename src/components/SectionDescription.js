class SectionDescription {
  constructor({ containerClass, section, title, emphasis = {}, text }) {
    this.renderContainer(containerClass);
    this.renderElement("h6", "font-inter text-sm text-green", section);
    const renderedTitle = this.renderElement(
      "h2",
      "font-montserrat font-medium text-xl",
      title,
    );
    this.renderElement(
      "span",
      "font-montserrat font-medium italic text-xl",
      emphasis,
      renderedTitle,
    );
    this.renderElement("p", "font-inter text-base", text);
  }

  renderContainer(containerClass) {
    this.container = document.createElement("div");
    this.container.className = containerClass;
  }

  renderElement(
    elementType,
    defaultStyles,
    { className, textContent },
    parent = this.container,
  ) {
    const element = document.createElement(elementType);
    element.className = `${defaultStyles} ${className ? className : ""}`;
    element.textContent = textContent;
    parent.appendChild(element);
    return element;
  }

  render(targetElement) {
    targetElement.appendChild(this.container);
  }
}
export default SectionDescription;
