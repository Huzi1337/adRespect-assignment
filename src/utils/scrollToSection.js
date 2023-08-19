export const scrollToSection = (sectionId, block) => {
  const section = document.querySelector(`#${sectionId}`);
  section.scrollIntoView({ behavior: "smooth", block });
};
