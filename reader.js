const selectTextButton = document.querySelector("#selectTextButton");
const cards = document.querySelector("#cards");

selectTextButton.addEventListener("click", selectTextOnScreen);

function selectTextOnScreen() {
  selectRange(cards);
  speakVisibleText();
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

function speakVisibleText() {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    alert("このブラウザでは自動読み上げに対応していません。");
    return;
  }

  const lines = [...cards.querySelectorAll(".card")]
    .flatMap((card) => {
      const english = card.querySelector(".english")?.textContent.trim();
      const japanese = card.querySelector(".japanese")?.textContent.trim();
      return [
        english ? { text: english, lang: "en-US" } : null,
        japanese ? { text: japanese, lang: "ja-JP" } : null,
      ];
    })
    .filter(Boolean);

  if (lines.length === 0) return;

  window.speechSynthesis.cancel();

  for (const line of lines) {
    const utterance = new SpeechSynthesisUtterance(line.text);
    utterance.lang = line.lang;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}
