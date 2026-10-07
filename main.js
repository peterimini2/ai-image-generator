const themeToggle = document.querySelector(".theme-toggle");

// Switch between light and dark themes
const toggleTheme = () => {
  const isDarkTheme = document.body.classList.toggle("dark-theme");
  themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

themeToggle.addEventListener("click", toggleTheme);