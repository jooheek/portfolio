"use strict";

//navbar 가 위에 있을 때 투명하게 만듦
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//navbar 메뉴 선택시 동일한 section으로 이동
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

//hamburger btn 클릭시 navbar menu 목록 띄우기
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

//home 의 contact me 버튼 클릭시 하단 contact section으로 이동
const contactBtn = document.querySelector(".home__contact");

contactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

//하단으로 스크롤시 home 투명도 증가
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//페이지 하단으로 이동시 상단 이동 버튼
const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//arrow 클릭시 상단으로 이동
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//project
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  if (filter == null) {
    return;
  }

  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  //category_btn클릭시 해당 project animation event 생략
  projects.forEach((project) => {
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
});

//selector 선택시 스크롤되는 공통 함수
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
