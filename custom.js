//displays background color on navbar when scrolled
const navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navEl.classList.toggle("navbar-scrolled", window.scrollY > 30);
});

//collapses nav bar on mobile when link is clicked
const navLinks = document.querySelectorAll(".nav-item:not(.dropdown)");
const menuToggle = document.getElementById("main-nav");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach(function (l) {
  l.addEventListener("click", function () {
    // avoids flickering on desktop
    if (menuToggle.classList.contains("show")) {
      bsCollapse.toggle();
    }
  });
});


//Auto Updates the year in footer
const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();

