// Function to set color theme based on user's email
function setColorTheme(email) {
  // Default theme
  let theme = {
      "--footer-header-colour": "#405C59",
      "--sidebar-colour": "#D22A3A",
      // Add other default theme properties...
  };

  // Check email and set theme accordingly
  if (email === "admin@gelder.co.uk") {
      // Admin theme
      theme = {
          "--footer-header-colour": "#219ebc",
          "--sidebar-colour": "#yourAdminColor",
          // Add more customizations as needed
      };

  } else if (email === "surveys@gelder.co.uk") {
      // Surveyor theme
      theme = {
          "--footer-header-colour": "#2a9d8f",
          "--sidebar-colour": "#yourSurveyorColor",
          // Add more customizations as needed
      };

  } else if (email === "managers@gelder.co.uk") {
      // Manager theme
      theme = {
          "--footer-header-colour": "#d62828",
          "--sidebar-colour": "#yourManagerColor",
          // Add more customizations as needed
      };

  } else if (email === "ty.ashmore@gelder.co.uk") {
      // Manager theme
      theme = {
          "--footer-header-colour": "#643b9f",
          "--sidebar-colour": "#yourManagerColor",
          // Add more customizations as needed
      };
  }

  // Apply the theme by setting CSS variables
  const root = document.documentElement;
  for (const [key, value] of Object.entries(theme)) {
      root.style.setProperty(key, value);
  }

  // Apply sidebar color directly to the sidebar
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.background = theme["--sidebar-colour"];
}

// Call the function with the signed-in user's email
var loggedInEmail = localStorage.getItem("loggedInUserEmail");
if (loggedInEmail) {
  setColorTheme(loggedInEmail);
}
