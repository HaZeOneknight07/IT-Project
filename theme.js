// Function to set color theme based on user's email
function setColorTheme(email) {
    // Default theme
    let theme = {
      "--footer-header-colour": "#405C59",
      "--navigation-colour": "#D22A3A",
      "--container-colour": "#ADD8E6",
      "--button-hover-colour": "#333",
      "--button-colour": "#444",
      "--text-colour": "#FFF",
      "--button-text-colour": "#405C59",
      "--button-colour-submit": "#D22A3A",
      "--background-colour": "#f9f9f9",
      "--text-colour-light": "#151515",
      "--background-colour-dark": "#202225",
      "--text-colour-dark": "#405C59",
      "--empty-box-colour": "#405C59",
      "--full-box-colour": "#D22A3A",
      "--search-box-colour": "#DDD",
      "--rate-container-colour": "#888"
    };
  
    // Check email and set theme accordingly
    if (email === "admin@gelder.co.uk") {
      // Admin theme
      theme = {
        "--footer-header-colour": "#yourAdminColor",
        "--navigation-colour": "#yourAdminColor",
        // Add more customizations as needed
      };
    } else if (email === "surveys@gelder.co.uk") {
      // Surveyor theme
      theme = {
        "--footer-header-colour": "#yourSurveyorColor",
        "--navigation-colour": "#yourSurveyorColor",
        // Add more customizations as needed
      };
    } else if (email === "managers@gelder.co.uk") {
      // Manager theme
      theme = {
        "--footer-header-colour": "#yourManagerColor",
        "--navigation-colour": "#yourManagerColor",
        // Add more customizations as needed
      };
    } else if (email === "ty.ashmore@gelder.co.uk") {
        // Manager theme
        theme = {
          "--footer-header-colour": "#D22A3A",
          "--navigation-colour": "#yourManagerColor",
          // Add more customizations as needed
        };
    }
  
    // Apply the theme by setting CSS variables
    const root = document.documentElement;
    for (const [key, value] of Object.entries(theme)) {
      root.style.setProperty(key, value);
    }
}
  
// Call the function with the signed-in user's email
var loggedInEmail = localStorage.getItem("loggedInUserEmail");
if (loggedInEmail) {
    setColorTheme(loggedInEmail);
}
