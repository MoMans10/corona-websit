"use strict";

const body = document.querySelector("body");
console.log(body);
body.style.transitionTimingFunction = "linear";

NodeList.prototype.indexOf = Array.prototype.indexOf;

// go to top page
const scrollBtn = document.querySelector(".scroll-btn");
scrollBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
window.onscroll = () => {
  if (window.scrollY > 1400) {
    scrollBtn.classList.remove("d-none");
  } else {
    scrollBtn.classList.add("d-none");
  }
  blueNavItem();
};

// left Accordion
const FAQBTNS = document.querySelectorAll(".FAQ-btn");
const FAQCOL = document.querySelectorAll(".FAQ");
let oldIndex = 0;
let x = 0;
FAQBTNS.forEach((btn) => {
  let newIndex = FAQBTNS.indexOf(btn);
  btn.addEventListener("click", () => {
    switch (newIndex) {
      case 0:
        x = 0;
        break;
      case 1:
        x = 4;
        break;
      case 2:
        x = 11;
        break;
      case 3:
        x = 16;
        break;
      case 4:
        x = 20;
        break;
      case 5:
        x = 26;
        break;
    }
    if (newIndex != oldIndex) {
      FAQCOL[newIndex].classList.remove("d-none");
      FAQCOL[oldIndex].classList.add("d-none");
      FAQBTNS[newIndex].classList.add("btn-focus");
      FAQBTNS[oldIndex].classList.remove("btn-focus");
      fristBox();
      oldIndex = newIndex;
    }
    function fristBox() {
      ICONS[x].classList.add("fa-minus", "blue");
      ICONS[x].classList.remove("fa-plus");
      CONTENT[x].classList.remove("d-none");
      FAQBOX[x].style.background = "rgb(255, 255, 255)";
    }
  });
});

// right Accordion (show and hide content)
const ICONS = document.querySelectorAll(".FAQ-ICON");
const CONTENT = document.querySelectorAll(".FAQ-CONTENT");
const FAQBOX = document.querySelectorAll(".FAQ-BOX");

ICONS.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.settim;
    let Index = ICONS.indexOf(icon);
    if (icon.classList.contains("fa-plus")) {
      for (let i = 0; i < ICONS.length; i++) {
        ICONS[i].classList.add("fa-plus");
        ICONS[i].classList.remove("fa-minus", "blue");
        CONTENT[i].classList.add("d-none");
        FAQBOX[i].style.background = "rgb(245, 245, 245)";
      }
      icon.classList.add("fa-minus", "blue");
      icon.classList.remove("fa-plus");
      CONTENT[Index].classList.remove("d-none");
      FAQBOX[Index].style.background = "rgb(255, 255, 255)";
    } else {
      icon.classList.remove("fa-minus", "blue");
      icon.classList.add("fa-plus");
      CONTENT[Index].classList.add("d-none");
      FAQBOX[Index].style.background = "rgb(245, 245, 245)";
    }
  });
});

// make navbar item blue
const navNames = document.querySelectorAll(".nav-link");
navNames.forEach((name) => {
  name.addEventListener("click", () => {
    name.style.color = "blue";
  });
});
function blueNavItem() {
  let y = window.scrollY;
  if (y < 300) {
    navNames[0].style.color = "blue";
  } else if (y > 700 && y < 2000) {
    navNames[1].style.color = "blue";
  } else if (y > 2300 && y < 3000) {
    navNames[2].style.color = "blue";
  } else if (y > 3300 && y < 5000) {
    navNames[3].style.color = "blue";
  } else if (y > 5600 && y < 6900) {
    navNames[4].style.color = "blue";
  } else if (y > 7200 && y < 7900) {
    navNames[5].style.color = "blue";
  } else if (y > 8000 && y < 10000) {
    navNames[6].style.color = "blue";
  } else {
    navNames.forEach((name) => {
      name.style.color = "black";
    });
  }
}

// nav bar on small screen
const smallBar = document.querySelector(".small-bar");
const smallNav = document.querySelector(".smallmenue");
const xBtn = document.querySelector(".x-btn");
const smallNavBtn = document.querySelector(".small-navbtn");
smallNavBtn.addEventListener("click", () => {
  xBtn.classList.remove("d-none");
  smallNav.classList.remove("d-none");
  smallBar.classList.add("d-none");
});

xBtn.addEventListener("click", () => {
  navItemBlue();
});

const smBtn = document.querySelectorAll(".sm-btn");
smBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    navItemBlue();
  });
});

function navItemBlue() {
  xBtn.classList.add("d-none");
  smallNav.classList.add("d-none");
  smallBar.classList.remove("d-none");
}
