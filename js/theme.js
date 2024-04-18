// Function to set color theme based on user's email
function setColorTheme(email) {
  // Default theme
  let theme = {
      "--footer-header-colour": "#405C59",
      "--sidebar-colour": "#D22A3A",
      // Other default theme properties...
  };

  // CSS rules based on email
  let emailCSSRules = "";

  // Check email and set theme accordingly
  if (email === "admin@gelder.co.uk") {
      // Admin theme
      theme = {
          "--footer-header-colour": "#219ebc",
          "--sidebar-colour": "#219ebc",
          // Add more customizations as needed
      };
      // Apply separate CSS rule for admin@gelder.co.uk
      emailCSSRules = ".login-box form button { background: #219ebc; }";

  } else if (email === "surveys@gelder.co.uk") {
      // Surveyor theme
      theme = {
          "--footer-header-colour": "#2a9d8f",
          "--sidebar-colour": "#2a9d8f",
          // Add more customizations as needed
      };
      // Apply separate CSS rule for surveys.gelder.co.uk
      emailCSSRules = ".login-box form button { background: #2a9d8f; }";

  } else if (email === "managers@gelder.co.uk") {
      // Manager theme
      theme = {
          "--footer-header-colour": "#d62828",
          "--sidebar-colour": "#d62828",
          // Add more customizations as needed
      };
      // Apply separate CSS rule for managers@gelder.co.uk
      emailCSSRules = ".login-box form button { background: #d62828; }";

  } else if (email === "ty.ashmore@gelder.co.uk") {
      // My Theme
      theme = {
          "--footer-header-colour": "#643b9f",
          "--sidebar-colour": "#643b9f",
          // Add more customizations as needed
      };
      // Apply separate CSS rule for ty.ashmore@gelder.co.uk
      emailCSSRules = ".login-box form button { background: #643b9f; }";
  }

  // Apply the theme by setting CSS variables
  const root = document.documentElement;
  for (const [key, value] of Object.entries(theme)) {
      root.style.setProperty(key, value);
  }

  // Apply additional CSS rules
  const style = document.createElement('style');
  style.textContent = emailCSSRules;
  document.head.appendChild(style);
}

// Call the function with the signed-in user's email
var loggedInEmail = localStorage.getItem("loggedInUserEmail");
if (loggedInEmail) {
  setColorTheme(loggedInEmail);
}
