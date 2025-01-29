// CONSTANTS
const menuIcon = document.querySelector(".menu_icon");
const menu = document.querySelector(".menu");
const bod = document.querySelector("body");

// EVENTLISTENER
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  bod.classList.toggle("no_scroll");
});
