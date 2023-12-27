//script for on-scroll active nav and header

let sections = document.querySelectorAll(".right-side section");
let navLinks = document.querySelectorAll(".section-2 nav a");
let ActiveHeader = document.querySelectorAll(".right-side section a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id"); //return id=AboutMe
    let id2 = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".section-2 nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }

    if (top >= offset && top < offset + height) {
      ActiveHeader.forEach((headers) => {
        headers.classList.remove("active");
        document
          .querySelector(".right-side section a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

//script for dark-mode toggle

document.querySelector("#checkbox").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
