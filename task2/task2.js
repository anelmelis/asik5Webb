const paragraph = document.getElementById("message");
const button = document.getElementById("changeButton");

button.addEventListener("click", function() {
    paragraph.textContent = "The text has been changed using JavaScript!";
});
