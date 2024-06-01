import {
  showNewsletterScroll,
  showNewsletter,
  closeBtnNewsletter,
  sendEmailNewsletter,
  changeTheme,
  changeThemeColors,
  isChecked,
  switchSliderImage,
  showPreviousImage,
  showNextImage,
} from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  // Ecouteur de l'event "click" pour l'ouverture de la pop-up
  const btnNewsletter = document.querySelector(".icon-mail").parentElement;
  btnNewsletter.addEventListener("click", function (event) {
    event.preventDefault();
    showNewsletter();
  });

  // Ecouteur de l'event "click" pour la fermeture de la pop-up
  const btnClosePopUpNewsletter = document.querySelector(".newsletter__close");
  btnClosePopUpNewsletter.addEventListener("click", function () {
    closeBtnNewsletter();
  });

  // Ecouteur de l'event "scroll"
  window.addEventListener("scroll", function () {
    showNewsletterScroll();
  });

  // Triage des domaines dans le formulaire de la pop-up
  const formNewsletter = document.querySelector(".newsletter form");
  formNewsletter.addEventListener("submit", function (event) {
    event.preventDefault();
    sendEmailNewsletter(event);
  });

  // Changer le thème en dark ou light
  const btnTheme = document.querySelector("#theme-switch");
  btnTheme.addEventListener("click", function () {
    changeTheme();
  });

  // Changer la couleur principale du site
  const btnColors = document.querySelectorAll(".theme-button");
  btnColors.forEach((element) => {
    element.addEventListener("click", function () {
      changeThemeColors(element.id);
    });
  });

  // Filtrage des commentaires par le nombre d'étoiles
  const filters = document.querySelectorAll(".filter");
  filters.forEach((element) => {
    element.addEventListener("change", function () {
      const nbrBtn = 3;
      for (let i = 1; i <= nbrBtn; i++) {
        isChecked(i);
      }
    });
  });

  // Partie slider avec les boutons
  const sliderBtns = document.querySelectorAll(".slider button");
  const previousBtn = sliderBtns[0];
  const nextBtn = sliderBtns[1];
  previousBtn.addEventListener("click", function () {
    showPreviousImage();
  });
  nextBtn.addEventListener("click", function () {
    showNextImage();
  });
  switchSliderImage();
});
