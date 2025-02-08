let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

window.scroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let hight = sec.getAttribute("id");

    if (top >= offset && top < offset + hight) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*='+id+']")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scroll > 100);

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content .heading", { origin: "top" });

ScrollReveal().reveal(".home-img, .portfolio-box,  .contact form , .skills ", {
  origin: "bottom",
});

ScrollReveal().reveal(".home-content h1  ", { origin: "left" });

ScrollReveal().reveal(".home-content p", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer"], // Corrected text
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    617: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});



 document.addEventListener("DOMContentLoaded", function () {
        const params = new URLSearchParams(window.location.search);
        if (params.has("submitted")) {
            window.location.href = "https://hassanmohamed20.github.io/Hassan-Portfolio-/";
        }
    })
