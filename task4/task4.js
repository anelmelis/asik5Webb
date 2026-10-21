const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const itemList = document.getElementById("itemList");

let itemCount = 0;

addButton.addEventListener("click", function() {
    itemCount++;

    const newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCount;

    itemList.appendChild(newItem);
});

removeButton.addEventListener("click", function() {
    if (itemList.lastElementChild) {
        itemList.lastElementChild.remove();
    }
});
