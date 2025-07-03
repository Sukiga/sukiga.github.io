const open = document.getElementById("popupTrigger");
const close = document.getElementById("closePopup");
const popupWindow = document.getElementById("popupWindow");

open.addEventListener("click", () => {
    popupWindow.classList.add("open");
});
close.addEventListener("click", () => {
    popupWindow.classList.remove("open");
});