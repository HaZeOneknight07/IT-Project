// Function to set color theme based on user's email
function setColorTheme(email) {
  // Default theme
  let theme = {
      "--footer-header-colour": "#405C59",
      "--navigation-colour": "#D22A3A",
      // Other default theme properties...
  };

  // CSS rules based on email
  let emailCSSRules = "";

  // Check email and set theme accordingly
  if (email === "admin@gelder.co.uk") {
      // Admin theme
      theme = {
          "--footer-header-colour": "#219ebc",
          "--navigation-colour": "#yourAdminColor",
          // Add more customizations as needed
      };
      // Apply separate CSS rule for admin@gelder.co.uk
      emailCSSRules += ".sidebar i { background: #219ebc; }";
      emailCSSRules += ".sidebar i:hover { background: #219ebc; }";
      emailCSSRules = ".login-box form button { background: #219ebc; }";

  } else if (email === "surveys@gelder.co.uk") {
      // Surveyor theme
      theme = {
          "--footer-header-colour": "#2a9d8f",
          "--navigation-colour": "#yourSurveyorColor",
          // Add more customizations as needed
      };
      // Apply separate CSS rule for surveys.gelder.co.uk
      emailCSSRules += ".sidebar i { background: #2a9d8f; }";
      emailCSSRules += ".sidebar i:hover { background: #2a9d8f; }";
      emailCSSRules = ".login-box form button { background: #2a9d8f; }";

  } else if (email === "managers@gelder.co.uk") {
      // Manager theme
      theme = {
          "--footer-header-colour": "#d62828",
          "--navigation-colour": "#yourManagerColor",
          // Add more customizations as needed
      };
      // Apply separate CSS rule for managers@gelder.co.uk
      emailCSSRules += ".sidebar i { background: #d62828; }";
      emailCSSRules += ".sidebar i:hover { background: #d62828; }"; 
      emailCSSRules = ".login-box form button { background: #d62828; }";

  } else if (email === "ty.ashmore@gelder.co.uk") {
      // Manager theme
      theme = {
          "--footer-header-colour": "#643b9f",
          "--navigation-colour": "#yourManagerColor",
          // Add more customizations as needed
      };
      // Apply separate CSS rule for ty.ashmore@gelder.co.uk
      emailCSSRules += ".sidebar i { background: #643b9f; }";
      emailCSSRules += ".sidebar i:hover { background: #4a2c76; }"; 
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
