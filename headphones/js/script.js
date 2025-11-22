const menuBtn = document.getElementById("menuToggle");
const links = document.getElementById("mobile-links");

menuBtn.addEventListener("click", () => {
  // Toggle link visibility
  links.classList.toggle("show");

  // Switch icon
  if (menuBtn.classList.contains("holberton_school-icon-ic-menu")) {
    menuBtn.classList.remove("holberton_school-icon-ic-menu");
    menuBtn.classList.add("icon-close1");
  } else {
    menuBtn.classList.remove("icon-close1");
    menuBtn.classList.add("holberton_school-icon-ic-menu");
  }
});
