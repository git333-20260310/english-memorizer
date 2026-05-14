const readerButton = document.querySelector("#selectTextButton");
const readerScreen = document.querySelector("#readerScreen");
const readerContent = document.querySelector("#readerContent");
const readerBackButton = document.querySelector("#readerBackButton");
const cards = document.querySelector("#cards");

readerButton.addEventListener("click", openReaderScreen);
readerBackButton.addEventListener("click", closeReaderScreen);

function openReaderScreen() {
  renderReaderContent();
  readerScreen.hidden = false;
  document.body.classList.add("reader-active");
  window.scrollTo({ top: 0, behavior: "auto" });
}

function closeReaderScreen() {
  document.body.classList.remove("reader-active");
  readerScreen.hidden = true;
  readerContent.innerHTML = "";
}

function renderReaderContent() {
  const visibleCards = [...cards.querySelectorAll(".card")];
  readerContent.innerHTML = "";

  if (visibleCards.length === 0) {
    const empty = document.createElement("p");
    empty.className = "reader-empty";
    empty.textContent = "読み上げる例文がありません。";
    readerContent.append(empty);
    return;
  }

  for (const card of visibleCards) {
    const item = document.createElement("article");
    item.className = "reader-item";

    for (const source of card.querySelectorAll(".english, .japanese")) {
      const line = document.createElement("p");
      line.className = source.classList.contains("english") ? "reader-english" : "reader-japanese";
      line.lang = source.classList.contains("english") ? "en" : "ja";
      line.textContent = source.textContent;
      item.append(line);
    }

    readerContent.append(item);
  }
}
