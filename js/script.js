var link = document.querySelector(".feedback-form-btn");
var popup = document.querySelector(".feedback-form");
var mask = document.querySelector(".modal-mask");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var feedback = popup.querySelector("[name=feedback]");

var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-form-show");
  mask.classList.add("visible");

  if (storageName && storageEmail) {
      name.value = storageName;
      email.value = storageEmail;
    }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-form-show");
  mask.classList.remove("visible");
  popup.classList.remove("feedback-form-error");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!name.value || !mail.value || !feedback.value) {
        evt.preventDefault();
        popup.classList.remove("feedback-form-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feedback-form-error");
      }
    else {
          localStorage.setItem("name", name.value);
          localStorage.setItem("mail", mail.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("feedback-form-show")) {
        popup.classList.remove("feedback-form-show");
        popup.classList.remove("feedback-form-error");
        mask.classList.remove("visible");
      }
    }
  });
