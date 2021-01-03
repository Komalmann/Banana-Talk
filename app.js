var button = document.querySelector("#btn")
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");

var ServerURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return ServerURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error Occurred: ", error)
    alert("Something went wrong! Please try again in some time.");
}
button.addEventListener("click", function clickEventHandler() {
    var InputText = textInput.value;

    if(InputText=="")
    {
        alert("Please insert some English text first");
    }

    fetch(getTranslationURL(InputText)).then(response => response.json()).then(json => {
        outputDiv.innerText = json.contents.translated;
    }).catch(errorHandler);
});