const selectEnglishButton = document.querySelector("#selectEnglishButton");
const selectBothButton = document.querySelector("#selectBothButton");
const speechSettingsButton = document.querySelector("#speechSettingsButton");
const readerText = document.querySelector("#readerText");
const cards = document.querySelector("#cards");

selectEnglishButton.addEventListener("click", () => selectForReading("english"));
selectBothButton.addEventListener("click", () => selectForReading("both"));
speechSettingsButton.addEventListener("click", openSpeechSettings);

function selectForReading(kind) {
  const text = [...cards.querySelectorAll(".card")]
    .flatMap((card) => {
      const english = card.querySelector(".english")?.textContent.trim();
      const japanese = card.querySelector(".japanese")?.textContent.trim();

      if (kind === "english") return [english];
      return [english, japanese];
    })
    .filter(Boolean)
    .join("\n");

  if (!text) return;

  readerText.hidden = false;
  readerText.value = text;
  readerText.focus({ preventScroll: true });
  readerText.select();
  readerText.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function openSpeechSettings() {
  alert("読み上げ速度は iPhoneの「設定」→「アクセシビリティ」→「読み上げコンテンツ」→「読み上げ速度」で変更できます。このあと設定画面を開ける場合があります。");
  window.location.href = "App-Prefs:root=ACCESSIBILITY&path=SPEECH_TITLE";
}
