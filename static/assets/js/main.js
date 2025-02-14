document.addEventListener("DOMContentLoaded", function () {
  console.log("Main.js is loaded successfully!");

  // Smooth scrolling for links with class 'scrollto'
  document.querySelectorAll("a.scrollto").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        let target = document.querySelector(this.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Sticky header on scroll
  let header = document.querySelector("#header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  // Back to top button
  let backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        backToTop.classList.add("active");
      } else {
        backToTop.classList.remove("active");
      }
    });
  }

  // Mobile nav toggle
  let mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", function () {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      this.classList.toggle("ri-menu-line");
      this.classList.toggle("ri-close-line");
    });
  }

  // AOS animations (if available)
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }
});
