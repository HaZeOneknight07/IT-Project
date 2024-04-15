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

// Check if the current page is admin.html
if (window.location.pathname.includes("admin.html")) {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the entered credentials match any in the credentials array
    for (var i = 0; i < credentials.length; i++) {
      if (username === credentials[i].username && password === credentials[i].password) {
        // Redirect to admin page upon successful login
        window.location.href = "/admin.html";
        return;
      }
    }

    // If no match found in the loop
    alert("Invalid login credentials. Please try again.");
  });
} else {
  // Redirect based on email address and password for other pages
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Redirect based on email address and password
    for (var i = 0; i < credentials.length; i++) {
      if (username === credentials[i].username && password === credentials[i].password) {
        // Store data in local storage
        localStorage.setItem("loggedInUsername", username);
        localStorage.setItem("loggedInPassword", password);

        // Redirect to respective pages
        if (username === "managers@gelder.co.uk") {
          window.location.href = "scheduleoption.html"; // Redirect to Schedule Option Page
        } else if (username === "surveyors@gelder.co.uk") {
          window.location.href = "hub.html"; // Redirect to Hub Page
        }
        return;
      }
    }

    // If no match found in the loop
    alert("Invalid login credentials. Please try again.");
  });
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