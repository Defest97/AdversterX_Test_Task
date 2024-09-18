document.addEventListener("DOMContentLoaded", function () {
  let preloader = document.querySelector(".preloader");

  let firstSection = document.querySelector(`.section[data-sectionid="1"]`);
  firstSection.classList.add("active");
  window.onload = function () {
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500);
  };
  initSliders();
});
function initSliders() {
  if (document.querySelector(".section__choose__slider"))
    new Swiper(".section__choose__slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      speed: 800,
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      on: {},
    });
}
window.addEventListener("load", function (e) {});

function toggleSound(btn) {
  var audioElement = document.getElementById("background-audio");
  if (btn.classList.contains("active")) {
    audioElement.pause();
    btn.classList.remove("active");
  } else {
    audioElement.play();
    btn.classList.add("active");
  }
}

function nextSection(btn) {
  let currentSection = btn.closest(".section");
  let currentId = currentSection.dataset.sectionid;
  let nextSection = document.querySelector(`.section[data-sectionid="${+currentId + 1}"]`);
  if (nextSection) {
    currentSection.style.transform = "translateX(-100%)";
    nextSection.style.transform = "translateX(0)";
    nextSection.classList.add("active");
    currentSection.classList.remove("active");
  }
}
