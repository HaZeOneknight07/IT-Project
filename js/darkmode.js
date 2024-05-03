const darkmodeToggle = document.querySelector(".darkmode");

// Function to set dark mode state
function setDarkMode(isDarkMode) {
  document.body.classList.toggle("dark", isDarkMode);
  document.body.style.background = isDarkMode ? "#202225" : "#f9f9f9";
  document.body.style.color = isDarkMode ? "#f9f9f9" : "#202225";

  // Toggle visibility of light and dark mode icons
  const lightIcon = document.querySelector(".darkmode .light");
  const darkIcon = document.querySelector(".darkmode .dark");

  if (isDarkMode) {
    lightIcon.style.display = "none";
    darkIcon.style.display = "inline-block";
  } else {
    lightIcon.style.display = "inline-block";
    darkIcon.style.display = "none";
  }
  
  // Store the theme preference in localStorage
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// Event listener for dark mode toggle
darkmodeToggle.addEventListener("click", function() {
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";
  setDarkMode(!isDarkMode);
});

// Check if dark mode is enabled/disabled on page load
const darkModeState = localStorage.getItem("darkMode");
if (darkModeState === "enabled") {
  setDarkMode(true);
} else if (darkModeState === "disabled") {
  setDarkMode(false);
}
