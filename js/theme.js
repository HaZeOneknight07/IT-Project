// Function to set color theme based on user's email
function setColorTheme(email) {
    console.log("Email:", email); // Check email value

    // Default theme
    let theme = {
      "--footer-header-colour": "#405C59",
      "--navigation-colour": "#D22A3A",
      // Other default theme properties...
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

    console.log("Theme:", theme); // Check theme object

    // Apply the theme by setting CSS variables
    const root = document.documentElement;
    for (const [key, value] of Object.entries(theme)) {
      root.style.setProperty(key, value);
    }
}

// Call the function with the signed-in user's email
var loggedInEmail = localStorage.getItem("loggedInUserEmail");
console.log("Logged in Email:", loggedInEmail); // Check loggedInEmail value
if (loggedInEmail) {
    setColorTheme(loggedInEmail);
}
