//CAROUSEL FUNCTION
let myIndex = 0;
carousel();
function carousel() {
  let i;
  let y = document.getElementsByClassName("slides");
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > y.length) {
    myIndex = 1;
  }
  y[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}

//Selections
const firstSection = document.querySelector(".mid");
const nav = document.querySelector(".nav-links");

// MOBILE MENU
const mobileBtn = document.querySelector(".nav-bar");
mobileBtn.addEventListener("click", function () {
  if (document.querySelector(".links").classList.contains("hidden")) {
    document.querySelector(".links").classList.remove("hidden");
    document.querySelector(".links").classList.add("mobileMenuClass");
    document.querySelector(".nav-bar").classList.add("change");
  } else {
    document.querySelector(".links").classList.add("hidden");
    document.querySelector(".links").classList.remove("mobileMenuClass");
    document.querySelector(".nav-bar").classList.remove("change");
  }
});

//ALIGN TEXT TO ALL <P> ELEMENTS
const paragraphs = document.querySelectorAll(".cards div p");
paragraphs.forEach((el) => el.classList.add("textAlign"));

//RESIZE WINDOW FUNCTION
addEventListener("resize", function () {
  let displayWidth = window.innerWidth;
  if (displayWidth <= 600) {
    document.querySelector(".links").classList.remove("mobileMenuClass");
    document.querySelector(".links").classList.add("hidden");
  }
});

//Scroll function
document.querySelector(".links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.hasAttribute("href")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// Creating sticky bar
const stickyBar = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) return;
  if (!entry.isIntersecting) {
    document.querySelector(".nav-links").classList.add("stickyNav");
  } else {
    document.querySelector(".nav-links").classList.remove("stickyNav");
  }
};

const observer = new IntersectionObserver(stickyBar, {
  root: null,
  threshold: 0,
});

observer.observe(firstSection);

// Getting form data
let formData = Array.from(document.querySelectorAll(".formData"));
let formBtn = document.querySelector(".formBtn");

let data = formData.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.id]: cur.value,
  }),
  {}
);

console.log(data);
