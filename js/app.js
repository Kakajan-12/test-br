const clearButton = document.querySelector(".clear");
const searchInput = document.getElementById("search");

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  clearButton.style.display = "none";
});

searchInput.addEventListener("keyup", function () {
  let searchInputValue = searchInput.value.length;
  if (searchInputValue == 0) {
    clearButton.style.display = "none";
  } else {
    clearButton.style.display = "block";
  }
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown, i) => {
  dropdown.addEventListener("click", () => {
    dropdowns[i].classList.toggle("active");
  });
});

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const filterIcon = document.querySelector(".filter__icon");
const filter = document.querySelector(".filter");
const filterClose = document.querySelector(".filter__close");

filterIcon.addEventListener("click", () => {
  filter.classList.add("active");
});

filterClose.addEventListener("click", () => {
  filter.classList.remove("active");
});

const mobileSearchBtn = document.querySelector('.header__search_icon')
const mobileSearch = document.querySelector('.mobile__search')

mobileSearchBtn.addEventListener("click", () => {
  mobileSearch.classList.toggle('active')
})