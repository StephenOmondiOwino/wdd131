// Footer year and last modified
const yearSpan = document.getElementById("year");
const lastMod = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastMod.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("open") ? "X" : "☰";
});
