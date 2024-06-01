// module "utils.js"
const body = document.querySelector("body");
const popUpNewsletter = document.querySelector(".newsletter");
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
const sliderImages = ["canyon", "city", "nature", "ocean", "road", "ski"];

const sliderContainer = document.querySelector(".slider");
let sliderIndex = 0;
function switchSliderImage() {
  const currentImg = document.querySelector(".slider__img--current");
  if (currentImg) {
    currentImg.remove();
  }

  if (sliderIndex > sliderImages.length - 1) {
    sliderIndex = 0;
  }

  if (sliderIndex < 0) {
    sliderIndex = sliderImages.length - 1;
  }

  const image = document.createElement("img");
  image.classList.add("slider__img", "slider__img--current");
  image.setAttribute("alt", "Un paysage magnifique");
  image.setAttribute("src", `img/${sliderImages[sliderIndex]}.jpg`);

  sliderContainer.append(image);
}

function showNextImage() {
  sliderIndex++;
  switchSliderImage();
}

function showPreviousImage() {
  sliderIndex--;
  switchSliderImage();
}

function showNewsletter() {
  popUpNewsletter.classList.remove("newsletter--hidden");
}

function closeBtnNewsletter() {
  popUpNewsletter.classList.add("newsletter--hidden");
  etatBtnClose = true;
}

function showNewsletterScroll() {
  const displayPopUpScroll = 300;
  const positionScrollY = window.scrollY;
  if (positionScrollY >= displayPopUpScroll && !etatBtnClose) {
    showNewsletter();
  }
}

function sendEmailNewsletter(element) {
  const inputEmail = element.target.querySelector("#subscriber-email");

  for (const elem of forbiddenDomains) {
    if (inputEmail.value.includes(elem)) {
      inputEmail.classList.add("input-isInvalid");
      break;
    } else {
      inputEmail.classList.remove("input-isInvalid");
    }
  }
}

function changeTheme() {
  body.classList.toggle("theme-dark");
}

function changeThemeColors(id) {
  if (id === "theme-green") {
    body.classList.remove("theme-red");
    body.classList.remove("theme-blue");
    body.classList.add("theme-green");
  } else if (id === "theme-red") {
    body.classList.remove("theme-green");
    body.classList.remove("theme-blue");
    body.classList.add("theme-red");
  } else if (id === "theme-blue") {
    body.classList.remove("theme-red");
    body.classList.remove("theme-green");
    body.classList.add("theme-blue");
  }
}

const articles = document.querySelectorAll(".review");
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

export {
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
};
