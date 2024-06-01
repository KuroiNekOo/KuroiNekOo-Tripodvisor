document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const btnNewsletter = document.querySelector(".icon-mail").parentElement;
  const btnClosePopUpNewsletter = document.querySelector(".newsletter__close");
  const popUpNewsletter = document.querySelector(".newsletter");
  const formNewsletter = document.querySelector(".newsletter form");
  const btnTheme = document.querySelector("#theme-switch");
  const btnColors = document.querySelectorAll(".theme-button");
  const filters = document.querySelectorAll(".filter");
  const articles = document.querySelectorAll(".review");
  let etatBtnClose = false;

  const forbiddenDomains = [
    "@yopmail.com",
    "@yopmail.fr",
    "@yopmail.net",
    "@cool.fr.nf",
    "@jetable.fr.nf",
    "@courriel.fr.nf",
    "@moncourrier.fr.nf",
    "@monemail.fr.nf",
    "@monmail.fr.nf",
    "@hide.biz.st",
    "@mymail.infos.st",
  ];

  function removeThemeColors(str) {
    if (str === "theme-green") {
      body.classList.remove("theme-red");
      body.classList.remove("theme-blue");
      body.classList.add("theme-green");
    } else if (str === "theme-red") {
      body.classList.remove("theme-green");
      body.classList.remove("theme-blue");
      body.classList.add("theme-red");
    } else if (str === "theme-blue") {
      body.classList.remove("theme-red");
      body.classList.remove("theme-green");
      body.classList.add("theme-blue");
    }
  }

  btnNewsletter.addEventListener("click", function (event) {
    event.preventDefault();
    popUpNewsletter.classList.remove("newsletter--hidden");
  });

  btnClosePopUpNewsletter.addEventListener("click", function () {
    popUpNewsletter.classList.add("newsletter--hidden");
    etatBtnClose = true;
  });

  window.addEventListener("scroll", function () {
    const positionScrollY = this.window.scrollY;
    if (positionScrollY >= 300 && !etatBtnClose) {
      popUpNewsletter.classList.remove("newsletter--hidden");
    } else {
      popUpNewsletter.classList.add("newsletter--hidden");
    }
  });

  formNewsletter.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputEmail = event.target.elements["subscriber-email"];
    const errorMessage = formNewsletter.querySelector("#error-message");
    errorMessage.style.display = null;

    for (elem of forbiddenDomains) {
      if (inputEmail.value.includes(elem)) {
        errorMessage.style.display = "flex";
        break;
      }
    }
  });

  btnTheme.addEventListener("click", function () {
    body.classList.toggle("theme-dark");
  });

  btnColors.forEach((element) => {
    element.addEventListener("click", function () {
      if (element.id === "theme-green") {
        removeThemeColors(element.id);
      } else if (element.id === "theme-red") {
        removeThemeColors(element.id);
      } else if (element.id === "theme-blue") {
        removeThemeColors(element.id);
      }
    });
  });

  function isChecked(num) {
    const input = document.querySelector(`#rating-${num}`);
    if (!input.checked) {
      articles.forEach((element) => {
        if (element.dataset.rating === `${num}`) {
          element.classList.add(`data-rating-${num}`);
        } else {
          element.classList.remove(`data-rating-${num}`);
        }
      });
    } else {
      articles.forEach((element) => {
        element.classList.remove(`data-rating-${num}`);
      });
    }
  }

  filters.forEach((element) => {
    element.addEventListener("change", function () {
      for (i = 1; i <= 3; i++) {
        isChecked(i);
      }
    });
  });
});
