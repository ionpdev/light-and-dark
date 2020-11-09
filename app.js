const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}

//second version
//
// const toggleSwitch = document.querySelector('input[type="checkbox"]');
// const nav = document.getElementById("nav");
// const toggleIcon = document.getElementById("toggle-icon");
// const image1 = document.getElementById("image1");
// const image2 = document.getElementById("image2");
// const image3 = document.getElementById("image3");
// const textBox = document.getElementById("text-box");

// const DARK_THEME = "dark";
// const LIGHT_THEME = "light";
// // Dark or Light images

// function imageMode(color) {
//   image1.src = `img/undraw_proud_coder_${color}.svg`;
//   image2.src = `img/undraw_feeling_proud_${color}.svg`;
//   image3.src = `img/undraw_conceptual_idea_${color}.svg`;
// }

// // Dark abd Light Mode
// function toggleDarkLightMode(isDark) {
//   nav.backgroundColor = isDark
//     ? "rgb( 0 0 0 / 50%)"
//     : "rgb( 255 255 255 / 50%)";
//   textBox.style.backgroundColor = isDark
//     ? "rgba(255 255 255 / 50%)"
//     : "rgba(0 0 0 / 50%)";
//   toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
//   isDark
//     ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
//     : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
//   isDark ? imageMode("dark") : imageMode("light");
// }

// // Switch Theme Dynamicaly
// function switchTheme(event) {
//   if (event.target.checked) {
//     document.documentElement.setAttribute("data-theme", DARK_THEME);
//     localStorage.setItem("theme", DARK_THEME);
//     toggleDarkLightMode(DARK_THEME);
//   } else {
//     document.documentElement.setAttribute("data-theme", LIGHT_THEME);
//     localStorage.setItem("theme", LIGHT_THEME);
//     toggleDarkLightMode(LIGHT_THEME);
//   }
// }

// // Event Listener
// toggleSwitch.addEventListener("change", switchTheme);

// // check local storage for theme
// const currentTheme = localStorage.getItem("theme");
// if (currentTheme) {
//   document.documentElement.setAttribute("data-theme", currentTheme);

//   if (currentTheme === DARK_THEME) {
//     toggleSwitch.checked = true;
//     toggleDarkLightMode(DARK_THEME);
//   }
// }
