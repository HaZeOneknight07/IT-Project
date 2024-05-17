// Predefined users array
// Function to redirect users to the login page if they are not authenticated or not an admin
function redirectToLogin() {
  window.location.href = "index.html"; // Replace 'index.html' with your login page URL
}

// Check if a user is logged in
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is logged in, check if they are the admin
    if (user.email === "admin@gelder.co.uk") {
      // User is the admin, allow access
      console.log("Access granted");
      // Enable clickable elements here if needed
      enableClickableElements();
      // Update profile information
      document.getElementById("name").textContent = "Admin";
      document.getElementById("job").textContent = "Administrator";
    } else {
      // User is not the admin, redirect to login page
      alert("You do not have permission to access this page.");
      redirectToLogin();
    }
  } else {
    // No user is logged in, redirect to login page
    redirectToLogin();
  }
});

// Function to disable clickable elements
function disableClickableElements() {
  var clickableElements = document.querySelectorAll("a, button");
  clickableElements.forEach(function (element) {
    element.disabled = true;
  });
}

// Function to enable clickable elements
function enableClickableElements() {
  var clickableElements = document.querySelectorAll("a, button");
  clickableElements.forEach(function (element) {
    element.disabled = false;
  });
}

// Call the function when the page loads
window.onload = function () {
  // Disable clickable elements initially
  disableClickableElements();
};

// Sidebar functionality
var sidebar = document.querySelector(".sidebar");
var closeBtn = document.querySelector("#btn");
var searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}

function toggleUserMenu() {
  var menuContainer = document.getElementById("userMenuContainer");
  menuContainer.classList.toggle("show");
}

// Function to toggle the "active" class on clicked dashboard items
function toggleActiveClass(event) {
  // Remove "active" class from all dashboard items
  const dashboardItems = document.querySelectorAll(".nav-list li");
  dashboardItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Add "active" class to the clicked item.
  const clickedItem = event.currentTarget;
  clickedItem.classList.add("active");
}

// Add event listeners to all dashboard items
const dashboardItems = document.querySelectorAll(".nav-list li");
dashboardItems.forEach((item) => {
  item.addEventListener("click", toggleActiveClass);
});

//Dashboard Scripts.

function togglePageNavigation() {
  var pageNavigationContainer = document.getElementById(
    "pageNavigationContainer"
  );
  pageNavigationContainer.classList.toggle("show");
}

function navigateToPage() {
  var selectBox = document.getElementById("pageSelector");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValue) {
    window.location.href = selectedValue;
  }
}
