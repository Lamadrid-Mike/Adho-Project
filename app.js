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
// MOBILE MENU
const mobileBtn = document.querySelector(".nav-bar");
mobileBtn.addEventListener("click", function () {
  if (document.querySelector(".links").classList.contains("hidden")) {
    document.querySelector(".links").classList.remove("hidden");
  } else {
    document.querySelector(".links").classList.add("hidden");
  }
});

//ALIGN TEXT TO ALL <P> ELEMENTS
const paragraphs = document.querySelectorAll(".cards div p");
paragraphs.forEach((el) => el.classList.add("textAlign"));
