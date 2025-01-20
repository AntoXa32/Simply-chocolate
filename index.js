const lovedBtnEl = document.querySelector(".loved-btn");
const modalCloseBtnEl = document.querySelector(".modal-close-btn");
const backdropEl = document.querySelector(".backdrop");

const menuOpenBtnEl = document.querySelector(".menu-open-btn");
const menuCloseBtnEl = document.querySelector(".mob-close-btn");
const mobMenuEl = document.querySelector(".mob-menu");

lovedBtnEl.addEventListener("click", () => {
  backdropEl.classList.add("is-open");
});

modalCloseBtnEl.addEventListener("click", () => {
  backdropEl.classList.remove("is-open");
});

menuOpenBtnEl.addEventListener("click", () => {
  mobMenuEl.classList.add("is-open");
});

menuCloseBtnEl.addEventListener("click", () => {
  mobMenuEl.classList.remove("is-open");
});
