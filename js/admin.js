let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let pageNavigationBtn = document.querySelector("#pageNavigationBtn"); // Add this line

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search icon
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// Add event listener for the page navigation button
pageNavigationBtn.addEventListener("click", () => {
  togglePageNavigation(); // Call the function to toggle page navigation container
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the icons class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the icons class
  }
}

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
  // Check if there are any predefined users
  if (predefinedUsers.length === 0) {
    alert("No predefined users found. Please add some predefined users.");
    return;
  }

  var name = prompt("Please enter your name:", "");
  var job = prompt("Please enter your job title:", "");

  // If user cancels prompt or leaves fields empty, redirect to login page
  if (!name || !job) {
    alert("Name and job title are required.");
    window.location.href = "index.html";
    return;
  }

  // If the user is not predefined, redirect to login page
  if (!isUserPredefined(name, job)) {
    alert("You are not a predefined user. Redirecting to login page...");
    window.location.href = "index.html";
    return;
  }

  var imageUrl = ""; // Default image URL
  var found = false;

  // Check if the input matches any predefined user
  for (var i = 0; i < predefinedUsers.length; i++) {
    if (
      name.toLowerCase() === predefinedUsers[i].name.toLowerCase() &&
      job.toLowerCase() === predefinedUsers[i].job.toLowerCase()
    ) {
      // If matched, prompt for password if the user is Ty Ashmore
      if (name.toLowerCase() === "ty ashmore") {
        var password = prompt("Please enter the password for Ty Ashmore:", "");
        if (password !== predefinedUsers[i].password) {
          alert("Incorrect password for Ty Ashmore.");
          return;
        }
      }
      // Populate the image URL
      imageUrl = predefinedUsers[i].imageUrl;
      found = true;
      break; // Exit loop once a match is found
    }
  }

  // Update profile information with user details
  document.getElementById("name").textContent = name;
  document.getElementById("job").textContent = job;
  document.getElementById("profileImg").src = imageUrl;

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

// Function to show the form for adding users
function showAddUserForm() {
  document.getElementById("addUserForm").style.display = "block";
}

// Function to handle form submission
document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var job = document.getElementById("job").value;
    var imageUrl = prompt("Please enter the image URL for the user:", "");
    predefinedUsers.push({ name: name, job: job, imageUrl: imageUrl });
    document.getElementById("addUserForm").style.display = "none";
  });

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

