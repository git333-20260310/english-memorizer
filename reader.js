const selectEnglishButton = document.querySelector("#selectEnglishButton");
const selectBothButton = document.querySelector("#selectBothButton");
const cards = document.querySelector("#cards");

selectEnglishButton.addEventListener("click", selectEnglishOnScreen);
selectBothButton.addEventListener("click", selectBothOnScreen);

function selectBothOnScreen() {
  selectRange(cards);
}

function selectEnglishOnScreen() {
  const englishLines = [...cards.querySelectorAll(".english")];
  if (englishLines.length === 0) return;
  selectRange(englishLines[0], englishLines[englishLines.length - 1]);
}

function selectRange(startElement, endElement = startElement) {
  const selection = window.getSelection();
  const range = document.createRange();
  range.setStartBefore(startElement);
  range.setEndAfter(endElement);
  selection.removeAllRanges();
  selection.addRange(range);
  startElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
