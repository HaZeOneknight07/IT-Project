// Function to set color theme based on user's email
function setColorTheme(email) {
  // Default theme
  let theme = {
    "--footer-header-colour": "#405C59",
    "--sidebar-colour": "#D22A3A",
    // Add other default theme properties...
  };

  // CSS rules based on email
  let emailCSSRules = "";

  // Check email and set theme accordingly
  if (email === "admin@gelder.co.uk") {
    // Admin theme
    theme = {
      "--footer-header-colour": "#3a5a40",
      "--sidebar-colour": "#3a5a40",
      // Add more customizations as needed
    };
    // Apply separate CSS rule for admin@gelder.co.uk
    emailCSSRules = ".sidebar li a:hover { background: var(--sidebar-colour); }";
    emailCSSRules = ".sidebar .bx-search { background: var(--sidebar-colour); }";
    emailCSSRules = ".sidebar li.profile { background: var(--sidebar-colour); }";
    emailCSSRules = ".sidebar input { background: var(--sidebar-colour); }";
    emailCSSRules = ".login-box form button { background: var(--sidebar-colour); }";

  } else if (email === "surveys@gelder.co.uk") {
    // Surveyor theme
    theme = {
      "--footer-header-colour": "#405C59",
      "--sidebar-colour": "#D22A3A",
      // Add more customizations as needed
    };
    // Apply separate CSS rule for surveys@gelder.co.uk
    emailCSSRules = ".sidebar li a:hover { background: var(--sidebar-colour); }";
    emailCSSRules = ".sidebar .bx-search { background: var(--sidebar-colour); }";
    emailCSSRules = ".sidebar li.profile { background: var(--sidebar-colour); }";
    emailCSSRules = ".sidebar input { background: var(--sidebar-colour); }";
    emailCSSRules = ".login-box form button { background: var(--sidebar-colour); }";

  } else if (email === "managers@gelder.co.uk") {
    // Manager theme
    theme = {
      "--footer-header-colour": "#405C59",
      "--sidebar-colour": "#D22A3A",
      // Add more customizations as needed
    };
    // Apply separate CSS rule for managers@gelder.co.uk
    emailCSSRules = ".sidebar li a:hover { background: var(--sidebar-colour); }";
    emailCSSRules = ".sidebar .bx-search { background: var(--sidebar-colour); }";
    emailCSSRules = ".sidebar li.profile { background: var(--sidebar-colour); }";
    emailCSSRules = ".sidebar input { background: var(--sidebar-colour); }";
    emailCSSRules = ".login-box form button { background: var(--sidebar-colour); }";

  } else if (email === "ty.ashmore@gelder.co.uk") {
    // Manager theme
    theme = {
      "--footer-header-colour": "#643b9f",
      "--sidebar-colour": "#643b9f",
      // Add more customizations as needed
    };
    // Apply separate CSS rule for ty.ashmore@gelder.co.uk
    emailCSSRules = ".sidebar li a:hover { background: var(--sidebar-colour); }";
    emailCSSRules = ".bx-search { background: var(--sidebar-colour); }";
    emailCSSRules = ".sidebar li.profile { background: var(--sidebar-colour); }";
    emailCSSRules = ".sidebar input { background: var(--sidebar-colour); }";
    emailCSSRules = ".login-box form button { background: var(--sidebar-colour); }";
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
