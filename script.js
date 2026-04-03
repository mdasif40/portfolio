// Debug message
console.log("Portfolio loaded successfully.");

// Get elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// Close menu when link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
  });
});