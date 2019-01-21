var link = document.querySelector(".feedback-form-btn");
var popup = document.querySelector(".feedback-form");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]");
var feedback = popup.querySelector("[name=feedback]");

var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("mail");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-form-show");

  if (storageName && storageEmail) {
      name.value = storageName;
      mail.value = storageEmail;
    }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-form-show");
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
      }
    }
  });
