const elements = {
  lovedBtnEl: document.querySelector(".loved-btn"),
  modalCloseBtnEl: document.querySelector(".modal-close-btn"),
  backdropEl: document.querySelector(".backdrop"),

  menuOpenBtnEl: document.querySelector(".menu-open-btn"),
  menuCloseBtnEl: document.querySelector(".mob-close-btn"),
  mobMenuEl: document.querySelector(".mob-menu"),
  loginForm: document.querySelector(".modal-form"),
  checkBoxEl: document.querySelector("#policy"),
  submitBtnEl: document.querySelector(".modal-btn"),
};

// Відкриття/закриття модалки
elements.lovedBtnEl.addEventListener("click", () => {
  elements.backdropEl.classList.add("is-open");
});

elements.modalCloseBtnEl.addEventListener("click", () => {
  elements.backdropEl.classList.remove("is-open");
});

// Відкриття/закриття мобільного меню
elements.menuOpenBtnEl.addEventListener("click", () => {
  elements.mobMenuEl.classList.add("is-open");
});

elements.menuCloseBtnEl.addEventListener("click", () => {
  elements.mobMenuEl.classList.remove("is-open");
});

elements.checkBoxEl.addEventListener("input", () => {
  elements.submitBtnEl.disabled = !elements.checkBoxEl.checked;
});

elements.loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    name: this.elements.userName.value.trim(),
    email: this.elements.userEmail.value.trim(),
    tel: this.elements.userTel.value.trim(),
    comment: this.elements.userComment.value.trim(),
  };

  if (Object.values(formData).some((value) => value === "")) {
    alert("All form fields must be filled in");
    return;
  }

  if (!elements.checkBoxEl.checked) {
    alert(
      "You must agree to the terms and conditions before submitting the form."
    );
    return;
  }

  console.log(formData);

  this.reset();
  elements.submitBtnEl.disabled = true;
});
