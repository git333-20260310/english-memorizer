const selectEnglishButton = document.querySelector("#selectEnglishButton");
const selectJapaneseButton = document.querySelector("#selectJapaneseButton");
const readerText = document.querySelector("#readerText");
const cards = document.querySelector("#cards");

selectEnglishButton.addEventListener("click", () => selectForReading("english"));
selectJapaneseButton.addEventListener("click", () => selectForReading("japanese"));

function selectForReading(kind) {
  const selector = kind === "english" ? ".english" : ".japanese";
  const text = [...cards.querySelectorAll(selector)]
    .map((element) => element.textContent.trim())
    .filter(Boolean)
    .join("\n");

  if (!text) return;

  readerText.hidden = false;
  readerText.value = text;
  readerText.focus({ preventScroll: true });
  readerText.select();
  readerText.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
