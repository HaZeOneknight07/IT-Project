// Login Validation Script

// Delay the hiding of preloader and showing login content after 5 seconds
setTimeout(function () {
  document.querySelector(".preloader-container").classList.add("hide");
  document.getElementById("main-content").classList.remove("hide");
}, 5000);

var credentials = [
  { username: "admin@gelder.co.uk", password: "ADMIN!Gelder18#" },
  { username: "surveys@gelder.co.uk", password: "GelderSurveyors1" },
  { username: "managers@gelder.co.uk", password: "GelderManagers1" },
  // Add more username/password pairs as needed using same format
];

function redirectToHome() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (var i = 0; i < credentials.length; i++) {
    if (
      username === credentials[i].username &&
      password === credentials[i].password
    ) {
      // Store data in local storage
      localStorage.setItem("loggedInUsername", username);
      localStorage.setItem("loggedInPassword", password);
      localStorage.setItem("loggedInUserEmail", username);

      // Redirect to Managers Version
      if (username === "managers@gelder.co.uk") {
        window.location.href = "scheduleoption.html"; // Redirect to Schedule Option Page
      }
      // Redirect to Surveyors Version
      else if (username === "surveys@gelder.co.uk") {
        window.location.href = "hub.html"; // Redirect to Hub Page
      }
      // Redirect to Admin Panel
      else if (username === "admin@gelder.co.uk") {
        window.location.href = "admin.html"; // Redirect to Admin Panel
      }
      return;
    }
  }
  
  // If no match found in the loop
  alert("Invalid login credentials. Please try again.");
}

// Caps Lock Indicator Script

document.getElementById("password").addEventListener("keyup", function (event) {
  var capsLockEnabled =
    event.getModifierState && event.getModifierState("CapsLock");
  var warningElement = document.querySelector(".caps-lock-warning");
  if (capsLockEnabled) {
    warningElement.style.display = "block";
  } else {
    warningElement.style.display = "none";
  }
});

// Predefined users array
var predefinedUsers = [
  {
    name: "Ty Ashmore",
    job: "Web Developer",
    imageUrl: "img/logo.svg",
    password: "secret",
  },
  { name: "Guest", job: "Developer", imageUrl: "img/logo.svg" },
  { name: "Guest1", job: "Developer", imageUrl: "img/logo.svg" },
  // Add more predefined users as needed.
];

// Function to dynamically generate user list HTML
function generateUserList(users) {
  var userListHTML = "";
  users.forEach(function (user) {
    userListHTML +=
      "<li>" +
      "<strong>Name:</strong> " +
      user.name +
      "<br>" +
      "<strong>Job:</strong> " +
      user.job +
      "</li>";
  });
  return userListHTML;
}

// Update the user list
document.getElementById("userList").innerHTML =
  generateUserList(predefinedUsers);

// Function to check if the user is predefined
function isUserPredefined(name, job) {
  return predefinedUsers.some(function (user) {
    return (
      user.name.toLowerCase() === name.toLowerCase() &&
      user.job.toLowerCase() === job.toLowerCase()
    );
  });
}

// Function to prompt user for details
function promptUserDetails() {
  // Retrieve stored email from local storage
  var storedEmail = localStorage.getItem("loggedInUserEmail");

  // Check if stored email exists
  if (!storedEmail) {
    // If email does not exist, redirect to login page
    alert("No email found. Redirecting to login page...");
    window.location.href = "index.html";
    return;
  }

  // Set default name and job title
  var name = "";
  var job = "";

  // Set name and job title based on the logged-in email
  switch (storedEmail) {
    case "admin@gelder.co.uk":
      name = "Admin";
      job = "Administrator";
      break;
    case "surveys@gelder.co.uk":
      name = "Test Name"; // Modify as needed
      job = "Surveyor"; // Modify as needed
      break;
    case "managers@gelder.co.uk":
      name = "Manager";
      job = "Manager";
      break;
    default:
      // Redirect to login page if email does not match predefined users
      alert("User not found. Redirecting to login page...");
      window.location.href = "index.html";
      return;
  }

  // Update profile information with user details
  document.getElementById("name").textContent = name;
  document.getElementById("job").textContent = job;

  // Enable clickable elements
  enableClickableElements();
}

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
window.onload = promptUserDetails;

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
