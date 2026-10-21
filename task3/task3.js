const box = document.getElementById("myBox");
const text = document.getElementById("myText");

const colorButton = document.getElementById("colorButton");
const fontButton = document.getElementById("fontButton");

colorButton.addEventListener("click", function() {
    box.style.backgroundColor = "lightgreen";
});

fontButton.addEventListener("click", function() {
    text.style.fontSize = "28px";
});
