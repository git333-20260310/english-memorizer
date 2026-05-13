const selectTextButton = document.querySelector("#selectTextButton");
const cards = document.querySelector("#cards");

selectTextButton.addEventListener("click", selectTextOnScreen);
selectTextButton.addEventListener("touchend", (event) => {
  event.preventDefault();
  selectTextOnScreen();
});

function selectTextOnScreen() {
  requestAnimationFrame(() => selectRange(cards));
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
