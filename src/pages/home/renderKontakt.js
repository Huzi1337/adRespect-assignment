import Button from "../../components/Button";

const renderKontakt = () => {
  const kontakt = document.querySelector("#kontakt");

  const instagramBlock = document.createElement("div");
  const instagramBlockStyles =
    "py-[120px] px-[110px] flex w-full max-w-[1040px] items-end  gap-16 bg-green";
  instagramBlock.className = instagramBlockStyles;

  const headLine = document.createElement("h1");
  const headLineStyles =
    "font-montserrat tracking-[-2px] text-[40px] leading-header text-grey min-w-[599px]";
  headLine.className = headLineStyles;
  headLine.textContent = "Zostańmy w kontakcie! Znajdziesz nas na ";

  const headLineEmphasis = document.createElement("span");
  headLineEmphasis.className =
    headLineStyles + " italic font-medium font-inter";
  headLineEmphasis.textContent = "Instagramie.";
  headLine.appendChild(headLineEmphasis);

  instagramBlock.appendChild(headLine);

  const rightSide = document.createElement("div");
  const rightSideStyles = "flex flex-col items-start gap-6";
  rightSide.className = rightSideStyles;

  const rightSideText = document.createElement("h3");
  const rightSideTextStyles =
    "min-w-[161px] font-inter  font-normal leading-base text-grey";
  rightSideText.className = rightSideTextStyles;
  rightSideText.innerText = "Śledź nasze najnowsze realizacje!";
  rightSide.appendChild(rightSideText);

  const rightSideButton = new Button({
    text: "Instagram",
    className: "bg-grey text-green",
  });
  rightSideButton.render(rightSide);

  instagramBlock.appendChild(rightSide);

  kontakt.appendChild(instagramBlock);
};

export default renderKontakt;
