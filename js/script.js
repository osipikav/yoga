window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let tab = document.querySelectorAll(".info-header-tab");
  let info = document.querySelector(".info-header");
  let tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.add("show");
      tabContent[b].classList.remove("hide");
    }
  }

  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  const deadline = "2022-09-07";
  // const deadline1 = new Date(Date.now() + (60 * 1000 + 999));
  let timerId = null;
  const hoursSpan = document.querySelector(".hours");
  const minutesSpan = document.querySelector(".minutes");
  const secondsSpan = document.querySelector(".seconds");

  function countdownTimer() {
    const diff = Date.parse(deadline) - Date.parse(new Date());
    if (diff <= 0) {
      clearInterval(timerId);
    }

    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    hoursSpan.textContent = hours < 10 ? "0" + hours : hours;
    minutesSpan.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsSpan.textContent = seconds < 10 ? "0" + seconds : seconds;
  }
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});
