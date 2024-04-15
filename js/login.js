// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Authentication service
var auth = firebase.auth();

// Login form submission handler
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Sign in with email and password
    auth.signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
        // User successfully logged in
        var user = userCredential.user;
        // Redirect user to the appropriate page based on their role
        redirectUser(user.email);
    })
    .catch(function(error) {
        // Handle login errors
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Login error:", errorMessage);
        // Display error message to the user
        alert(errorMessage);
    });
});

// Function to redirect user based on their role
function redirectUser(email) {
    // Redirect based on email or any other criteria
    if (email === "managers@gelder.co.uk") {
        window.location.href = "scheduleoption.html"; // Redirect to Schedule Option Page
    } else if (email === "surveyors@gelder.co.uk") {
        window.location.href = "hub.html"; // Redirect to Hub Page
    } else if (email === "admin@gelder.co.uk") {
        window.location.href = "admin.html"; // Redirect to Admin Panel
    } else {
        // Redirect to a default page if no specific role is matched
        window.location.href = "default.html";
    }
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
