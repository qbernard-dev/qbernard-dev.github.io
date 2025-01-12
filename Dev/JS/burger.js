document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger-menu");
    const navLinks = document.getElementById("nav-links");
  
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  });
  