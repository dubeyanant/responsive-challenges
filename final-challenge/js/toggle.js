const nav = document.querySelector(".nav__list");
const menu = document.querySelector(".nav__menu");
const close = document.querySelector(".nav__close");

const toggle = () => {
  nav.classList.toggle("show");
  menu.classList.toggle("hide");
  close.classList.toggle("hide");
};

menu.addEventListener("click", toggle);
close.addEventListener("click", toggle);
