var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");
var buttonTranslate = document.querySelector("#btn-translate");
var apiUrl = "https://api.funtranslations.com/translate/minion.json";

function errorHandle(error) {
  alert("Something went wrong with the server! Please try again later.");
  console.log("Error details:", error);
}

function clickHandler() {
  var text = inputText.value;
  var updateUrl = apiUrl + "?text=" + text;
  fetch(updateUrl)
    .then((response) => response.json())
    .then((json) => (outputText.innerText = json.contents.translated))
    .catch(errorHandle);
}

buttonTranslate.addEventListener("click", clickHandler);
