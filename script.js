// ===== Mobile nav toggle =====
const navToggle = document.getElementById("nav-toggle");
const navbar = document.getElementById("navbar");

if (navToggle && navbar) {
  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });

  // Close menu when you click a link (on mobile)
  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });
}

// Simple horizontal carousel for certs & publications
document.querySelectorAll("[data-carousel]").forEach((shell) => {
  const track = shell.querySelector(".carousel-track");
  const prev = shell.querySelector(".carousel-prev");
  const next = shell.querySelector(".carousel-next");
  const firstCard = track.querySelector(".carousel-card");

  if (!track || !firstCard) return;

  const getScrollAmount = () => {
    const style = window.getComputedStyle(track);
    const gap =
      parseFloat(style.columnGap || style.gap || "16") || 16;
    return firstCard.offsetWidth + gap;
  };

  const scrollByAmount = (direction) => {
    const amount = getScrollAmount() * direction;
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  if (prev) prev.addEventListener("click", () => scrollByAmount(-1));
  if (next) next.addEventListener("click", () => scrollByAmount(1));
});


// ===== Header shadow on scroll =====
const header = document.querySelector(".header");

function handleScroll() {
  if (!header) return;
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleScroll);
handleScroll();

const footerYearEl = document.getElementById("footer-year");
if (footerYearEl) {
  footerYearEl.textContent = new Date().getFullYear();
}

/* Smooth reveal for left/right elements */
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".reveal-left, .reveal-right");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
});
