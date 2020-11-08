const loginLink = document.querySelector(".find-hotel-button");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");

loginLink.addEventListener("click", function () {

});

loginClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-show");
  });