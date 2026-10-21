const colorBox = document.getElementById("colorBox");

colorBox.addEventListener("mouseover", function() {
    colorBox.style.backgroundColor = "lightpink";
});

colorBox.addEventListener("mouseout", function() {
    colorBox.style.backgroundColor = "lightblue";
});
