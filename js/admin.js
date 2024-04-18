// Predefined users array
var predefinedUsers = [
  {
    email: "admin@gelder.co.uk",
    name: "Admin",
    job: "Administrator"
  },
  {
    email: "surveys@gelder.co.uk",
    name: "Test Name",
    job: "Surveyor"
  },
  {
    email: "managers@gelder.co.uk",
    name: "Manager",
    job: "Manager"
  },
  // Add more predefined users as needed.
];

// Function to prompt user for details
function promptUserDetails(email) {
  // Find the user associated with the provided email
  var user = predefinedUsers.find(function (user) {
    return user.email === email;
  });

  // If user is not found, redirect to login page
  if (!user) {
    alert("User not found. Redirecting to login page...");
    window.location.href = "index.html";
    return;
  }

  // Update profile information with user details
  document.getElementById("name").textContent = user.name;
  document.getElementById("job").textContent = user.job;

  // Enable clickable elements
  enableClickableElements();
}

// Call the function when the page loads
window.onload = function() {
  // Retrieve stored email from local storage
  var storedEmail = localStorage.getItem("loggedInUserEmail");

  // Check if stored email exists
  if (!storedEmail) {
    // If email does not exist, redirect to login page
    alert("No email found. Redirecting to login page...");
    window.location.href = "index.html";
    return;
  }

  promptUserDetails(storedEmail);
};

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

// Function to handle GitHub link
function handleGitHubLink() {
  var currentUser = document
    .getElementById("name")
    .textContent.trim()
    .toLowerCase();
  if (currentUser === "ty ashmore") {
    // Redirect to GitHub page
    window.location.href = "https://github.com/HaZeOneknight07/IT-Project";
  } else {
    // Display insufficient privileges message
    alert("Insufficient Privileges. If this is incorrect, contact Web Admin.");
  }
}

// Function to handle File Manager link
function handleFileManagerLink() {
  var currentUser = document
    .getElementById("name")
    .textContent.trim()
    .toLowerCase();
  if (currentUser !== "ty ashmore") {
    // Display insufficient privileges message
    alert("Insufficient Privileges. If this is incorrect, contact Web Admin.");
  }
  // You can add additional logic here if needed
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

  // Add "active" class to the clicked item
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
