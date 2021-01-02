var button = document.querySelector("#btn")
var textInput = document.querySelector("#txt-input")

console.log(textInput);


button.addEventListener("click", function clickEventHandler()
{
    console.log("clicked")
    console.log("input",textInput.value);
})