document.getElementById("burgerButton").addEventListener("click", showBurgerMenuItems);
document.getElementById("menuItems").addEventListener("click", showInnerMenu);

function showBurgerMenuItems(e) {
    var items = document.getElementById("menuItems");
    items.classList.toggle("unhidden");
    e.target.classList.toggle("active");
}

function showInnerMenu(event) {
    let listNode = event.target.parentElement;
    if (event.target && event.target.id == "expandButton") {
        closeLevelDropdowns(event.target);
        event.target.nextElementSibling.classList.toggle("unhidden");
        event.target.nextElementSibling.classList.toggle("relative");
        listNode.parentElement.prepend(listNode);
        event.target.classList.toggle("active");
    }
}

function closeLevelDropdowns(target) {
    let thisLevelList = target.closest("ul");
    let openedDropdowns = thisLevelList.getElementsByClassName("relative");
    Array.prototype.forEach.call(openedDropdowns, openedDropdown => {
        if (openedDropdown !== target.nextElementSibling) {
            openedDropdown.classList.remove("unhidden", "relative");
        }
    });
    let dropdownButtons = thisLevelList.getElementsByClassName("menu__expand-button");
    Array.prototype.forEach.call(dropdownButtons, dropdownButton => {
        if (dropdownButton !== target) {
            dropdownButton.classList.remove("active");
        }
    });
}